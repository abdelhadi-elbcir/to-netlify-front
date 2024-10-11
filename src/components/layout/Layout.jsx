import React from 'react';
import Header from './Header';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 bg-[#FFFBE6] mt-16"> 
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
