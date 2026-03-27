import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, PlusCircle, CheckCircle, Trash2, Edit, Briefcase, ChevronLeft, MessageSquare, Clock, User, Menu, X, Mail } from 'lucide-react';

const Portal = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('list'); // 'list', 'form', or 'inquiry'
  const [jobs, setJobs] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loadingInquiries, setLoadingInquiries] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    requirements: '',
    description: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  useEffect(() => {
    const token = localStorage.getItem('xlit_token');
    if (!token) {
      navigate('/login');
    } else {
      fetchJobs();
      fetchInquiries();
    }
  }, [navigate]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/jobs');
      setJobs(res.data.data);
    } catch (err) {
      console.error('Failed to fetch jobs', err);
    }
  };

  const fetchInquiries = async () => {
    setLoadingInquiries(true);
    try {
      const token = localStorage.getItem('xlit_token');
      const res = await axios.get('http://localhost:5000/api/inquiries', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInquiries(res.data.data);
    } catch (err) {
      console.error('Failed to fetch inquiries', err);
    } finally {
      setLoadingInquiries(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('xlit_token');
    navigate('/login');
  };

  const openFormForNew = () => {
    setEditingJobId(null);
    setFormData({ 
      title: '', 
      department: '', 
      location: '', 
      requirements: '', 
      description: ''
    });
    setActiveView('form');
  };

  const handleEdit = (job) => {
    setEditingJobId(job._id);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      requirements: job.requirements.join(', '),
      description: job.description
    });
    setActiveView('form');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to permanently delete this job listing?')) return;
    try {
      const token = localStorage.getItem('xlit_token');
      await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setJobs(jobs.filter(job => job._id !== id));
    } catch (err) {
      alert('Failed to delete job');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    
    const payload = {
      title: formData.title,
      department: formData.department,
      location: formData.location,
      requirements: formData.requirements.split(',').map(r => r.trim()).filter(r => r),
      description: formData.description
    };

    try {
      const token = localStorage.getItem('xlit_token');
      if (editingJobId) {
        await axios.put(`http://localhost:5000/api/jobs/${editingJobId}`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post('http://localhost:5000/api/jobs', payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      
      setStatus({ loading: false, success: true, error: '' });
      fetchJobs(); 
      setTimeout(() => {
        setStatus(s => ({ ...s, success: false }));
        setActiveView('list');
      }, 1500);
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.error || 'Failed to process job' 
      });
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const token = localStorage.getItem('xlit_token');
      await axios.delete(`http://localhost:5000/api/inquiries/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInquiries(inquiries.filter(inq => inq._id !== id));
    } catch (err) {
      alert('Failed to delete inquiry');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-96px)] bg-[#0F172A]">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0F172A] border-b border-[#334155] p-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Admin Workspace</h2>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar Navigator */}
      <div className={`w-56 sm:w-64 bg-[#1E293B]/50 border-r border-[#334155] flex flex-col overflow-hidden ${mobileMenuOpen ? 'fixed left-0 top-16 z-50' : 'hidden md:flex'}`}>
        <div className="p-4 sm:p-6 border-b border-[#334155]/50 md:block hidden">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider">Admin Workspace</h2>
        </div>
        <nav className="flex-1 p-2 sm:p-4 space-y-2">
          <button 
            onClick={() => { setActiveView('list'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-all ${activeView === 'list' || activeView === 'form' ? 'bg-[#06B6D4]/10 border-l-4 border-[#06B6D4] text-[#06B6D4]' : 'text-[#64748B] hover:bg-[#334155]/30'}`}
          >
            <Briefcase size={20} /> Careers
          </button>
          <button 
            onClick={() => { setActiveView('inquiry'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-all ${activeView === 'inquiry' ? 'bg-[#06B6D4]/10 border-l-4 border-[#06B6D4] text-[#06B6D4]' : 'text-[#64748B] hover:bg-[#334155]/30'}`}
          >
            <MessageSquare size={20} /> Inquiries
            {inquiries.length > 0 && (
              <span className="ml-auto bg-[#06B6D4] text-[#0F172A] text-[10px] font-bold px-1.5 rounded-full">
                {inquiries.length}
              </span>
            )}
          </button>
        </nav>
        <div className="p-2 sm:p-4 border-t border-[#334155]/50">
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-[#64748B] hover:text-red-400 hover:bg-red-400/10 transition-colors rounded">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto pt-[108px] md:pt-[108px]">
        <AnimatePresence mode="wait">
          
          {/* JOB LIST VIEW */}
          {activeView === 'list' && (
            <motion.div 
              key="list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-8 sm:pb-6 border-b border-[#334155]">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Published Jobs</h1>
                  <p className="text-[#64748B] mt-2">Manage your active career opportunities</p>
                </div>
                <button onClick={openFormForNew} className="btn-primary flex items-center justify-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto min-w-[220px]">
                  <PlusCircle size={20} /> Post New Opportunity
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.length === 0 ? (
                  <div className="col-span-1 md:col-span-2 glass-panel p-12 text-center border-dashed border-2 border-[#334155]">
                    <Briefcase className="w-12 h-12 text-[#64748B] mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl text-[#CBD5E1] mb-4">No jobs are currently active.</h3>
                    <button onClick={openFormForNew} className="text-[#06B6D4] hover:underline">Create your first job posting</button>
                  </div>
                ) : (
                  jobs.map(job => (
                    <div key={job._id} className="glass-panel p-6 flex flex-col items-start hover:border-[#334155] transition-colors h-full">
                      <div className="flex-1 w-full">
                        <div className="flex justify-between items-start w-full mb-2">
                          <h3 className="font-bold text-xl text-white pr-4">{job.title}</h3>
                          <span className="text-xs px-2 py-1 bg-[#334155] text-[#CBD5E1] rounded font-medium whitespace-nowrap">{job.department}</span>
                        </div>
                        <p className="text-[#64748B] text-sm mb-6 flex items-center gap-1">{job.location}</p>
                      </div>
                      <div className="flex gap-3 w-full mt-auto pt-4 border-t border-[#334155]/30">
                        <button onClick={() => handleEdit(job)} className="flex-1 flex justify-center items-center gap-2 bg-[#1E293B]/50 hover:bg-[#1E293B] text-[#06B6D4] px-3 py-2 rounded transition-all text-sm">
                          <Edit size={16} /> Edit
                        </button>
                        <button onClick={() => handleDelete(job._id)} className="flex-1 flex justify-center items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-2 rounded transition-all text-sm">
                          <Trash2 size={16} /> Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}

          {/* FORM VIEW (Create / Edit) */}
          {activeView === 'form' && (
            <motion.div 
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="mb-8">
                <button onClick={() => setActiveView('list')} className="flex items-center gap-2 text-[#64748B] hover:text-white transition-colors mb-6">
                  <ChevronLeft size={20} /> Back to Job List
                </button>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white border-b border-[#334155] pb-6">
                  {editingJobId ? 'Revise Career Opportunity' : 'Draft New Career Opportunity'}
                </h1>
              </div>

              {status.success && (
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded mb-8">
                  <CheckCircle size={20} /> {editingJobId ? 'Job successfully updated! Returning to list...' : 'Job successfully posted! Returning to list...'}
                </div>
              )}

              {status.error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded mb-8">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 glass-panel p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#94A3B8] text-sm font-medium mb-2">Job Title</label>
                    <input required type="text" className="w-full bg-[#334155]/30 border border-[#64748B]/30 text-white rounded px-4 py-3 focus:outline-none focus:border-[#06B6D4]" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Senior Cloud Architect" />
                  </div>
                  <div>
                    <label className="block text-[#94A3B8] text-sm font-medium mb-2">Department</label>
                    <input required type="text" className="w-full bg-[#334155]/30 border border-[#64748B]/30 text-white rounded px-4 py-3 focus:outline-none focus:border-[#06B6D4]" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} placeholder="e.g. Enterprise Systems" />
                  </div>
                </div>

                <div>
                  <label className="block text-[#94A3B8] text-sm font-medium mb-2">Job Location *</label>
                  <input required type="text" className="w-full bg-[#334155]/30 border border-[#64748B]/30 text-white rounded px-4 py-3 focus:outline-none focus:border-[#06B6D4]" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="e.g. New York, NY / Remote" />
                </div>

                <div>
                  <label className="block text-[#94A3B8] text-sm font-medium mb-2">Technical Skills / Tags (comma separated)</label>
                  <textarea required rows="2" className="w-full bg-[#334155]/30 border border-[#64748B]/30 text-white rounded px-4 py-3 focus:outline-none focus:border-[#06B6D4]" value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})} placeholder="e.g. React.js, Node.js, Cloud Architecture..." />
                </div>

                <div>
                  <label className="block text-[#94A3B8] text-sm font-medium mb-2">Job Summary (Opening Hook)</label>
                  <textarea required rows="3" className="w-full bg-[#334155]/30 border border-[#64748B]/30 text-white rounded px-4 py-3 focus:outline-none focus:border-[#06B6D4]" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="We are seeking a visionary engineer to..." />
                </div>

                <div className="pt-4 flex gap-4">
                  <button type="submit" disabled={status.loading || status.success} className="flex-1 btn-primary py-4 text-lg">
                    {status.loading ? 'Processing...' : (editingJobId ? 'Update Job Listing' : 'Publish Job Listing')}
                  </button>
                  <button type="button" onClick={() => setActiveView('list')} className="px-8 py-4 rounded bg-[#334155]/30 border border-[#64748B]/30 text-[#64748B] hover:text-white hover:border-[#64748B] transition-all text-lg font-medium">
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* INQUIRIES LIST VIEW */}
          {activeView === 'inquiry' && (
            <motion.div 
              key="inquiry"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-10 pb-6 border-b border-[#334155]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Client Inquiries</h1>
                <p className="text-[#64748B] mt-2">Messages from the global contact form</p>
              </div>

              <div className="space-y-6">
                {loadingInquiries ? (
                  <div className="glass-panel p-12 text-center">
                    <div className="animate-spin w-8 h-8 border-2 border-[#06B6D4] border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-[#CBD5E1]">Loading inquiries...</p>
                  </div>
                ) : inquiries.length === 0 ? (
                  <div className="glass-panel p-12 text-center border-dashed border-2 border-[#334155]">
                    <MessageSquare className="w-12 h-12 text-[#64748B] mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl text-[#CBD5E1]">No inquiries received yet.</h3>
                    <p className="text-[#64748B] mt-2">Contact form submissions will appear here.</p>
                  </div>
                ) : (
                  inquiries.map(inq => (
                    <div key={inq._id} className="glass-panel p-8 hover:border-[#06B6D4]/30 transition-all group">
                      <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest bg-[#06B6D4]/10 px-3 py-1 rounded-full">{inq.subject}</span>
                            <span className="text-[#64748B] text-xs flex items-center gap-1">
                              <Clock size={12} /> {new Date(inq.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 ml-1">{inq.message}</h3>
                        </div>
                        <div className="flex flex-col items-end gap-2 md:border-l md:border-[#334155]/30 md:pl-8">
                          <div className="flex items-center gap-2 text-[#CBD5E1]">
                            <User size={16} className="text-[#06B6D4]" />
                            <span className="font-bold">{inq.name}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#64748B] text-sm">
                            <Mail size={16} /> {inq.email}
                          </div>
                          <button 
                            onClick={() => handleDeleteInquiry(inq._id)}
                            className="mt-4 flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                          >
                            <Trash2 size={16} /> Archive Inquiry
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portal;
