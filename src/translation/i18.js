import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      technologies: "Technologies",
      experience: {
        title: "Experience",
        description: "My professional journey and past work experiences."
      },
      aboutMe: "About Me",
      description: "KhonIT is an experienced specialist working in the field of modern technology and IT. He mainly deals with frontend development and has high skills in developing projects based on React.js. He prefers to use modern tools like Vite to increase efficiency in the work process. For styling, he uses Tailwind CSS to create simple and beautiful designs.",
      hero: {
        title: "KhonIT",
        subtitle: "Frontend Developer",
        description: "KhonIT is an experienced specialist in modern technologies and IT. He mainly focuses on frontend development using React.js and prefers modern tools like Vite for enhanced efficiency. For styling, he utilizes Tailwind CSS to create simple and beautiful designs."
      },
      projects: "Projects",
      contact: {
        title: "Get In Touch",
        address: "Uzbekistan, Tashkent city, Shayhantahur district, Sarhumdon street house-39, apartment-9",
        phone1: "+998 94 095 11 45",
        phone: "+998 99 511 59 98",
        email: "khonit29@gmail.com"
      },
      displayProduct: {
        title: "Product Display",
        description: "Explore our latest products with high-quality standards.",
        price: "Price",
        addToCart: "Add to Cart"
      }
    }
  },
  ru: {
    translation: {
      technologies: "Технологии",
      experience: {
        title: "Опыт",
        description: "Мой профессиональный путь и прошлый опыт работы."
      },
      aboutMe: "Обо мне",
      description: "KhonIT — опытный специалист, работающий в области современных технологий и IT. Он в основном занимается фронтенд-разработкой и обладает высокими навыками в создании проектов на основе React.js. В рабочем процессе он предпочитает использовать современные инструменты, такие как Vite, для повышения эффективности. Для стилизации он использует Tailwind CSS, чтобы создавать простые и красивые дизайны.",
      hero: {
        title: "KhonIT",
        subtitle: "Frontend-разработчик",
        description: "KhonIT — опытный специалист в области современных технологий и IT. Он в основном занимается фронтенд-разработкой на React.js и предпочитает современные инструменты, такие как Vite, для повышения эффективности. Для стилизации он использует Tailwind CSS для создания простых и красивых дизайнов."
      },
      projects: "Проекты",
      contact: {
        title: "Свяжитесь с нами",
        address: "Узбекистан, г. Ташкент, Шайхантахурский район, ул. Сархумдон дом-39, квартира-9",
        phone1: "+998 94 095 11 45",
        phone: "+998 99 511 59 98",
        email: "khonit29@gmail.com"
      },
      displayProduct: {
        title: "Отображение продукта",
        description: "Ознакомьтесь с нашими новейшими продуктами высокого качества.",
        price: "Цена",
        addToCart: "Добавить в корзину"
      }
    }
  },
  uz: {
    translation: {
      technologies: "Texnologiyalar",
      experience: {
        title: "Tajriba",
        description: "Mening professional yo‘lim va oldingi ish tajribalarim."
      },
      aboutMe: "Men Haqimda",
      description: "KhonIT zamonaviy texnologiyalar va IT sohasida faoliyat olib boruvchi tajribali mutaxassis. U asosan frontend dasturlash bilan shug‘ullanadi va React.js asosida loyihalar ishlab chiqishda yuqori ko‘nikmaga ega. Ish jarayonida samaradorlikni oshirish uchun Vite kabi zamonaviy vositalardan foydalanishni afzal ko‘radi. Styling uchun esa Tailwind CSS orqali dizaynlarni sodda va chiroyli shaklda yaratadi.",
      hero: {
        title: "KhonIT",
        subtitle: "Frontend Developer",
        description: "KhonIT zamonaviy texnologiyalar va IT sohasida faoliyat yurituvchi tajribali mutaxassis. U asosan React.js asosida frontend dasturlash bilan shug‘ullanadi va samaradorlikni oshirish uchun Vite kabi zamonaviy vositalardan foydalanadi. Dizayn uchun esa Tailwind CSS dan foydalanadi."
      },
      projects: "Loyihalar",
      contact: {
        title: "Biz bilan bog‘laning",
        address: "Uzbekistan Respublikasi, Toshkent shahri Shayxontohur tumani, Sarxumdon Uy-39, Kvartira-9",
        phone1: "+998 99 511 59 98",
        phone: "+998 94 095 11 45",
        email: "khonit29@gmail.com"
      },
      displayProduct: {
        title: "Mahsulot Ko‘rinishi",
        description: "Eng sifatli mahsulotlarimiz bilan tanishing.",
        price: "Narx",
        addToCart: "Savatga qo‘shish"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
