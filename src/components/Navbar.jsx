// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import logo from '../assets/xlit_logo.jpg';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // For Premium Aesthetic: Transparent on Hero (white text), Solid White Glass on scroll (dark text)
//   const isSolid = scrolled;
//   const navBg = isSolid ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'bg-transparent';
//   const textColor = isSolid ? 'text-brand-navy' : 'text-white';
//   const logoBg = isSolid ? 'bg-transparent' : 'bg-white/10 rounded-lg p-1';

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-500 ${navBg}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-24">
//           <div className="flex-shrink-0 flex items-center">
//             <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
//               <img src={logo} alt="XLIT Consulting" className={`h-12 w-auto object-contain transition-all ${logoBg}`} />
//               <span className={`ml-4 text-xl font-bold tracking-widest ${textColor} hidden sm:block transition-colors`}>
//                 XLIT
//               </span>
//             </Link>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-10">
//             <Link to="/" className={`${textColor} hover:text-brand-cyan text-sm font-semibold tracking-widest uppercase transition-colors`}>Home</Link>
//             <Link to="/services" className={`${textColor} hover:text-brand-cyan text-sm font-semibold tracking-widest uppercase transition-colors`}>Services</Link>
//             <Link to="/careers" className={`${textColor} hover:text-brand-cyan text-sm font-semibold tracking-widest uppercase transition-colors`}>Careers</Link>
//             <Link to="/contact" className={`${textColor} hover:text-brand-cyan text-sm font-semibold tracking-widest uppercase transition-colors`}>Contact</Link>
//             <Link to="/login" className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${isSolid ? 'bg-brand-navy text-white hover:bg-brand-cyan hover:shadow-premium-hover' : 'bg-white text-brand-navy hover:bg-brand-cyan hover:text-white'}`}>
//               Sign In
//             </Link>
//           </div>
          
//           <div className="flex md:hidden items-center">
//             <button onClick={() => setIsOpen(!isOpen)} className={`${textColor} hover:text-brand-cyan focus:outline-none transition-colors`}>
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-brand-off-white p-6 shadow-2xl absolute w-full">
//           <div className="flex flex-col space-y-6">
//             <Link to="/" onClick={() => setIsOpen(false)} className="text-brand-navy font-bold uppercase tracking-widest">Home</Link>
//             <Link to="/services" onClick={() => setIsOpen(false)} className="text-brand-navy font-bold uppercase tracking-widest">Services</Link>
//             <Link to="/careers" onClick={() => setIsOpen(false)} className="text-brand-navy font-bold uppercase tracking-widest">Careers</Link>
//             <Link to="/contact" onClick={() => setIsOpen(false)} className="text-brand-navy font-bold uppercase tracking-widest">Contact</Link>
//             <Link to="/login" onClick={() => setIsOpen(false)} className="text-brand-cyan font-bold uppercase tracking-widest pt-6 border-t border-slate-100">Client Login</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/xlit_logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For Premium Aesthetic: Transparent on Hero (white text), Solid White Glass on scroll (dark text)
  const isSolid = scrolled;
  const navBg = isSolid ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'bg-transparent';
  const textColor = isSolid ? 'text-brand-navy' : 'text-white';
  const logoBg = isSolid ? 'bg-transparent' : 'bg-white/10 rounded-lg p-1';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
              <img 
                src={logo} 
                alt="XLIT Consulting" 
                className={`h-8 sm:h-10 md:h-12 w-auto object-contain transition-all ${logoBg}`} 
              />
              <span className={`ml-2 sm:ml-3 md:ml-4 text-base sm:text-lg md:text-xl font-bold tracking-wider sm:tracking-widest ${textColor} hidden sm:block transition-colors`}>
                XLIT
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
            <Link 
              to="/" 
              className={`${textColor} hover:text-brand-cyan text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`${textColor} hover:text-brand-cyan text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/careers" 
              className={`${textColor} hover:text-brand-cyan text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors`}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`${textColor} hover:text-brand-cyan text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors`}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${
                isSolid 
                  ? 'bg-brand-navy text-white hover:bg-brand-cyan hover:shadow-premium-hover' 
                  : 'bg-white text-brand-navy hover:bg-brand-cyan hover:text-white'
              }`}
            >
              Sign In
            </Link>
          </div>
          
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${textColor} hover:text-brand-cyan focus:outline-none transition-colors p-1`}
            >
              {isOpen ? <X size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <Menu size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-off-white shadow-2xl absolute w-full">
          <div className="flex flex-col space-y-4 p-4 sm:p-6">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className="text-brand-navy font-bold uppercase tracking-wider text-sm sm:text-base py-2 hover:text-brand-cyan transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsOpen(false)} 
              className="text-brand-navy font-bold uppercase tracking-wider text-sm sm:text-base py-2 hover:text-brand-cyan transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/careers" 
              onClick={() => setIsOpen(false)} 
              className="text-brand-navy font-bold uppercase tracking-wider text-sm sm:text-base py-2 hover:text-brand-cyan transition-colors"
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="text-brand-navy font-bold uppercase tracking-wider text-sm sm:text-base py-2 hover:text-brand-cyan transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)} 
              className="text-brand-cyan font-bold uppercase tracking-wider text-sm sm:text-base pt-4 sm:pt-6 border-t border-slate-100 mt-2 hover:text-brand-navy transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;