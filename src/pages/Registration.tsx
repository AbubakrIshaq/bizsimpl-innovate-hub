
import React from 'react';
import LeftPanel from '@/components/registration/LeftPanel';
import MobileHeader from '@/components/registration/MobileHeader';
import RegistrationForm from '@/components/registration/RegistrationForm';
import Footer from '@/components/registration/Footer';

const Registration = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Image */}
      <LeftPanel />

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Header */}
        <MobileHeader />

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center p-6">
          <RegistrationForm />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Registration;
