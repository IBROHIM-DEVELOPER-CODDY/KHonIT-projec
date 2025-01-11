import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import img from "./../assets/IMG/kevinRushProfile (1).jpg";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const imgMotion = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg-mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt16 lg:text-8xl"
                        >
                            KhonIT
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent"
                        >
                            Frontend Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            KhonIT zamonaviy texnologiyalar va IT sohasida faoliyat olib
                            boruvchi tajribali mutaxassis. U asosan frontend dasturlash bilan
                            shug‘ullanadi va React.js asosida loyihalar ishlab chiqishda yuqori
                            ko‘nikmaga ega. Ish jarayonida samaradorlikni oshirish uchun Vite
                            kabi zamonaviy vositalardan foydalanishni afzal ko‘radi. Styling
                            uchun esa Tailwind CSS orqali dizaynlarni sodda va chiroyli shaklda
                            yaratadi.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            variants={imgMotion(0)}
                            animate="visible"
                            initial="hidden"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent"
                            src={img}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;