import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../App.css";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: "🤖",
      title: "BOT WA MD",
      description: "Bot Whatsapp Yang Multi Device (Download, Game, Dll",
      color: "#FF6B6B"
    },
    {
      icon: "📥",
      title: "Bot Wa Store",
      description: "Bot Wa Store Yang Membantu Penjualan Anda",
      color: "#4ECDC4"
    },
    {
      icon: "🎮",
      title: "Bot tele Sahre",
      description: "Bot tele Yang Membantu Anda Untuk Mempromosikan Penjualan",
      color: "#45B7D1"
    },
    {
      icon: "🛠️",
      title: "Bot Tele Store",
      description: "Bot Telegram Store Membantu Anda Menampilkan Produk Penjualan Anda",
      color: "#96CEB4"
    },
    {
      icon: "⚡",
      title: "All Bot",
      description: "Bot Yang Mempunyai Banyak Fungsi Yang Bisa Digunakan Untuk Bermain Dan Berjualan",
      color: "#FFEAA7"
    },
    {
      icon: "🔒",
      title: "Bot Tele CMT",
      description: "Bot Telegram Yang Membuat Metode Banned Whatsapp fakechat / 2Nomor",
      color: "#DDA0DD"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="features-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Fitur Unggulan VINSSBOTZ
        </motion.h2>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="feature-icon"
                style={{ backgroundColor: feature.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;