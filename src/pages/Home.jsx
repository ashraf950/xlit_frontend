import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Users, Database, Settings, Zap, Megaphone, ArrowRight, CheckCircle, MapPin, Mail, Phone, Activity, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
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

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              Powering Enterprise Transformation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">Strategy. Security. Scale.</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white/90 mb-8"
            >
              One trusted partner for IBM, SAP, and cloud modernization.
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services" className="inline-flex items-center justify-center px-10 py-5 bg-brand-cyan text-white rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
                Our Solutions <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-brand-navy transition-all duration-300">
                Connect With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-32 relative bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight">
              We Create Beautiful Experiences<br />
              <span className="text-brand-cyan">That Drive Successful Businesses</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Server size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">IBM Technologies</h3>
              <p className="text-brand-slate leading-relaxed mb-4">
                This is what we EAT and BREATH, everyday
              </p>
              <p className="text-sm text-brand-slate/80">
                Aggressive modernization of legacy mainframe architectures into scalable, high-performance hybrid cloud environments.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Business Consulting</h3>
              <p className="text-brand-slate leading-relaxed mb-4">
                This is where we sit down, grab a cup of coffee and deep-dive in the details.
              </p>
              <p className="text-sm text-brand-slate/80">
                Strategic business analysis and consulting to optimize your operations and drive growth.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Database size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">SAP Technologies</h3>
              <p className="text-brand-slate leading-relaxed mb-4">
                If this is what your business runs on, we are the marathoners.
              </p>
              <p className="text-sm text-brand-slate/80">
                End-to-end SAP deployment, optimization, and real-time enterprise resource orchestration.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Settings size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Infrastructure Support Services</h3>
              <p className="text-brand-slate leading-relaxed mb-4">
                Our strength to support your IT backbone.
              </p>
              <p className="text-sm text-brand-slate/80">
                Comprehensive IT infrastructure support and maintenance services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Application Performance</h3>
              <p className="text-brand-slate leading-relaxed mb-4">
                We drill down your application layers, pin-point and bring out the best performance.
              </p>
              <p className="text-sm text-brand-slate/80">
                Application performance optimization and monitoring services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <Megaphone size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Digital Marketing</h3>
              <p className="text-brand-slate leading-relaxed mb-4">
                If something is moving fast, its this. And we are keeping pace with it.
              </p>
              <p className="text-sm text-brand-slate/80">
                Digital marketing strategies and implementation for modern businesses.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link to="/services" className="inline-flex items-center justify-center px-10 py-5 bg-brand-navy text-white rounded-full font-bold tracking-widest uppercase hover:bg-brand-cyan transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
              Explore More <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST SECTION */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Trusted by global enterprises</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
              World-class firms choose us for enterprise-scale IBM, SAP, cloud and security transformation. We deliver predictable outcomes with a governance-first execution model.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            {[
              { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
              { name: 'SAP', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              { name: 'Accenture', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFutnLuwjXZaLNq8_9iqGG7vr9EXORTL2nGw&s' },
              { name: 'HP', src: 'https://download.logo.wine/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.png' },
            ].map((brand) => (
              <div key={brand.name} className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-10 sm:h-12 object-contain"
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

      {/* 4. CONTACT SECTION */}
      <section className="py-32 relative bg-gradient-to-br from-brand-navy via-brand-slate to-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Send Us A Note</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready to transform your enterprise? Let's discuss your next big project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/15 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center">
                  <Mail size={16} />
                </div>
                Contact Info
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">E-mail</p>
                    <a href="mailto:hello@xlit.co" className="text-white/80 hover:text-brand-cyan transition-colors">hello@xlit.co</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+32466105417" className="text-white/80 hover:text-brand-cyan transition-colors">+32 (0) 466 10 54 17</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-white/80">Rue des Salanganes 59<br />1428 Braine-l'Alleud<br />Belgium</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/15 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center">
                  <Clock size={16} />
                </div>
                Working Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 px-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <span className="font-semibold text-white">Mon-Wed</span>
                  <span className="text-white/80">9 am to 5 pm</span>
                </div>
                <div className="flex justify-between items-center py-4 px-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <span className="font-semibold text-white">Thurs-Fri</span>
                  <span className="text-white/80">9 am to 6 pm</span>
                </div>
                <div className="flex justify-between items-center py-4 px-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <span className="font-semibold text-white">Sat - Sun</span>
                  <span className="text-white/80">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-brand-cyan text-white rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
              Get In Touch <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
