import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import basicImg from "../assets/sctele.png";
import premiumImg from "../assets/wamd.png";
import proImg from "../assets/telecmt.png";
import "../App.css";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const plans = [
    {
      title: "Sc Bot Telegram No Enc",
      price: "Rp 10.000",
      image: basicImg,
      features: [
        "Auto Share Otomatis",
        "Pesan terjadwal (teks & Gambar)",
        "Forward pesan (Reply Text Only)",
      ],
      detail:
        "Script bot telegram jashare ini cocok buat promosi penjualan kamu.",
    },
    {
      title: "Bot Whatsapp MD",
      price: "Rp 15.000",
      image: premiumImg,
      features: [
        "Semua fitur Basic",
        "Game RPG, tools, downloader",
        "sticker IQC",
      ],
      detail:
        "Script versi base dengan sistem game dan AI. Stabil untuk group besar dan cocok untuk developer yang ingin jual ulang bot.",
    },
    {
      title: "Bot Telegram CMT",
      price: "Rp 50.000",
      image: proImg,
      features: [
        "Membuat Methode Banned Whatsapp",
        "Membuat Methode Fakechat & 2Nomor",
        "Membuat Methode Dengan Berbagai Thema",
      ],
      detail:
        "Script Bot Ini Memudahkan Anda Dalam Membuat Murid Banned Membuat Metode Melalui Bot, dan dukungan penuh dari tim VINSSBOTZ.",
    },
  ];

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

  const cardVariants = {
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
    <section id="pricing" className="pricing-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        💰 Pilihan Paket Script Bot
      </motion.h2>

      <motion.div
        className="pricing-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="pricing-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={plan.image}
              alt={plan.title}
              className="pricing-img-simple"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            />
            <h3>{plan.title}</h3>
            <motion.p
              className="price"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            >
              {plan.price}
            </motion.p>
            <ul>
              {plan.features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + i * 0.1 + 0.4 }}
                >
                  ✅ {f}
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="btn-detail"
              onClick={() => setSelectedPlan(plan)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Lihat Detail
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal detail */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            className="modal-overlay"
            onClick={() => setSelectedPlan(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={selectedPlan.image}
                alt={selectedPlan.title}
                className="modal-img-simple"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <h3>{selectedPlan.title}</h3>
              <p>{selectedPlan.detail}</p>
              <motion.button
                className="btn-close"
                onClick={() => setSelectedPlan(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tutup
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;