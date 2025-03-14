
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Mail } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';

const AuthenticationPage = () => {
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b border-gray-200">
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
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Card Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <button 
                onClick={handleGoBack}
                className="mr-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              </button>
              <h1 className="text-xl font-semibold">Register your business</h1>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4">Enter your email</h2>
                <p className="text-gray-600 mb-6">
                  We'll send you a one-time password to verify your email address
                </p>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="pl-10 py-6"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 bg-bizsimpl-600 hover:bg-bizsimpl-700"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Continue'}
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                By continuing, you agree to Bizsimpl's
              </p>
              <div className="flex justify-center gap-1 text-sm mt-1">
                <a href="#" className="text-bizsimpl-600 hover:underline">Terms of Service</a>
                <span className="text-gray-600">&</span>
                <a href="#" className="text-bizsimpl-600 hover:underline">Privacy Policy</a>
              </div>
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
  );
};

export default AuthenticationPage;
