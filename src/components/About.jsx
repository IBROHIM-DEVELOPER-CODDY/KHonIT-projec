import { motion } from 'framer-motion';
import okaxon from "../../public/img/photo_2024-12-21_16-38-12.jpg";
import { useTranslation } from 'react-i18next';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
          About Me
      </motion.h1>

      <div className="flex flex-wrap justify-center">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl animate-fadeInDelayed"
              src={okaxon}
              alt="Profile picture of KhonIT"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}

          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg leading-relaxed animate-fadeInDelayed">
              KhonIT zamonaviy texnologiyalar va IT sohasida faoliyat olib boruvchi tajribali mutaxassis. U asosan frontend dasturlash bilan shug‘ullanadi va React.js asosida loyihalar ishlab chiqishda yuqori ko‘nikmaga ega. Ish jarayonida samaradorlikni oshirish uchun Vite kabi zamonaviy vositalardan foydalanishni afzal ko‘radi. Styling uchun esa Tailwind CSS orqali dizaynlarni sodda va chiroyli shaklda yaratadi.

              KhonITning eng katta kuchli tomonlaridan biri — foydalanuvchi interfeysi va backend integratsiyasini uyg‘un qilishdir. U ko‘pincha react-hook-form, react-toastify va react-query kutubxonalarini o‘z loyihalariga kiritadi, bu esa mahsulotning foydalanish qulayligini oshiradi.
            </p>
            <h1></h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
