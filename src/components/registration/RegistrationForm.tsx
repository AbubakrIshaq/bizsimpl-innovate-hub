
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, User, Phone, Mail } from 'lucide-react';
import InputField from './InputField';

const RegistrationForm = () => {
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
          <InputField
            icon={User}
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        
        {/* Phone Number Input */}
        <div>
          <InputField
            icon={Phone}
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />
        </div>
        
        {/* Email Input */}
        <div>
          <InputField
            icon={Mail}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
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
  );
};

export default RegistrationForm;
