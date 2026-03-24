import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-brand-navy">
      
      {/* Deep dark radial gradient for that tech abyss look */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0A1526_0%,#050B14_100%)]"></div>

      {/* Dense geometric vector mesh to directly match the user's screenshot */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070')" 
        }}
      ></div>

      {/* Cybernetic Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,209,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Heavy animated Glowing Particles tracing the grid */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-accent shadow-[0_0_20px_#00D1FF]"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -150 - 50, 0],
            x: [0, Math.random() * 150 - 75, 0],
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Massive radial ambient glows creating the light lens flares seen in the screenshot */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[150px]"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#004d80]/40 rounded-full blur-[150px]"
      ></motion.div>

    </div>
  );
};

export default AnimatedBackground;
