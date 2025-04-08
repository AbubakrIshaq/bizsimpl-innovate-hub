
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
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Expert-Led Business Registration Consulting
            </h3>
            {isMobile && (
              <span className="text-lg md:text-2xl text-white block mb-3">
                Expert business setup with transparent pricing
              </span>
            )}
            <p className="text-sm md:text-xl text-white/80 mt-2 md:mt-4">
              Choose from the most popular company types and get seamless registration at No Hidden Charges
            </p>
          </div>

          {/* Company Types Grid */}
          <div className="space-y-10">
            {/* Private Limited Company */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl p-4 w-full mx-auto flex justify-center items-center">
                  <img 
                    src="/lovable-uploads/761edb13-9d1a-4a38-a3ae-63ade83dabc1.png" 
                    alt="Private Limited Company" 
                    className="h-24 w-auto object-contain" 
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Private Limited <br />Company
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-sm md:text-base text-white/80">Structured for growth-ready businesses. Enables fund-raising, ESOPs, and investor confidence with our expert-led registration support.</p>
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
                <div className="bg-white rounded-xl p-4 w-full mx-auto flex justify-center items-center">
                  <img 
                    src="/lovable-uploads/9edeb2b9-aea4-4762-9204-c15ffd5c0192.png" 
                    alt="Limited Liability Partnership" 
                    className="h-24 w-auto object-contain" 
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Limited Liability <br />Partnership
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-sm md:text-base text-white/80">Ideal for service-based firms. Offers limited liability with minimal compliance—efficiently set up by our consultants.
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
                <div className="bg-white rounded-xl p-4 w-full mx-auto flex justify-center items-center">
                  <img 
                    src="/lovable-uploads/ebdab9ca-9dd1-429b-89af-3f26f655cf7f.png" 
                    alt="One Person Company" 
                    className="h-24 w-auto object-contain" 
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  One Person <br />Company
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-sm md:text-base text-white/80">Best suited for solo entrepreneurs and franchise operators. We offer tailored support to help you register an OPC that delivers full control, limited liability, and a formal business identity all with minimal complexity.</p>
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
