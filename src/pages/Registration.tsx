
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, User, Phone, Mail, Check } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';

const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
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
            {/* Removed Bizsimpl name as requested */}
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join <span className="text-purple-700">10,000+</span> businesses who trusted us for their Company Registration
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-700/20 p-2 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p>Affordable Pricing</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-700/20 p-2 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p>Best-in-Industry Support</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-700/20 p-2 rounded-full">
                  <Check className="h-4 w-4 text-white" />
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
                {/* Removed Bizsimpl name as requested */}
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
              <div className="bg-purple-700 rounded-lg p-2">
                <div className="h-10 w-10 flex items-center justify-center bg-purple-700 text-white rounded-md">
                  <User className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Welcome to Business Incorporation</h1>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Register your business
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Input */}
              <div>
                <div className="flex">
                  <div className="inline-flex items-center px-3 py-2 bg-purple-100 border border-r-0 border-purple-300 rounded-l-md">
                    <User className="h-5 w-5 text-purple-700" />
                  </div>
                  <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="rounded-l-none py-6 border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              
              {/* Phone Number Input */}
              <div>
                <div className="flex">
                  <div className="inline-flex items-center px-3 py-2 bg-purple-100 border border-r-0 border-purple-300 rounded-l-md">
                    <Phone className="h-5 w-5 text-purple-700" />
                  </div>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="rounded-l-none py-6 border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                  />
                </div>
              </div>
              
              {/* Email Input */}
              <div>
                <div className="flex">
                  <div className="inline-flex items-center px-3 py-2 bg-purple-100 border border-r-0 border-purple-300 rounded-l-md">
                    <Mail className="h-5 w-5 text-purple-700" />
                  </div>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="rounded-l-none py-6 border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 bg-purple-700 hover:bg-purple-800 mt-4"
                disabled={isLoading || !fullName || phoneNumber.length !== 10 || !email}
              >
                {isLoading ? 'Processing...' : 'Continue'}
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                By continuing, you agree to our
              </p>
              <div className="flex justify-center gap-1 text-sm mt-1">
                <a href="#" className="text-purple-700 hover:underline">Privacy Policy</a>
                <span className="text-gray-600">&</span>
                <a href="#" className="text-purple-700 hover:underline">Terms of Use</a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 px-6 text-center border-t border-gray-200 bg-white">
          <div className="container mx-auto">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} BizSimpl. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Registration;
