import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer-simple"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="footer-copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        © 2025 VINSSBOTZ. All Rights Reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
