import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, AlertCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await axios.post('http://localhost:5000/api/inquiries', formState);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to send inquiry. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-off-white min-h-screen">
      
      {/* 1. MASSIVE PHOTOGRAPHIC HERO */}
      <section className="relative h-[65vh] min-h-[500px] flex flex-col justify-center items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 hero-gradient z-10 mix-blend-multiply opacity-90" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-cyan font-bold tracking-[0.25em] mb-6 uppercase text-sm"
          >
            Get In Touch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. PREMIUM CONTACT FORM BREAKING OUT OF HERO */}
      <section className="relative -mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-30 mb-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="bg-white rounded-[2rem] shadow-premium p-10 md:p-16 border border-slate-100"
        >
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-brand-off-white text-brand-cyan rounded-full flex items-center justify-center mx-auto mb-8">
                <Send size={48} />
              </div>
              <h3 className="text-4xl font-black text-brand-navy mb-4 tracking-tight">Message Received</h3>
              <p className="text-brand-slate text-xl font-light">Thank you. A global specialist will reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <label className="text-xs font-bold text-brand-slate uppercase tracking-widest pl-2">Name <span className="text-brand-cyan">*</span></label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-brand-off-white text-brand-navy border-none rounded-xl px-6 py-5 focus:ring-2 focus:ring-brand-cyan transition-all duration-300 font-medium"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-brand-slate uppercase tracking-widest pl-2">Email <span className="text-brand-cyan">*</span></label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-brand-off-white text-brand-navy border-none rounded-xl px-6 py-5 focus:ring-2 focus:ring-brand-cyan transition-all duration-300 font-medium"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-brand-slate uppercase tracking-widest pl-2">Subject <span className="text-brand-cyan">*</span></label>
                  <input 
                    type="text" 
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    className="w-full bg-brand-off-white text-brand-navy border-none rounded-xl px-6 py-5 focus:ring-2 focus:ring-brand-cyan transition-all duration-300 font-medium"
                    placeholder="Partnership Inquiry"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium animate-shake">
                  <AlertCircle size={18} />
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <label className="text-xs font-bold text-brand-slate uppercase tracking-widest pl-2">Your Message <span className="text-brand-cyan">*</span></label>
                <textarea 
                  rows="6" 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-brand-off-white text-brand-navy border-none rounded-xl px-6 py-5 focus:ring-2 focus:ring-brand-cyan transition-all duration-300 font-medium resize-none"
                  placeholder="How can we architect your success?"
                ></textarea>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-14 py-5 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-cyan transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-1 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending Transmission...' : 'Submit Inquiry'}
                  {!isSubmitting && <Send size={20} />}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>

      {/* 3. PREMIUM GLOBAL NETWORK SECTION */}
      <section className="py-24 bg-brand-off-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/[0.02] -skew-x-12 transform translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-6"
            >
              Our Global <span className="text-brand-cyan">Network</span>
            </motion.h2>
            <div className="w-20 h-1.5 bg-brand-cyan mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* BELGIUM OFFICE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-navy rounded-[2.5rem] p-12 shadow-premium hover:shadow-premium-hover transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <MapPin size={120} className="text-white" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-brand-cyan/20 text-brand-cyan rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  European HQ
                </span>
                <h3 className="text-4xl font-black text-white mb-8 tracking-tight">Belgium</h3>
                <div className="space-y-6">
                  <p className="text-brand-slate font-medium text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    Rue des Salanganes 59<br/>1428 Braine-l'Alleud
                  </p>
                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <a href="tel:+32466105417" className="flex items-center gap-4 text-white hover:text-brand-cyan transition-colors group/link font-bold">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover/link:bg-brand-cyan group-hover/link:text-brand-navy transition-all">
                        <Phone size={18} />
                      </div>
                      + 32 (0) 466 10 54 17
                    </a>
                    <a href="mailto:hello@xlit.co" className="flex items-center gap-4 text-white hover:text-brand-cyan transition-colors group/link font-bold">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover/link:bg-brand-cyan group-hover/link:text-brand-navy transition-all">
                        <Mail size={18} />
                      </div>
                      hello@xlit.co
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* UK OFFICE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2.5rem] p-12 shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-slate-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapPin size={120} className="text-brand-navy" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-brand-off-white text-brand-slate rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  United Kingdom
                </span>
                <h3 className="text-4xl font-black text-brand-navy mb-8 tracking-tight">London</h3>
                <div className="space-y-6">
                  <p className="text-brand-slate font-medium text-lg leading-relaxed group-hover:text-brand-navy transition-colors duration-300">
                    265-269 Kingston Road<br/>SW19 3NW<br/>United Kingdom
                  </p>
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <a href="mailto:hello@xlit.co" className="flex items-center gap-4 text-brand-navy hover:text-brand-cyan transition-colors group/link font-bold">
                      <div className="w-10 h-10 bg-brand-off-white rounded-xl flex items-center justify-center group-hover/link:bg-brand-navy group-hover/link:text-white transition-all">
                        <Mail size={18} />
                      </div>
                      hello@xlit.co
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* INDIA OFFICE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2.5rem] p-12 shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-slate-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapPin size={120} className="text-brand-navy" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-brand-off-white text-brand-slate rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  Strategic Hub
                </span>
                <h3 className="text-4xl font-black text-brand-navy mb-8 tracking-tight">India</h3>
                <div className="space-y-6">
                  <p className="text-brand-slate font-medium text-lg leading-relaxed group-hover:text-brand-navy transition-colors duration-300">
                    Prokximity Ventures<br/>Bangalore<br/>India
                  </p>
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <a href="mailto:hello@prokximity.com" className="flex items-center gap-4 text-brand-navy hover:text-brand-cyan transition-colors group/link font-bold">
                      <div className="w-10 h-10 bg-brand-off-white rounded-xl flex items-center justify-center group-hover/link:bg-brand-navy group-hover/link:text-white transition-all">
                        <Mail size={18} />
                      </div>
                      hello@prokximity.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
