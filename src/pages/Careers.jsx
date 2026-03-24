import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle, Mail, ArrowRight, X } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(["SHOW ALL"]);
  const [activeFilter, setActiveFilter] = useState("SHOW ALL");
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs');
        const fetchedJobs = res.data.data;
        setJobs(fetchedJobs);
        
        const uniqueDepts = ["SHOW ALL", ...new Set(fetchedJobs.map(job => (job.department || 'GENERAL').toUpperCase()))];
        setFilters(uniqueDepts);
      } catch (err) {
        console.error("Failed to fetch jobs.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = activeFilter === "SHOW ALL" 
    ? jobs 
    : jobs.filter(job => (job.department || '').toUpperCase() === activeFilter);

  return (
    <div className="bg-white">
      
      {/* 1. CINEMATIC CAREERS HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-brand-navy/80 hero-gradient z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-8 flex items-center justify-center">
              <span className="w-12 h-[2px] bg-brand-cyan mr-6" />
              <span className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-sm">Join Our Elite Team</span>
              <span className="w-12 h-[2px] bg-brand-cyan ml-6" />
            </motion.div>
            <motion.h1 
              variants={fadeUp} 
              className="text-6xl md:text-8xl font-black text-white tracking-tight mb-8 leading-[1.05]"
            >
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">Career</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Take A Step Ahead. We create beautiful experiences that drive successful businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. OPPORTUNITY GRID & FILTER */}
      <section className="py-32 relative bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 tracking-tight">Active Opportunities</h2>
            
            {!loading && filters.length > 1 && (
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {filters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border-2 ${
                      activeFilter === filter 
                      ? 'bg-brand-cyan border-brand-cyan text-white shadow-premium' 
                      : 'bg-white border-slate-100 text-brand-slate hover:border-brand-cyan hover:text-brand-cyan'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
          
          <div className="min-h-[400px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 text-brand-cyan">
                <div className="w-12 h-12 border-4 border-brand-cyan border-t-transparent rounded-full animate-spin mb-6" />
                <p className="font-bold tracking-widest uppercase text-xs">Synchronizing Career Matrix...</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center text-brand-slate py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-20" />
                <h3 className="text-xl font-bold text-brand-navy mb-2">No Openings Found</h3>
                <p>Check back regularly for new positions.</p>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredJobs.map((job) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={job._id}
                      className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 bg-brand-off-white rounded-2xl flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                          <Briefcase size={28} />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{job.location}</span>
                          <span className="px-3 py-1 bg-brand-cyan/10 text-brand-cyan rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {job.department}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-black text-brand-navy mb-6 group-hover:text-brand-cyan transition-colors leading-tight">
                        {job.title}
                      </h3>
                      
                      <p className="text-brand-slate leading-relaxed flex-grow text-sm mb-10 line-clamp-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <span key={i} className="px-3 py-1 bg-brand-off-white text-brand-slate text-[10px] font-bold rounded-lg border border-slate-100">
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="px-3 py-1 text-brand-cyan text-[10px] font-bold">+{job.requirements.length - 3} More</span>
                        )}
                      </div>

                      {/* <button 
                        onClick={() => setSelectedJob(job)}
                        className="w-full flex items-center justify-center gap-3 py-5 bg-brand-navy text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-brand-cyan transition-all duration-300 shadow-premium hover:shadow-premium-hover"
                      >
                        View & Apply <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </button> */}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* JOB DETAIL MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div className="absolute inset-0 bg-brand-navy/95 backdrop-blur-md" onClick={() => setSelectedJob(null)} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-10 md:p-16 bg-brand-navy text-white relative overflow-hidden flex-shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl -mr-20 -mt-20" />
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-2xl">&times;</span>
                </button>
                
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 bg-brand-cyan/20 text-brand-cyan rounded-full text-[10px] font-xl font-bold uppercase tracking-[0.2em] mb-6">
                    {selectedJob.department} | REF: {selectedJob._id.substring(selectedJob._id.length - 6).toUpperCase()}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">{selectedJob.title}</h2>
                  <div className="flex flex-wrap items-center gap-6 text-white/60">
                    <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                      <MapPin size={16} className="text-brand-cyan" /> {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                      <Briefcase size={16} className="text-brand-cyan" /> Full-Time / Permanent
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-10 md:p-16 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-8 space-y-12">
                    {/* About the role */}
                    <div>
                      <h4 className="text-2xl font-black text-brand-navy mb-6 tracking-tight">Mission Objective</h4>
                      <p className="text-brand-slate text-lg leading-relaxed">{selectedJob.description}</p>
                    </div>

                    {/* Responsibilities */}
                    {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 && (
                      <div>
                        <h4 className="text-2xl font-black text-brand-navy mb-8 tracking-tight flex items-center gap-4">
                          <CheckCircle className="text-brand-cyan" size={24} /> What You'll Do
                        </h4>
                        <ul className="space-y-6">
                          {selectedJob.responsibilities.map((item, i) => (
                            <li key={i} className="flex gap-4">
                              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-3 flex-shrink-0" />
                              <span className="text-brand-slate text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Qualifications */}
                    {selectedJob.qualifications && selectedJob.qualifications.length > 0 && (
                      <div>
                        <h4 className="text-2xl font-black text-brand-navy mb-8 tracking-tight flex items-center gap-4">
                          <CheckCircle className="text-brand-cyan" size={24} /> Expertise You'll Bring
                        </h4>
                        <ul className="space-y-6">
                          {selectedJob.qualifications.map((item, i) => (
                            <li key={i} className="flex gap-4">
                              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-3 flex-shrink-0" />
                              <span className="text-brand-slate text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Sidebar Apply */}
                  <div className="lg:col-span-4 lg:border-l lg:border-slate-100 lg:pl-16">
                    <div className="sticky top-0 space-y-10">
                      <div>
                        <h4 className="text-sm font-black text-brand-navy uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Core Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedJob.requirements.map((req, i) => (
                            <span key={i} className="px-4 py-2 bg-brand-off-white text-brand-navy text-xs font-bold rounded-xl border border-slate-100">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-8 bg-brand-off-white rounded-[2rem] border border-slate-100">
                        <h4 className="text-xl font-black text-brand-navy mb-4">Interested?</h4>
                        <p className="text-sm text-brand-slate mb-8 leading-relaxed">Send your latest CV and the REF Code to our recruitment team.</p>
                        <a 
                          href={`mailto:careers@xlit.co?subject=Application for ${selectedJob.title} [REF: ${selectedJob._id.substring(selectedJob._id.length - 6).toUpperCase()}]`}
                          className="w-full flex items-center justify-center gap-3 py-5 bg-brand-cyan text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-brand-navy transition-all duration-300 shadow-premium"
                        >
                          <Mail size={20} /> Apply Via Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. MISSING SKILLS SECTION */}
      <section className="py-32 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-cyan opacity-10 blur-3xl rounded-full -mr-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-tight tracking-tight">Can't Find Your <span className="text-brand-cyan">Skills?</span></h2>
              <p className="text-xl text-white/70 leading-relaxed mb-12">
                We are constantly looking for experts and sometimes our job-board is not yet updated with the latest strategic requirements.
              </p>
              <div className="p-10 border-l-4 border-brand-cyan bg-white/5 rounded-r-3xl">
                <p className="text-2xl font-bold italic mb-4">"Let borders not stop the skills."</p>
                <p className="text-brand-cyan font-bold tracking-widest uppercase text-xs">Excel IT Cultural Mandate</p>
              </div>
            </div>
            <div className="space-y-10">
              <p className="text-lg text-white/80 leading-relaxed">
                If you would like to talk to us about your profile and do not see the open position matching your expertise, feel free to send your CV with a cover note. We constantly create opportunities and are always looking for new talent. As soon as we have a need for your skills, we will contact you before going in the market.
              </p>
              <a href="mailto:careers@xlit.co" className="inline-flex items-center gap-4 px-12 py-5 bg-white text-brand-navy rounded-full font-bold uppercase tracking-widest hover:bg-brand-cyan hover:text-white transition-all duration-300">
                <Mail size={20} /> Submit Your Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
