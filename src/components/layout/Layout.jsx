import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mb-[40px] pt-[64px] bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
