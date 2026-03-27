// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Lock } from 'lucide-react';
// import logo from '../assets/xlit_logo.jpg';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem('xlit_token')) {
//       navigate('/portal');
//     }
//   }, [navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('xlit_token', res.data.token);
//       navigate('/portal');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Authentication failed. Please check credentials.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-brand-off-white px-2 sm:px-4">
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
//         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80')" }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-slate/70 to-brand-navy/80 z-10" />
      
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl z-20 px-2 sm:px-4"
//       >
//         <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl rounded-3xl hover:bg-white/15 transition-all duration-500">
//           <div className="text-center mb-6 sm:mb-8">
//             <div className="flex justify-center mb-4 sm:mb-6">
//               <img src={logo} alt="xlIT Logo" className="h-12 sm:h-16 w-auto drop-shadow-lg" />
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">Client Portal</h2>
//             <p className="text-white/80 text-sm sm:text-base">Secure access for authorized teams</p>
//           </div>

//           {error && (
//             <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-2 sm:p-3 rounded mb-4 sm:mb-6 text-xs sm:text-sm text-center">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
//             <div>
//               <label className="block text-white/90 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Email Address</label>
//               <input 
//                 type="email" 
//                 required 
//                 className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-brand-cyan focus:bg-white/15 transition-all duration-300 placeholder-white/50 text-sm sm:text-base"
//                 placeholder="hello@company.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
            
//             <div>
//               <label className="block text-white/90 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Password</label>
//               <input 
//                 type="password" 
//                 required 
//                 className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-brand-cyan focus:bg-white/15 transition-all duration-300 placeholder-white/50 text-sm sm:text-base"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button 
//               type="submit" 
//               disabled={loading}
//               className="w-full bg-brand-cyan hover:bg-white text-white hover:text-brand-navy rounded-lg px-4 sm:px-6 py-2 sm:py-3 font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
//             >
//               {loading ? 'Authenticating...' : 'Secure Login'}
//             </button>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import logo from '../assets/xlit_logo.jpg';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
      const res = await axios.post(`${API_BASE}/api/auth/login`, { email, password });
      localStorage.setItem('xlit_token', res.data.token);
      navigate('/portal');
    } catch (err) {
      setError(err.response?.data?.error || 'Authentication failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-brand-off-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-slate/70 to-brand-navy/80 z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[90%] sm:max-w-sm md:max-w-md z-20"
      >
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 md:p-6 shadow-2xl rounded-2xl sm:rounded-3xl hover:bg-white/15 transition-all duration-500">
          <div className="text-center mb-4 sm:mb-5">
            <div className="flex justify-center mb-2 sm:mb-3">
              <img src={logo} alt="xlIT Logo" className="h-8 sm:h-10 md:h-12 w-auto drop-shadow-lg" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1">Sign In</h2>
            <p className="text-white/70 text-[10px] sm:text-xs md:text-sm">Secure access for authorized teams</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-1.5 sm:p-2 rounded mb-3 sm:mb-4 text-[9px] sm:text-[10px] text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-white/80 text-[9px] sm:text-[10px] font-semibold mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 focus:outline-none focus:border-brand-cyan focus:bg-white/15 transition-all duration-300 placeholder-white/50 text-[10px] sm:text-xs"
                placeholder="hello@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-[9px] sm:text-[10px] font-semibold mb-1">Password</label>
              <input 
                type="password" 
                required 
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 focus:outline-none focus:border-brand-cyan focus:bg-white/15 transition-all duration-300 placeholder-white/50 text-[10px] sm:text-xs"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-cyan hover:bg-white text-white hover:text-brand-navy rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-[9px] sm:text-[10px]"
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