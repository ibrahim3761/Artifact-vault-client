import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 text-center px-4 overflow-hidden relative">
      <title>ArtifactVault - 404 Not Found</title>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-amber-200 opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-orange-200 opacity-20"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="relative z-10 max-w-2xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <h1 className="text-8xl md:text-9xl font-black text-amber-600 mb-6">
            <motion.span 
              className="inline-block"
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              4
            </motion.span>
            <motion.span 
              className="inline-block"
              animate={{ 
                rotate: [0, -5, 5, 0],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.5
              }}
            >
              0
            </motion.span>
            <motion.span 
              className="inline-block"
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 1
              }}
            >
              4
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-amber-800 mb-8 font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Oops! The page you're seeking has vanished into the digital void.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl text-lg md:text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Return to the Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-amber-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() > 0.5 ? 1 : -1) * 20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Error;