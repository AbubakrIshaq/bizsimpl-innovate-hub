
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Phone, Check } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';

const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to a dashboard or confirmation page
      navigate('/');
    }, 1500);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Image */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 flex flex-col justify-between p-12 text-white">
          <div>
            <span className="text-xl font-bold text-white">Biz<span className="text-bizsimpl-600">simpl</span></span>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join <span className="text-bizsimpl-600">10,000+</span> businesses who trusted us for their Company Registration
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Check className="h-4 w-4" />
                </div>
                <p>Affordable Pricing</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Check className="h-4 w-4" />
                </div>
                <p>Best-in-Industry Support</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Check className="h-4 w-4" />
                </div>
                <p>Easy Tracking via Dashboard</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Header */}
        <header className="bg-white py-4 px-6 border-b border-gray-200 md:hidden">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold text-bizsimpl-950">Biz<span className="text-bizsimpl-600">simpl</span></span>
              </div>
              <CustomButton variant="outline" size="sm">
                Need Help?
              </CustomButton>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="mb-6 flex items-center">
              <button 
                onClick={handleGoBack}
                className="mr-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              </button>
              <div className="bg-bizsimpl-600 rounded-lg p-2">
                <div className="h-10 w-10 flex items-center justify-center bg-bizsimpl-600 text-white rounded-md">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Welcome to Bizsimpl Incorporation</h1>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Get started with your phone number
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="flex">
                  <div className="inline-flex items-center px-3 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                    <span className="text-gray-500 font-medium">+91</span>
                  </div>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="rounded-l-none py-6"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 bg-bizsimpl-600 hover:bg-bizsimpl-700"
                disabled={isLoading || phoneNumber.length !== 10}
              >
                {isLoading ? 'Processing...' : 'Continue'}
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                By continuing, you agree to Bizsimpl's
              </p>
              <div className="flex justify-center gap-1 text-sm mt-1">
                <a href="#" className="text-bizsimpl-600 hover:underline">Privacy Policy</a>
                <span className="text-gray-600">&</span>
                <a href="#" className="text-bizsimpl-600 hover:underline">Terms of Use</a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 px-6 text-center border-t border-gray-200 bg-white">
          <div className="container mx-auto">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Bizsimpl. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Registration;
