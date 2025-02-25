import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";

const fetchProducts = async () => {
  const response = await fetch('https://672a011d6d5fa4901b6f5382.mockapi.io/products');
  const data = await response.json();
  return data;
};

const DisplayProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,     
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setIsSubmitting(false);
    setQuantity(1);
  };

  const handleOrder = async (formData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await emailjs.send('service_ibrohim', 'template_0qmgzw8', {
        to_name: 'Admin',
        message: `New order: ${selectedProduct.name} (${selectedProduct.price}$ x ${quantity}). Customer details: Name: ${formData.name}, Phone: ${formData.phone}, Age: ${formData.age}.`,
        user_email: 'admin-email@example.com',
      }, 'e8oAdoKSQgYaExGfn');

      toast.success('Buyurtma jo\'natildi!');
      closeModal();
    } catch (error) {
      toast.error('Jo\'natishda xatolik yuz berdi.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
      <div className="p-4 bg-gradient-to-b min-h-screen">
        <h1 className="text-2xl font-bold text-center mb-8">Product Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <div key={product.id} className="shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-blue-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <p className="text-green-500 font-semibold text-lg">${product.price}</p>
                <p className="text-gray-600 mt-2">{product.comment}</p>
                <button onClick={() => openModal(product)} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Buy Now</button>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }} className="p-6 bg-gray-900 text-white rounded-lg shadow-xl max-w-sm w-full">
              <h2 className="text-xl font-semibold">Order {selectedProduct.name}</h2>
              <p className="text-green-400 font-bold">${selectedProduct.price}</p>
              <p className="text-gray-300">{selectedProduct.comment}</p>
              <p className="text-gray-400 mt-2">Full description: {selectedProduct.description || 'No additional details available.'}</p>

              <div className="mt-4">
                <label className="block text-sm font-medium">Quantity</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="mt-1 p-2 border rounded w-full text-black" />
              </div>

              <form onSubmit={handleSubmit(handleOrder)} className="mt-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium">Name</label>
                  <input type="text" {...register('name', { required: 'Name is required' })} className="mt-1 p-2 border rounded w-full text-black" />
                  {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">Phone Number</label>
                  <input type="text" {...register('phone', { required: 'Phone number is required' })} className="mt-1 p-2 border rounded w-full text-black" />
                  {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">Age</label>
                  <input type="number" {...register('age', { required: 'Age is required' })} className="mt-1 p-2 border rounded w-full text-black" />
                  {errors.age && <p className="text-red-400 text-sm">{errors.age.message}</p>}
                </div>

                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" {...register('terms', { required: 'You must accept the terms' })} className="mr-2" />
                    I agree to the terms and conditions
                  </label>
                  {errors.terms && <p className="text-red-400 text-sm">{errors.terms.message}</p>}
                </div>

                <div className="mt-4 flex justify-between">
                  <button type="submit" disabled={isSubmitting} className={`py-2 px-4 ${isSubmitting ? 'bg-gray-500' : 'bg-green-500'} text-white rounded hover:bg-green-600`}> 
                    {isSubmitting ? 'Submitting...' : 'Confirm Order'}
                  </button>
                  <button type="button" onClick={closeModal} className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Cancel</button>
                </div>
              </form>
            </motion.div>
          </div>  
        )}
      </div>
    </motion.div>
  );
};

export default DisplayProducts;
