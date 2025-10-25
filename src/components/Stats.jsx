import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../App.css";

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [counts, setCounts] = useState({
    users: 0,
    downloads: 0,
    uptime: 0,
    support: 0
  });

  const finalCounts = {
    users: 500,
    downloads: 1200,
    uptime: 99,
    support: 24
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          users: Math.floor(finalCounts.users * progress),
          downloads: Math.floor(finalCounts.downloads * progress),
          uptime: Math.floor(finalCounts.uptime * progress),
          support: Math.floor(finalCounts.support * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, finalCounts]);

  const stats = [
    {
      icon: "👥",
      number: counts.users,
      suffix: "+",
      label: "Pengguna Aktif",
      color: "#FF6B6B"
    },
    {
      icon: "📊",
      number: counts.downloads,
      suffix: "+",
      label: "Total Download",
      color: "#4ECDC4"
    },
    {
      icon: "⚡",
      number: counts.uptime,
      suffix: "%",
      label: "Uptime Server",
      color: "#45B7D1"
    },
    {
      icon: "🕐",
      number: counts.support,
      suffix: "/7",
      label: "Support Online",
      color: "#96CEB4"
    }
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="stat-icon"
                style={{ backgroundColor: stat.color }}
                animate={{ 
                  rotate: inView ? [0, 360] : 0 
                }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2 
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                className="stat-number"
                style={{ color: stat.color }}
              >
                {stat.number}{stat.suffix}
              </motion.h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;