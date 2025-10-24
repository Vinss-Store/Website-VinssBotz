import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import heroImage from "../assets/hero-bot.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="hero-upgraded">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-left">
          <motion.h1 variants={itemVariants}>
            <span className="hero-highlight">VINSSBOTZ</span> 🚀 <br />
            <span className="hero-gradient-text">Script WhatsApp Bot</span><br />
            <span className="hero-accent">Paling Canggih</span>
          </motion.h1>

          <motion.p variants={itemVariants}>
            Kembangkan bot WhatsApp all-in-one kamu sendiri — lengkap dengan fitur
            downloader, AI Chat, Game RPG, dan sistem tools otomatis yang cerdas.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#pricing"
              className="btn-main"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Lihat Harga
            </motion.a>
            <motion.a
              href="https://t.me/VinssBoyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🔍 Hubungi Kami
            </motion.a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>+500</h3>
              <p>Pengguna Aktif</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>99%</h3>
              <p>Uptime Server</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>24/7</h3>
              <p>Support Developer</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-right">
          <motion.div
            className="hero-img-wrapper"
            variants={imageVariants}
          >
            {/* Border Berputar */}
            <div className="rotating-border"></div>
            <div className="inner-border"></div>

            {/* Coding Icons - Di Sisi Gambar */}
            <div className="coding-icons-sides">
              {/* Icon Atas */}
              <motion.div
                className="side-icon icon-top"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚛️
              </motion.div>

              {/* Icon Kanan */}
              <motion.div
                className="side-icon icon-right"
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, -360, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                💻
              </motion.div>

              {/* Icon Bawah */}
              <motion.div
                className="side-icon icon-bottom"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                🚀
              </motion.div>

              {/* Icon Kiri */}
              <motion.div
                className="side-icon icon-left"
                animate={{
                  x: [0, -10, 0],
                  rotate: [0, -360, 0]
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                ⚡
              </motion.div>
            </div>

            {/* Gambar Utama */}
            <motion.img
              src={heroImage}
              alt="VINSSBOTZ Hero"
              className="hero-img"
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            />

            {/* Efek Glow */}
            <div className="hero-glow"></div>

            {/* Pulse Ring - Hanya 1 */}
            <div className="pulse-rings">
              <div className="pulse-ring ring-main"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="wave"></div>
    </section>
  );
};

export default Hero;
