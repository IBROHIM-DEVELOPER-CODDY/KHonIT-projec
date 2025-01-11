import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="border-b border-neutral-900 py-16"
    >
      <h1 className="my-10 text-center text-4xl font-semibold">Get In Touch</h1>
      <section className="text-center tracking-tighter">
        <p className="my-4 text-lg">{CONTACT.address}</p>
        <p className="my-4 text-lg">{CONTACT.phone}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b text-lg text-blue-600 hover:text-blue-800"
        >
          {CONTACT.email}
        </a>
      </section>
    </motion.div>
  )
}

export default Contact;
