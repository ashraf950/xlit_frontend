// import React from 'react';
// import { motion } from 'framer-motion';
// import { Database, Network, Activity, Cloud, Cpu, Shield, Briefcase, Code, Server, ArrowRight } from 'lucide-react';

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//   }
// };

// const servicesList = [
//   {
//     title: "IBM Technologies",
//     description: "Expertise on multiple IBM Products including the entire WebSphere suite architecture.",
//     icon: <Database size={32} />
//   },
//   {
//     title: "SAP Modules",
//     description: "SAP ABAP, SAP MDM, SAP IS-U, SAP BASIS, HANA to name a few.",
//     icon: <Network size={32} />
//   },
//   {
//     title: "CA Release Automation",
//     description: "CA RA, Nolio experts dedicated to scaling enterprise DevOps teams.",
//     icon: <Activity size={32} />
//   },
//   {
//     title: "Axway API",
//     description: "Deep expertise in Axway API gateway architecture and secure global deployment.",
//     icon: <Cloud size={32} />
//   },
//   {
//     title: "Application Performance",
//     description: "Intense application performance tuning to release high performing, zero-latency assets.",
//     icon: <Cpu size={32} />
//   },
//   {
//     title: "ISAM, WebSeal",
//     description: "Secure your web applications with our elite expertise on ISAM, WebSeal, TIM/TAM, TFIM.",
//     icon: <Shield size={32} />
//   },
//   {
//     title: "Business Analysis",
//     description: "Expert Business Analysts deploy proven frameworks to exceed client requirements.",
//     icon: <Briefcase size={32} />
//   },
//   {
//     title: "Product Development",
//     description: "Full-stack Product and software development using Java/J2EE and latest CI/CD tools.",
//     icon: <Code size={32} />
//   },
//   {
//     title: "Internet of Things",
//     description: "Advanced Technology & Product Research scaling the global Internet of Things (IoT).",
//     icon: <Server size={32} />
//   }
// ];

// const Services = () => {
//   return (
//     <div className="bg-white">

//       {/* 1. MASSIVE PHOTOGRAPHIC HERO */}
//       <section className="relative h-[70vh] min-h-[500px] flex flex-col justify-center items-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop')" }}
//         />
//         <div className="absolute inset-0 hero-gradient z-10 opacity-80" />

//         <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
//           <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//             <motion.p
//               variants={fadeUp}
//               className="text-brand-cyan font-bold tracking-[0.25em] mb-6 uppercase text-sm drop-shadow-md"
//             >
//               Business Oriented
//             </motion.p>
//             <motion.h1
//               variants={fadeUp}
//               className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1] drop-shadow-lg"
//             >
//               Driving Your <span className="text-brand-cyan drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">Business</span>
//             </motion.h1>
//             <motion.p
//               variants={fadeUp}
//               className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-md"
//             >
//               Experienced Business Analysts shape your demands into successful implementations that reach out to customers.
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Decorative Wave Divider at bottom of Hero */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-12 fill-brand-navy">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.5,189.9,104.9,236.4,93.43,280.9,78.23,321.39,56.44Z"></path>
//           </svg>
//         </div>
//       </section>

//       {/* 2. THE HIGH-ENGINEERED SERVICES MATRIX */}
//       <section className="relative bg-brand-navy pt-20 pb-40">

//         {/* Geometric Background Textures for Complexity */}
//         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">We Specialize In</h2>
//             <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full mb-8" />
//             <p className="text-lg text-brand-slate leading-relaxed max-w-3xl mx-auto">
//               Our team brings together decades of experience across distinct paradigms. We master the world's leading enterprise capabilities to deliver uncompromising execution.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {servicesList.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeUp}
//                 className="group relative bg-[#131d33] rounded-[2rem] p-10 border border-[#1e2d4a] hover:border-brand-cyan/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col items-start h-full"
//               >
//                 {/* Background Hover Gradient Swell */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 {/* Dedicated Iconography Container */}
//                 <div className="w-16 h-16 rounded-2xl bg-[#1e2d4a] border border-[#2a3e63] flex items-center justify-center text-brand-cyan mb-8 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-[#131d33] group-hover:border-brand-cyan transition-all duration-500 shadow-lg relative z-10">
//                   {service.icon}
//                 </div>

//                 {/* Complex Typography */}
//                 <div className="relative z-10 flex-grow">
//                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <p className="text-brand-slate leading-relaxed group-hover:text-white/80 transition-colors duration-300 font-light">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Interactive Anchor Element */}
//                 <div className="pt-8 mt-auto w-full border-t border-[#1e2d4a] relative z-10 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-sm font-bold text-brand-cyan tracking-widest uppercase">Explore</span>
//                   <ArrowRight className="text-brand-cyan w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
//                 </div>

//                 {/* Glowing Bottom Border Indicator */}
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-cyan transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
//               </motion.div>
//             ))}
//           </motion.div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default Services;


import React from 'react';
import { motion } from 'framer-motion';
import { Database, Network, Activity, Cloud, Cpu, Shield, Briefcase, Code, Server, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const servicesList = [
  {
    title: "IBM Technologies",
    description: "Expertise on multiple IBM Products including the entire WebSphere suite architecture.",
    icon: <Database size={24} />
  },
  {
    title: "SAP Modules",
    description: "SAP ABAP, SAP MDM, SAP IS-U, SAP BASIS, HANA to name a few.",
    icon: <Network size={24} />
  },
  {
    title: "CA Release Automation",
    description: "CA RA, Nolio experts dedicated to scaling enterprise DevOps teams.",
    icon: <Activity size={24} />
  },
  {
    title: "Axway API",
    description: "Deep expertise in Axway API gateway architecture and secure global deployment.",
    icon: <Cloud size={24} />
  },
  {
    title: "Application Performance",
    description: "Intense application performance tuning to release high performing, zero-latency assets.",
    icon: <Cpu size={24} />
  },
  {
    title: "ISAM, WebSeal",
    description: "Secure your web applications with our elite expertise on ISAM, WebSeal, TIM/TAM, TFIM.",
    icon: <Shield size={24} />
  },
  {
    title: "Business Analysis",
    description: "Expert Business Analysts deploy proven frameworks to exceed client requirements.",
    icon: <Briefcase size={24} />
  },
  {
    title: "Product Development",
    description: "Full-stack Product and software development using Java/J2EE and latest CI/CD tools.",
    icon: <Code size={24} />
  },
  {
    title: "Internet of Things",
    description: "Advanced Technology & Product Research scaling the global Internet of Things (IoT).",
    icon: <Server size={24} />
  }
];

const Services = () => {
  return (
    <div className="bg-white">

      {/* 1. MASSIVE PHOTOGRAPHIC HERO - Reduced height for better scaling */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 hero-gradient z-10 opacity-80" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-brand-cyan font-bold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] mb-2 sm:mb-3 md:mb-4 uppercase text-[8px] sm:text-[10px] md:text-xs drop-shadow-md"
            >
              Business Oriented
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight mb-3 sm:mb-4 md:mb-5 leading-[1.25] sm:leading-[1.2] md:leading-[1.15] drop-shadow-lg px-3"
            >
              Driving Your <span className="text-brand-cyan drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">Business</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md px-3"
            >
              Experienced Business Analysts shape your demands into successful implementations that reach out to customers.
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-6 sm:h-8 md:h-10 fill-brand-navy">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.5,189.9,104.9,236.4,93.43,280.9,78.23,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. SERVICES MATRIX - Reduced padding and sizing */}
      <section className="relative bg-brand-navy pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24">

        {/* Geometric Background Textures - Reduced blur effects */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-brand-cyan/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-indigo-500/5 rounded-full blur-[50px] sm:blur-[70px] md:blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 md:mb-5 tracking-tight px-3">
              We Specialize In
            </h2>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-brand-cyan mx-auto rounded-full mb-4 sm:mb-5 md:mb-6" />
            <p className="text-xs sm:text-sm md:text-base text-brand-slate leading-relaxed max-w-2xl mx-auto px-3">
              Our team brings together decades of experience across distinct paradigms. We master the world's leading enterprise capabilities to deliver uncompromising execution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-[#131d33] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-[#1e2d4a] hover:border-brand-cyan/40 transition-all duration-500 hover:-translate-y-1 shadow-[0_5px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col items-start h-full"
              >
                {/* Background Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container - Smaller base size */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-[#1e2d4a] border border-[#2a3e63] flex items-center justify-center text-brand-cyan mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-[#131d33] group-hover:border-brand-cyan transition-all duration-500 shadow-lg relative z-10">
                  {React.cloneElement(service.icon, { 
                    size: 18,
                    className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  })}
                </div>

                {/* Typography - Smaller text */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-brand-slate leading-relaxed group-hover:text-white/80 transition-colors duration-300 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Interactive Element */}
                <div className="pt-3 sm:pt-4 md:pt-5 mt-auto w-full border-t border-[#1e2d4a] relative z-10 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-brand-cyan tracking-wider uppercase">Explore</span>
                  <ArrowRight className="text-brand-cyan w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Bottom Border Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-cyan transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Services;