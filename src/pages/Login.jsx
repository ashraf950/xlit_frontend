import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('xlit_token')) {
      navigate('/portal');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('xlit_token', res.data.token);
      navigate('/portal');
    } catch (err) {
      setError(err.response?.data?.error || 'Authentication failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 min-h-[80vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass-panel p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <Lock className="w-12 h-12 text-brand-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-white">Client Portal</h2>
            <p className="text-brand-slate mt-2">Authorized personnel only</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded mb-6 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-brand-lightSlate text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full bg-brand-lightestNavy/30 border border-brand-slate/30 text-brand-white rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-brand-lightSlate text-sm font-medium mb-2">Password</label>
              <input 
                type="password" 
                required 
                className="w-full bg-brand-lightestNavy/30 border border-brand-slate/30 text-brand-white rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full btn-primary flex justify-center py-3"
            >
              {loading ? 'Authenticating...' : 'Secure Login'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
