"use client"

import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { toast, ToastContainer } from "react-toastify"
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import "react-toastify/dist/ReactToastify.css"

const fetchProducts = async () => {
  const response = await fetch("https://672a011d6d5fa4901b6f5382.mockapi.io/products")
  return response.json()
}

const DisplayProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [infoModalOpen, setInfoModalOpen] = useState(false)
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for the interactive background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const openInfoModal = (product) => {
    setSelectedProduct(product)
    setInfoModalOpen(true)
  }

  const closeInfoModal = () => {
    setInfoModalOpen(false)
    setSelectedProduct(null)
  }

  const openOrderModal = () => {
    setInfoModalOpen(false)
    setOrderModalOpen(true)
  }

  const closeOrderModal = () => {
    setOrderModalOpen(false)
    setIsSubmitting(false)
    setQuantity(1)
    reset()
  }

  const handleOrder = async (formData) => {
    if (isSubmitting) return
    setIsSubmitting(true)

    if (!formData.name || !formData.phone || !formData.age) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring.", { theme: "dark" })
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(
        "service_ibrohim",
        "template_0qmgzw8",
        {
          to_name: "Admin",
          product_name: selectedProduct.name,
          quantity,
          price: selectedProduct.price,
          user_name: formData.name,
          user_phone: formData.phone,
          user_age: formData.age,
        },
        "e8oAdoKSQgYaExGfn",
      )

      toast.success("Buyurtma muvaffaqiyatli yuborildi!", { theme: "dark" })
      closeOrderModal()
    } catch (error) {
      toast.error("Jo'natishda xatolik yuz berdi.", { theme: "dark" })
      setIsSubmitting(false)
    }
  }

  if (isLoading)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute w-full h-full border-4 border-t-blue-500 border-r-transparent border-b-green-500 border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute w-full h-full border-4 border-t-transparent border-r-purple-500 border-b-transparent border-l-red-500 rounded-full animate-spin animation-delay-500"></div>
        </div>
      </div>
    )

  if (error)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl bg-black/50 p-6 rounded-lg border border-red-500">
          Error: {error.message}
        </div>
      </div>
    )

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Interactive background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),rgba(0,0,0,0.9))]"
        style={{
          backgroundPosition: `${mousePosition.x / 20}px ${mousePosition.y / 20}px`,
        }}
      ></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTFhMWEiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')]"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-3/4 right-1/3 w-64 h-64 rounded-full bg-green-500/10 blur-3xl animate-pulse animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="container mx-auto px-4 py-12">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-green-400"
          >
            Product Catalog
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg backdrop-blur-sm">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-green-500/20 blur-xl"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Image with overlay */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

                      {/* Price tag */}
                      <div className="absolute top-3 right-3 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                        ${product.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 relative">
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {product.name}
                      </h2>
                      <p className="text-gray-400 text-sm mb-5 line-clamp-2">{product.comment}</p>

                      <button
                        onClick={() => openInfoModal(product)}
                        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 opacity-90 group-hover:opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Info Modal */}
        <AnimatePresence>
          {infoModalOpen && selectedProduct && (
            <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/70"
                onClick={closeInfoModal}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="relative max-w-md w-full mx-4 z-10 perspective-1000"
              >
                {/* Card with 3D effect */}
                <div className="relative p-6 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-gray-800 overflow-hidden transform-gpu hover:rotate-y-5 transition-transform duration-500">
                  {/* Decorative elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>

                  {/* Animated lines */}
                  <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan-horizontal"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-scan-vertical"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scan-horizontal animation-delay-500"></div>
                    <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-scan-vertical animation-delay-500"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-green-400">
                        {selectedProduct.name}
                      </h2>
                      <button
                        onClick={closeInfoModal}
                        className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800/50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="relative rounded-xl overflow-hidden mb-6 shadow-[0_0_25px_rgba(0,0,0,0.5)] group">
                      <img
                        src={selectedProduct.image || "/placeholder.svg"}
                        alt={selectedProduct.name}
                        className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60"></div>
                    </div>

                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-400 text-sm">Price</span>
                        <div className="flex items-center">
                          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                            ${selectedProduct.price}
                          </span>
                          <div className="ml-2 w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="h-0.5 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 rounded-full"></div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                        <p className="text-gray-300 font-medium">{selectedProduct.comment}</p>
                      </div>

                      <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                        <p className="text-gray-400 text-sm">
                          {selectedProduct.description || "No additional details available for this product."}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={openOrderModal}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 text-white rounded-xl font-medium shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={closeInfoModal}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-medium shadow-lg hover:shadow-gray-800/30 transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Order Modal */}
        <AnimatePresence>
          {orderModalOpen && selectedProduct && (
            <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/70"
                onClick={closeOrderModal}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="relative max-w-md w-full mx-4 z-10 perspective-1000 max-h-[90vh] overflow-y-auto"
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-gray-800 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>

                  {/* Animated lines */}
                  <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan-horizontal"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-scan-vertical"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scan-horizontal animation-delay-500"></div>
                    <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-scan-vertical animation-delay-500"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-green-400">
                          Order: {selectedProduct.name}
                        </h2>
                        <div className="flex items-center mt-1">
                          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                            ${selectedProduct.price}
                          </span>
                          <div className="ml-2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        </div>
                      </div>
                      <button
                        onClick={closeOrderModal}
                        className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800/50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="mb-6 bg-gray-900/50 p-4 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                      <div className="relative">
                        <div className="flex items-center">
                          <button
                            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                            className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-l-lg border border-gray-700 hover:bg-gray-700 transition-colors"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                            className="h-10 px-3 py-2 border-t border-b border-gray-700 bg-gray-900 w-full text-center text-white focus:outline-none"
                            min="1"
                          />
                          <button
                            onClick={() => setQuantity((prev) => prev + 1)}
                            className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-r-lg border border-gray-700 hover:bg-gray-700 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit(handleOrder)} className="space-y-5">
                      <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input
                          type="text"
                          {...register("name", { required: "Name is required" })}
                          className="p-3 border border-gray-700 bg-gray-900/80 rounded-lg w-full text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                      </div>

                      <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                        <input
                          type="text"
                          {...register("phone", { required: "Phone number is required" })}
                          className="p-3 border border-gray-700 bg-gray-900/80 rounded-lg w-full text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                      </div>

                      <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
                        <input
                          type="number"
                          {...register("age", { required: "Age is required" })}
                          className="p-3 border border-gray-700 bg-gray-900/80 rounded-lg w-full text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your age"
                        />
                        {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age.message}</p>}
                      </div>

                      <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="terms"
                            {...register("terms", { required: "You must accept the terms" })}
                            className="w-5 h-5 rounded border-gray-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                          />
                          <span className="text-sm text-gray-300">I agree to all terms and conditions</span>
                        </label>
                        {errors.terms && <p className="text-red-400 text-sm mt-1">{errors.terms.message}</p>}
                      </div>

                      <div className="pt-2 flex gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`flex-1 py-3 px-4 ${
                            isSubmitting
                              ? "bg-gray-700 cursor-not-allowed"
                              : "bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transform hover:-translate-y-1"
                          } text-white rounded-xl font-medium shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300`}
                        >
                          {isSubmitting ? "Processing..." : "Place Order"}
                        </button>
                        <button
                          type="button"
                          onClick={closeOrderModal}
                          className="flex-1 py-3 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium shadow-lg hover:shadow-red-600/30 transform hover:-translate-y-1 transition-all duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <ToastContainer theme="dark" />
      </motion.div>
    </div>
  )
}

export default DisplayProducts
