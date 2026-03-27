// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Server, Users, Database, Settings, Zap, Megaphone, ArrowRight, CheckCircle, MapPin, Mail, Phone, Activity, Clock } from 'lucide-react';

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.2 }
//   }
// };

// const Home = () => {
//   return (
//     <div className="relative bg-brand-slate-50 min-h-screen">

//       {/* 1. HERO SECTION */}
//       <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80')" }}
//         />
//         <div className="absolute inset-0 bg-black/60 z-10" />

//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="text-center"
//           >
//             <motion.h1
//               variants={fadeUp}
//               className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
//             >
//               Powering Enterprise Transformation<br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">Strategy. Security. Scale.</span>
//             </motion.h1>

//             <motion.h2
//               variants={fadeUp}
//               className="text-xl sm:text-3xl md:text-5xl font-bold text-white/90 mb-8"
//             >
//               One trusted partner for IBM, SAP, and cloud modernization.
//             </motion.h2>

//             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Link to="/services" className="inline-flex items-center justify-center px-10 py-5 bg-brand-cyan text-white rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
//                 Our Solutions <ArrowRight className="ml-3 w-5 h-5" />
//               </Link>
//               <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-brand-navy transition-all duration-300">
//                 Connect With Us
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. SERVICES SECTION */}
//       <section className="py-12 sm:py-20 md:py-32 relative bg-brand-off-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight">
//               We Create Beautiful Experiences<br />
//               <span className="text-brand-cyan">That Drive Successful Businesses</span>
//             </h2>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
//           >
//             <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
//               <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
//                 <Server size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-brand-navy mb-4">IBM Technologies</h3>
//               <p className="text-brand-slate leading-relaxed mb-4">
//                 This is what we EAT and BREATH, everyday
//               </p>
//               <p className="text-sm text-brand-slate/80">
//                 Aggressive modernization of legacy mainframe architectures into scalable, high-performance hybrid cloud environments.
//               </p>
//             </motion.div>

//             <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
//               <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
//                 <Users size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-brand-navy mb-4">Business Consulting</h3>
//               <p className="text-brand-slate leading-relaxed mb-4">
//                 This is where we sit down, grab a cup of coffee and deep-dive in the details.
//               </p>
//               <p className="text-sm text-brand-slate/80">
//                 Strategic business analysis and consulting to optimize your operations and drive growth.
//               </p>
//             </motion.div>

//             <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
//               <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
//                 <Database size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-brand-navy mb-4">SAP Technologies</h3>
//               <p className="text-brand-slate leading-relaxed mb-4">
//                 If this is what your business runs on, we are the marathoners.
//               </p>
//               <p className="text-sm text-brand-slate/80">
//                 End-to-end SAP deployment, optimization, and real-time enterprise resource orchestration.
//               </p>
//             </motion.div>

//             <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
//               <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
//                 <Settings size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-brand-navy mb-4">Infrastructure Support Services</h3>
//               <p className="text-brand-slate leading-relaxed mb-4">
//                 Our strength to support your IT backbone.
//               </p>
//               <p className="text-sm text-brand-slate/80">
//                 Comprehensive IT infrastructure support and maintenance services.
//               </p>
//             </motion.div>

//             <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
//               <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
//                 <Zap size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-brand-navy mb-4">Application Performance</h3>
//               <p className="text-brand-slate leading-relaxed mb-4">
//                 We drill down your application layers, pin-point and bring out the best performance.
//               </p>
//               <p className="text-sm text-brand-slate/80">
//                 Application performance optimization and monitoring services.
//               </p>
//             </motion.div>

//             <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
//               <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
//                 <Megaphone size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-brand-navy mb-4">Digital Marketing</h3>
//               <p className="text-brand-slate leading-relaxed mb-4">
//                 If something is moving fast, its this. And we are keeping pace with it.
//               </p>
//               <p className="text-sm text-brand-slate/80">
//                 Digital marketing strategies and implementation for modern businesses.
//               </p>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="text-center mt-16"
//           >
//             <Link to="/services" className="inline-flex items-center justify-center px-10 py-5 bg-brand-navy text-white rounded-full font-bold tracking-widest uppercase hover:bg-brand-cyan transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
//               Explore More <ArrowRight className="ml-3 w-5 h-5" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* 3. TRUST SECTION */}
//       <section className="py-24 bg-brand-navy text-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h2 className="text-4xl md:text-5xl font-black tracking-tight">Trusted by global enterprises</h2>
//             <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
//               World-class firms choose us for enterprise-scale IBM, SAP, cloud and security transformation. We deliver predictable outcomes with a governance-first execution model.
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
//             {[
//               { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
//               { name: 'SAP', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
//               { name: 'Accenture', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFutnLuwjXZaLNq8_9iqGG7vr9EXORTL2nGw&s' },
//               { name: 'HP', src: 'https://download.logo.wine/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.png' },
//             ].map((brand) => (
//               <div key={brand.name} className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
//                 <img
//                   src={brand.src}
//                   alt={brand.name}
//                   className="h-10 sm:h-12 object-contain"
//                   onError={(e) => {
//                     e.currentTarget.onerror = null;
//                     e.currentTarget.src = 'https://via.placeholder.com/120x40?text='+encodeURIComponent(brand.name);
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. CONTACT SECTION */}
//       <section className="py-32 relative bg-gradient-to-br from-brand-navy via-brand-slate to-brand-navy overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10"></div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Send Us A Note</h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               Ready to transform your enterprise? Let's discuss your next big project.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/15 transition-all duration-500"
//             >
//               <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
//                 <div className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center">
//                   <Mail size={16} />
//                 </div>
//                 Contact Info
//               </h3>
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4 group">
//                   <div className="w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                     <Mail size={20} />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-white">E-mail</p>
//                     <a href="mailto:hello@xlit.co" className="text-white/80 hover:text-brand-cyan transition-colors">hello@xlit.co</a>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4 group">
//                   <div className="w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                     <Phone size={20} />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-white">Phone</p>
//                     <a href="tel:+32466105417" className="text-white/80 hover:text-brand-cyan transition-colors">+32 (0) 466 10 54 17</a>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4 group">
//                   <div className="w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                     <MapPin size={20} />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-white">Address</p>
//                     <p className="text-white/80">Rue des Salanganes 59<br />1428 Braine-l'Alleud<br />Belgium</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/15 transition-all duration-500"
//             >
//               <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
//                 <div className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center">
//                   <Clock size={16} />
//                 </div>
//                 Working Hours
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center py-4 px-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
//                   <span className="font-semibold text-white">Mon-Wed</span>
//                   <span className="text-white/80">9 am to 5 pm</span>
//                 </div>
//                 <div className="flex justify-between items-center py-4 px-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
//                   <span className="font-semibold text-white">Thurs-Fri</span>
//                   <span className="text-white/80">9 am to 6 pm</span>
//                 </div>
//                 <div className="flex justify-between items-center py-4 px-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
//                   <span className="font-semibold text-white">Sat - Sun</span>
//                   <span className="text-white/80">Closed</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="text-center mt-16"
//           >
//             <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-brand-cyan text-white rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
//               Get In Touch <ArrowRight className="ml-3 w-5 h-5" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Users, Database, Settings, Zap, Megaphone, ArrowRight, CheckCircle, MapPin, Mail, Phone, Activity, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <div className="relative bg-brand-slate-50 min-h-screen">

      {/* 1. HERO SECTION - Reduced text sizes */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight mb-3 sm:mb-4 px-4"
            >
              Powering Enterprise Transformation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">Strategy. Security. Scale.</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white/90 mb-4 sm:mb-5 px-4"
            >
              One trusted partner for IBM, SAP, and cloud modernization.
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link to="/services" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 bg-brand-cyan text-white rounded-full font-bold tracking-wider uppercase text-[10px] sm:text-xs hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
                Our Solutions <ArrowRight className="ml-1.5 w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 border-2 border-white text-white rounded-full font-bold tracking-wider uppercase text-[10px] sm:text-xs hover:bg-white hover:text-brand-navy transition-all duration-300">
                Connect With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION - Reduced text sizes */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative bg-brand-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-brand-navy mb-3 sm:mb-4 tracking-tight px-4">
              We Create Beautiful Experiences<br />
              <span className="text-brand-cyan">That Drive Successful Businesses</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5"
          >
            <motion.div variants={fadeUp} className="group bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-brand-off-white rounded-lg sm:rounded-xl flex items-center justify-center text-brand-navy mb-2 sm:mb-3 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Server size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-1.5 sm:mb-2">IBM Technologies</h3>
              <p className="text-brand-slate leading-relaxed mb-2 text-[10px] sm:text-xs">
                This is what we EAT and BREATH, everyday
              </p>
              <p className="text-[9px] sm:text-[10px] text-brand-slate/80">
                Aggressive modernization of legacy mainframe architectures into scalable, high-performance hybrid cloud environments.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-brand-off-white rounded-lg sm:rounded-xl flex items-center justify-center text-brand-navy mb-2 sm:mb-3 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Users size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-1.5 sm:mb-2">Business Consulting</h3>
              <p className="text-brand-slate leading-relaxed mb-2 text-[10px] sm:text-xs">
                This is where we sit down, grab a cup of coffee and deep-dive in the details.
              </p>
              <p className="text-[9px] sm:text-[10px] text-brand-slate/80">
                Strategic business analysis and consulting to optimize your operations and drive growth.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-brand-off-white rounded-lg sm:rounded-xl flex items-center justify-center text-brand-navy mb-2 sm:mb-3 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Database size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-1.5 sm:mb-2">SAP Technologies</h3>
              <p className="text-brand-slate leading-relaxed mb-2 text-[10px] sm:text-xs">
                If this is what your business runs on, we are the marathoners.
              </p>
              <p className="text-[9px] sm:text-[10px] text-brand-slate/80">
                End-to-end SAP deployment, optimization, and real-time enterprise resource orchestration.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-brand-off-white rounded-lg sm:rounded-xl flex items-center justify-center text-brand-navy mb-2 sm:mb-3 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Settings size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-1.5 sm:mb-2">Infrastructure Support Services</h3>
              <p className="text-brand-slate leading-relaxed mb-2 text-[10px] sm:text-xs">
                Our strength to support your IT backbone.
              </p>
              <p className="text-[9px] sm:text-[10px] text-brand-slate/80">
                Comprehensive IT infrastructure support and maintenance services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-brand-off-white rounded-lg sm:rounded-xl flex items-center justify-center text-brand-navy mb-2 sm:mb-3 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Zap size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-1.5 sm:mb-2">Application Performance</h3>
              <p className="text-brand-slate leading-relaxed mb-2 text-[10px] sm:text-xs">
                We drill down your application layers, pin-point and bring out the best performance.
              </p>
              <p className="text-[9px] sm:text-[10px] text-brand-slate/80">
                Application performance optimization and monitoring services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-brand-off-white rounded-lg sm:rounded-xl flex items-center justify-center text-brand-navy mb-2 sm:mb-3 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Megaphone size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-1.5 sm:mb-2">Digital Marketing</h3>
              <p className="text-brand-slate leading-relaxed mb-2 text-[10px] sm:text-xs">
                If something is moving fast, its this. And we are keeping pace with it.
              </p>
              <p className="text-[9px] sm:text-[10px] text-brand-slate/80">
                Digital marketing strategies and implementation for modern businesses.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mt-6 sm:mt-8 md:mt-10"
          >
            <Link to="/services" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 bg-brand-navy text-white rounded-full font-bold tracking-wider uppercase text-[10px] sm:text-xs hover:bg-brand-cyan transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
              Explore More <ArrowRight className="ml-1.5 w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST SECTION - Reduced text sizes */}
      <section className="py-10 sm:py-12 md:py-16 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight">Trusted by global enterprises</h2>
            <p className="text-[10px] sm:text-xs md:text-sm text-white/80 max-w-2xl mx-auto mt-2 sm:mt-3 px-4">
              World-class firms choose us for enterprise-scale IBM, SAP, cloud and security transformation. We deliver predictable outcomes with a governance-first execution model.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5">
            {[
              { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
              { name: 'SAP', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              { name: 'Accenture', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFutnLuwjXZaLNq8_9iqGG7vr9EXORTL2nGw&s' },
              { name: 'HP', src: 'https://download.logo.wine/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.png' },
            ].map((brand) => (
              <div key={brand.name} className="bg-white/10 p-2 sm:p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-6 sm:h-8 md:h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://via.placeholder.com/120x40?text='+encodeURIComponent(brand.name);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION - Reduced text sizes and widths */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 relative bg-gradient-to-br from-brand-navy via-brand-slate to-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4 tracking-tight">Send Us A Note</h2>
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto px-4">
              Ready to transform your enterprise? Let's discuss your next big project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-500"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-brand-cyan rounded-full flex items-center justify-center">
                  <Mail size={12} className="sm:w-3 sm:h-3" />
                </div>
                Contact Info
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Mail size={12} className="sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm">E-mail</p>
                    <a href="mailto:hello@xlit.co" className="text-white/70 hover:text-brand-cyan transition-colors text-[10px] sm:text-xs">hello@xlit.co</a>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Phone size={12} className="sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm">Phone</p>
                    <a href="tel:+32466105417" className="text-white/70 hover:text-brand-cyan transition-colors text-[10px] sm:text-xs">+32 (0) 466 10 54 17</a>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={12} className="sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm">Address</p>
                    <p className="text-white/70 text-[10px] sm:text-xs">Rue des Salanganes 59<br />1428 Braine-l'Alleud<br />Belgium</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-500"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-brand-cyan rounded-full flex items-center justify-center">
                  <Clock size={12} className="sm:w-3 sm:h-3" />
                </div>
                Working Hours
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center py-2 sm:py-2.5 px-3 sm:px-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <span className="font-semibold text-white text-[10px] sm:text-xs">Mon-Wed</span>
                  <span className="text-white/70 text-[9px] sm:text-[10px]">9 am to 5 pm</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-2.5 px-3 sm:px-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <span className="font-semibold text-white text-[10px] sm:text-xs">Thurs-Fri</span>
                  <span className="text-white/70 text-[9px] sm:text-[10px]">9 am to 6 pm</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-2.5 px-3 sm:px-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <span className="font-semibold text-white text-[10px] sm:text-xs">Sat - Sun</span>
                  <span className="text-white/70 text-[9px] sm:text-[10px]">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mt-8 sm:mt-10 md:mt-12"
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 bg-brand-cyan text-white rounded-full font-bold tracking-wider uppercase text-[10px] sm:text-xs hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
              Get In Touch <ArrowRight className="ml-1.5 w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;