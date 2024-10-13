import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#13253F] text-gray-300 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Language and Currency */}
          <div className="space-y-4">
            <h3 className="font-semibold mb-2">Language</h3>
            <select className="bg-navy-800 w-full p-2 rounded">
              <option>🇬🇧 English (UK)</option>
            </select>
            <h3 className="font-semibold mb-2">Currency</h3>
            <select className="bg-navy-800 w-full p-2 rounded">
              <option>U.S. Dollar ($)</option>
            </select>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Press Room</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Terms and conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>

          {/* Payment and Additional Info */}
          <div>
            <h3 className="font-semibold mb-4">Payment methods possible</h3>
            <div className="flex flex-wrap gap-2">
              {['mastercard', 'bitpay', 'visa', 'amex', 'discover', 'jcb', 'gpay', 'applepay', 'paypal', 'unionpay'].map((method) => (
                <img key={method} src={`/api/placeholder/40/25`} alt={method} className="h-6" />
              ))}
            </div>
            <h3 className="font-semibold mt-6 mb-2">Company</h3>
            <a href="#" className="hover:text-white">Become a Tour guide for Us</a>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright 2021 Tour Guide. All Rights Reserved</p>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
              <a key={social} href="#" className={`text-white hover:text-${social === 'facebook' ? 'blue' : social === 'twitter' ? 'sky' : social === 'instagram' ? 'pink' : 'red'}-500`}>
                <span className="sr-only">{social}</span>
                <div className={`w-8 h-8 rounded-full bg-${social === 'facebook' ? 'blue' : social === 'twitter' ? 'sky' : social === 'instagram' ? 'pink' : 'red'}-600 flex items-center justify-center`}>
                  {/* Replace with actual icons */}
                  <span className="text-xl">{social[0].toUpperCase()}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;