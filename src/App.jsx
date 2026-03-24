import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Portal from './pages/Portal';

function AppContent() {
  const location = useLocation();
  const hideNavbar = ['/portal'].includes(location.pathname);
  const isPortal = location.pathname === '/portal';

  return (
    <div className={`flex flex-col min-h-screen relative text-brand-navy z-0 font-sans selection:bg-brand-cyan/30 ${isPortal ? 'bg-[#0F172A]' : 'bg-brand-off-white'}`}>
      {!hideNavbar && <Navbar />}
      <main className="flex-grow pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </main>
      {!hideNavbar && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
