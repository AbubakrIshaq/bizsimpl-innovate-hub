
import React from 'react';
import { CustomButton } from '../ui/CustomButton';
import { CustomCard } from '../ui/CustomCard';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <section id="registration" className="py-20 bg-purple-800 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Hassle-free </span>
              <span className="text-white">Company Registrations</span>
            </h2>
            <p className="text-xl text-white/80">
              Choose from the most popular company types and get seamless registration at No Hidden Charges
            </p>
          </div>

          {/* Company Types Grid */}
          <div className="space-y-10">
            {/* Private Limited Company */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-purple-700/30 p-4 rounded-xl border border-purple-700/30 w-full max-w-[280px] mx-auto">
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
                <Link to="/private-limited">
                  <CustomButton 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 whitespace-nowrap"
                  >
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* Limited Liability Partnership */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-purple-700/30 p-4 rounded-xl border border-purple-700/30 w-full max-w-[280px] mx-auto">
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
                <Link to="/llp">
                  <CustomButton 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 whitespace-nowrap"
                  >
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* One Person Company */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-purple-700/30 p-4 rounded-xl border border-purple-700/30 w-full max-w-[280px] mx-auto">
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
                <Link to="/one-person-company">
                  <CustomButton 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 whitespace-nowrap"
                  >
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
