import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../App.css";
import aboutImage from "../assets/about-bot.png";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="about-image" variants={imageVariants}>
          <motion.img 
            src={aboutImage} 
            alt="Tentang VINSSBOTZ"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="about-content">
          <motion.h2 className="section-title" variants={itemVariants}>
            Tentang <span className="highlight-text">Vinss Students</span>
          </motion.h2>
          
          <motion.p className="about-desc" variants={itemVariants}>
            <strong>Vinss Students</strong> adalah Konten Creator Yang Membuat Dan Membagikan Sebuah Script Bot
            untuk membantu pengguna dalam berbagai kebutuhan — mulai dari <em>AI Chat</em>,
            <em>Downloader Media</em> (YouTube, TikTok, Instagram), hingga sistem <em>Game RPG</em>
            dan fitur-fitur keren lainnya tanpa perlu API berbayar.
          </motion.p>
          
          <motion.p className="about-desc" variants={itemVariants}>
            Kami berfokus pada kemudahan penggunaan, kinerja tinggi, serta
            mempermudahkan untuk digunakan oleh siapa pun — baik untuk keperluan pribadi
            maupun bisnis digital Anda.
          </motion.p>

          <motion.div className="about-features" variants={itemVariants}>
            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <span className="feature-icon">⚙️</span>
              <div>
                <h4>Kustomisasi Penuh</h4>
                <p>Ubah nama bot, menu, hingga sistem sesuai gaya kamu.</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <span className="feature-icon">🧠</span>
              <div>
                <h4>AI Chat & Smart Tools</h4>
                <p>Integrasi AI dan berbagai tools praktis siap pakai.</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <span className="feature-icon">🎮</span>
              <div>
                <h4>Game & Hiburan</h4>
                <p>Fitur game RPG, tebak-tebakan, dan slot yang seru dimainkan.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
