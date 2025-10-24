import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        <motion.h1
          className="logo"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          VINSSBOTZ
        </motion.h1>

        <div className="navbar-right">
          <ThemeToggle />

          <motion.div
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="hamburger"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        <motion.ul
          className={`nav-links ${isOpen ? "active" : ""}`}
          variants={navVariants}
        >
          <motion.li variants={linkVariants}>
            <motion.a
              href="#hero"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1, color: "#00ffc6" }}
              transition={{ duration: 0.2 }}
            >
              Home
            </motion.a>
          </motion.li>
          <motion.li variants={linkVariants}>
            <motion.a
              href="#about"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1, color: "#00ffc6" }}
              transition={{ duration: 0.2 }}
            >
              About Me
            </motion.a>
          </motion.li>
          <motion.li variants={linkVariants}>
            <motion.a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1, color: "#00ffc6" }}
              transition={{ duration: 0.2 }}
            >
              Harga
            </motion.a>
          </motion.li>
          <motion.li variants={linkVariants}>
            <motion.a
              href="#faq"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1, color: "#00ffc6" }}
              transition={{ duration: 0.2 }}
            >
              FAQ
            </motion.a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
