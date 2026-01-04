import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const Work = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-amber-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-amber-500 rotate-45"></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Main heading with Sanskrit-style font */}
          <h1 
            className="text-[20vw] md:text-[15vw] leading-none tracking-wider font-bold"
            style={{
              fontFamily: "'Cinzel Decorative', 'Trajan Pro', serif",
              background: "linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
            }}
          >
            SANGAM
          </h1>
          
          {/* Year with elegant styling */}
          <motion.h2 
            className="text-[12vw] md:text-[8vw] leading-none tracking-widest font-semibold mt-4"
            style={{
              fontFamily: "'Cinzel', 'Trajan Pro', serif",
              background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
            }}
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 215, 0, 0.3)",
                "0 0 40px rgba(255, 215, 0, 0.6)",
                "0 0 20px rgba(255, 215, 0, 0.3)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            2026
          </motion.h2>

          {/* Decorative divider */}
          <motion.div 
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-500"></div>
            <div className="w-3 h-3 rotate-45 border-2 border-amber-500"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-500"></div>
          </motion.div>

          {/* Optional tagline */}
          <motion.p
            className="text-amber-400 text-lg md:text-2xl mt-6 tracking-wide"
            style={{ fontFamily: "'Cinzel', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            A Confluence of Cultures
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;