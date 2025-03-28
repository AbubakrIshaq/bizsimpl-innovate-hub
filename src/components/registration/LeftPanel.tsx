import React from 'react';
import CheckItem from './CheckItem';
const LeftPanel = () => {
  return <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 flex flex-col justify-between p-12 text-white">
        <div>
          {/* Removed Bizsimpl name as requested */}
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join <span className="text-purple-700">1000+</span> businesses who trusted us for their Company Registration
          </h2>
          
          <div className="space-y-4">
            <CheckItem text="Affordable Pricing" />
            <CheckItem text="Best-in-Industry Support" />
            <CheckItem text="Easy Tracking via Dashboard" />
          </div>
        </div>
        <div></div>
      </div>
    </div>;
};
export default LeftPanel;