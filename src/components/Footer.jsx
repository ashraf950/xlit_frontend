import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-brand-lightestNavy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tighter text-brand-white mb-4">
              XLIT<span className="text-brand-accent">.</span>
            </h3>
            <p className="text-brand-slate max-w-sm">
              Strategic partner in enterprise IT modernization. We deliver rigorous technical expertise exactly where it is needed.
            </p>
          </div>
          <div>
            <h4 className="text-brand-lightestSlate font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-2">
              <li className="text-brand-slate hover:text-brand-accent transition-colors cursor-pointer">IBM Technologies</li>
              <li className="text-brand-slate hover:text-brand-accent transition-colors cursor-pointer">SAP Ecosystems</li>
              <li className="text-brand-slate hover:text-brand-accent transition-colors cursor-pointer">IT Consulting</li>
              <li className="text-brand-slate hover:text-brand-accent transition-colors cursor-pointer">Enterprise Security Data</li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-lightestSlate font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li className="text-brand-slate hover:text-brand-accent transition-colors cursor-pointer">About Us</li>
              <li className="text-brand-slate hover:text-brand-accent transition-colors cursor-pointer">Careers</li>
              <li className="text-brand-slate hover:text-brand-accent transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-lightestNavy mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-slate">
          <p>&copy; {new Date().getFullYear()} XLIT Consulting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-brand-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-brand-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
