
import React from 'react';
import { CustomButton } from '../ui/CustomButton';
import { CustomCard } from '../ui/CustomCard';

const Registration = () => {
  return (
    <section id="registration" className="py-20 bg-[#0F1A43] text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Hassle-free </span>
              <span className="text-[#FF6B4A]">Company Registrations</span>
            </h2>
            <p className="text-xl text-white/80">
              Choose from the most popular company types and get seamless registration at No Hidden Charges
            </p>
          </div>

          {/* CTA Button for Small Screens */}
          <div className="flex justify-center mb-12 lg:hidden">
            <CustomButton 
              className="bg-[#316EFF] hover:bg-[#2156D1] text-white px-8 py-4 rounded-lg text-lg"
            >
              Register your Business
            </CustomButton>
          </div>

          {/* Company Types Grid */}
          <div className="space-y-10">
            {/* Private Limited Company */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-[#142156] p-4 rounded-xl border border-[#1F2E68] w-full max-w-[280px] mx-auto">
                  <img 
                    src="/lovable-uploads/4d5c8007-13e5-4050-b52e-f49d3b648caf.png" 
                    alt="Private Limited Company" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold mb-2">
                  Private Limited <br />Company
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-white/80">
                  Suitable for startups and small businesses seeking limited liability with an option to raise funds and offer ESOPs in the future.
                </p>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <CustomButton 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 whitespace-nowrap"
                >
                  Learn More
                </CustomButton>
              </div>
            </div>

            {/* Limited Liability Partnership */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-[#142156] p-4 rounded-xl border border-[#1F2E68] w-full max-w-[280px] mx-auto">
                  <img 
                    src="/lovable-uploads/21291dda-bdff-4eb0-8724-4dbd27ea553f.png" 
                    alt="Limited Liability Partnership" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold mb-2">
                  Limited Liability <br />Partnership
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-white/80">
                  Suitable for professional services seeking limited liability but fewer post-incorporation compliances.
                </p>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <CustomButton 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 whitespace-nowrap"
                >
                  Learn More
                </CustomButton>
              </div>
            </div>

            {/* One Person Company */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-[#142156] p-4 rounded-xl border border-[#1F2E68] w-full max-w-[280px] mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=360&h=360&crop=entropy" 
                    alt="One Person Company" 
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold mb-2">
                  One Person <br />Company
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-white/80">
                  Suitable for franchises and small businesses seeking limited liability with single ownership.
                </p>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <CustomButton 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 whitespace-nowrap"
                >
                  Learn More
                </CustomButton>
              </div>
            </div>
          </div>

          {/* CTA Button for Large Screens */}
          <div className="hidden lg:flex justify-end mt-12">
            <CustomButton 
              className="bg-[#316EFF] hover:bg-[#2156D1] text-white px-8 py-3 rounded-lg text-lg"
            >
              Register your Business
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
