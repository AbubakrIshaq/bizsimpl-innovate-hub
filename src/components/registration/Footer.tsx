
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 px-6 text-center border-t border-gray-200 bg-white">
      <div className="container mx-auto">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} BizSimpl. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
