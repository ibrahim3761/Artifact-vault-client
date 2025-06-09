import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Explore Rare Artifacts",
      subtitle: "Dive into a world of cultural treasures from ancient civilizations",
      gradient: "from-yellow-900 to-yellow-800",
      accent: "from-yellow-600 to-yellow-500"
    },
    {
      title: "Preserve Digital History",
      subtitle: "Safeguard and manage artifacts using modern digital solutions",
      gradient: "from-yellow-800 to-yellow-900",
      accent: "from-yellow-500 to-yellow-400"
    },
    {
      title: "Join the Vault",
      subtitle: "Become part of our growing digital archive and showcase your collection",
      gradient: "from-yellow-900 to-amber-900",
      accent: "from-amber-600 to-yellow-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: { opacity: 0, x: 300 },
    center: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: -300,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.4 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 mt-6"
    >
      <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} flex items-center justify-center`}
          >
            {/* Subtle accent gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].accent} opacity-10`} />
            
            {/* Content */}
            <div className="text-center text-yellow-100 z-10 px-8 max-w-4xl">
              <motion.h2
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h2>
              
              <motion.p
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                className="text-lg md:text-xl opacity-90 leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </div>

            {/* Simple accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${slides[currentSlide].accent} rounded-full`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <motion.button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-yellow-100/20 backdrop-blur-sm rounded-full flex items-center justify-center text-yellow-100 hover:bg-yellow-100/30 transition-all duration-300 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-yellow-100/20 backdrop-blur-sm rounded-full flex items-center justify-center text-yellow-100 hover:bg-yellow-100/30 transition-all duration-300 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>

        {/* Clean slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-100' : 'bg-yellow-100/40'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;