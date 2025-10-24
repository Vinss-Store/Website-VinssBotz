import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Apakah bot ini bisa digunakan untuk bisnis?",
            answer: "Tentu saja! Bot VINSSBOTZ sangat cocok untuk bisnis online, customer service, dan automasi WhatsApp bisnis Anda."
        },
        {
            question: "Bagaimana cara install dan setup bot?",
            answer: "Kami menyediakan panduan lengkap step-by-step dan video tutorial. Plus, tim support siap membantu proses instalasi."
        },
        {
            question: "Apakah ada garansi jika bot error?",
            answer: "Ya! Kami memberikan garansi 30 hari dan support gratis untuk perbaikan bug atau error yang terjadi."
        },
        {
            question: "Bisakah menambah fitur custom sesuai kebutuhan?",
            answer: "Bisa! Untuk paket Pro All-In-One, kami menyediakan layanan kustomisasi fitur sesuai kebutuhan spesifik Anda."
        },
        {
            question: "Apakah bot ini aman dari banned WhatsApp?",
            answer: "Bot kami menggunakan teknik anti-banned dan rate limiting yang aman. Namun, penggunaan yang berlebihan tetap berisiko."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    ❓ Pertanyaan yang Sering Diajukan
                </motion.h2>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h4>{faq.question}</h4>
                                <motion.span
                                    className="faq-icon"
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    ▼
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;