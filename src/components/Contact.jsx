import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="border-b border-neutral-900 py-16"
    >
      <h1 className="my-10 text-center text-4xl font-semibold">{t("contact.title")}</h1>
      <section className="text-center tracking-tighter">
        <p className="my-4 text-lg">{t("contact.address", { defaultValue: CONTACT.address })}</p>
        <p className="my-4 text-lg">{t("contact.phone", { defaultValue: CONTACT.phone })}</p>
        <p className="my-4 text-lg">{t("contact.phone1", { defaultValue: CONTACT.phone1 })}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b text-lg text-blue-600 hover:text-blue-800"
        >
          {t("contact.email", { defaultValue: CONTACT.email })}
        </a>
      </section>
    </motion.div>
  );
};

export default Contact;
