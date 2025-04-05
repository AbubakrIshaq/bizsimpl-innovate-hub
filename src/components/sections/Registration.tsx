
import React from 'react';
import { CustomButton } from '../ui/CustomButton';
import { CustomCard } from '../ui/CustomCard';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Registration = () => {
  const isMobile = useIsMobile();

  return <section id="registration" className="py-20 bg-purple-800 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">
                {isMobile 
                  ? "Expert business setup with transparent pricing" 
                  : ""}
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Expert-Led Business Registration Consulting
            </h3>
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
                  <img src="/lovable-uploads/051e2548-4bbb-4069-b4c9-2f871b3c1655.png" alt="Private Limited Company" className="w-full h-auto" />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold mb-2">
                  Private Limited <br />Company
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-white/80">Ideal for startups and growth-focused businesses aiming to scale. We assist in setting up a Pvt Ltd structure that enables fund-raising, team expansion and ensures investor readiness from day one.</p>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <Link to="/private-limited">
                  <CustomButton variant="outline" className="bg-white text-purple-700 hover:bg-white/90 border-white whitespace-nowrap">
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* Limited Liability Partnership */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-purple-700/30 p-4 rounded-xl border border-purple-700/30 w-full max-w-[280px] mx-auto">
                  <img src="/lovable-uploads/231cf3b2-1334-4734-9893-7ff54723e583.png" alt="Limited Liability Partnership" className="w-full h-auto" />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold mb-2">
                  Limited Liability <br />Partnership
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-white/80">Perfect for consulting firms and service providers looking for a flexible structure. Our experts guide you through establishing an LLP that combines operational freedom with limited liability and minimal compliance burden.
              </p>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <Link to="/llp">
                  <CustomButton variant="outline" className="bg-white text-purple-700 hover:bg-white/90 border-white whitespace-nowrap">
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* One Person Company */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-purple-700/30 p-4 rounded-xl border border-purple-700/30 w-full max-w-[280px] mx-auto">
                  <img src="/lovable-uploads/9f67c697-0f3e-4b8a-82d2-114f236c1c28.png" alt="One Person Company" className="w-full h-auto rounded-md" />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold mb-2">
                  One Person <br />Company
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-white/80">Best suited for solo entrepreneurs and franchise operators. We offer tailored support to help you register an OPC that delivers full control, limited liability, and a formal business identity all with minimal complexity.</p>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <Link to="/one-person-company">
                  <CustomButton variant="outline" className="bg-white text-purple-700 hover:bg-white/90 border-white whitespace-nowrap">
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Registration;
