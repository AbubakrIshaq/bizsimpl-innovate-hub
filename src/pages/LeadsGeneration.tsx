
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CustomButton } from '@/components/ui/CustomButton';
import { CustomCard } from '@/components/ui/CustomCard';
import { Calendar, Check, Info } from 'lucide-react';

const LeadsGeneration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Request Received",
        description: "We'll contact you shortly to schedule your free consultation.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
        agreeToTerms: false,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-purple py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Avoid Choosing the Wrong Business Structure for Your Startup in India
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Free Consultation for Early-Stage Founders
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 inline-block">
                <p className="text-white text-base md:text-lg">
                  Many startup founders in India regret the business structure they chose after incorporation.
                  <br />
                  <span className="font-semibold">Why?</span> Because they didn't get the right guidance before starting their company.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Problem Statement */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                This small mistake can lead to:
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <p className="text-gray-700">Expensive restructuring later</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <p className="text-gray-700">Legal complications</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <p className="text-gray-700">Unnecessary compliance burdens</p>
                </li>
              </ul>
              
              <div className="mt-10">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Most Founders Don't Know Their Options
                </h2>
                <p className="text-gray-700 mb-4">
                  Unfortunately, many platforms promote Private Limited Companies by default.
                </p>
                <p className="text-gray-700 font-medium">
                  But that may not be the right fit for your startup.
                </p>
                <p className="text-gray-700 mt-4">
                  Depending on your goals, you might be better off with an LLP, OPC, Partnership, or Sole Proprietorship.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What You'll Learn */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                What You'll Learn in This Free Consultation:
              </h2>
              <ul className="space-y-4">
                {[
                  "The best business structure for your startup's vision",
                  "Differences between Private Limited, LLP, OPC, Partnership etc.",
                  "Key legal and compliance requirements in India",
                  "Common mistakes and how to avoid them",
                  "Post-registration responsibilities you must be aware of"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  Who Should Book This?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Aspiring entrepreneurs planning to start up",
                    "Freelancers or consultants ready to formalize their business",
                    "Founders unsure whether to choose Pvt Ltd, LLP, or something else",
                    "Indian startups preparing for funding or clients"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Info className="text-blue-500 mr-2 h-5 w-5 mt-0.5 shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-purple-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-purple-900 mb-4">
                    Book Your Free 1-on-1 Consultation
                  </h2>
                  <p className="text-gray-700 mb-6">
                    You'll get 20 minutes of expert guidance from professionals who've helped 1,000+ startups across India.
                  </p>
                  <div className="flex items-start mb-6">
                    <Calendar className="text-purple-500 mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <p className="text-gray-700 font-medium">
                      No pressure. No upselling. Just real, honest advice.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg inline-block">
                    <p className="text-purple-800 font-medium text-sm">
                      100% Free & Confidential
                    </p>
                    <p className="text-gray-600 text-sm">
                      We're here to support India's startup ecosystem — not sell to it.
                    </p>
                  </div>
                </div>
                
                <div>
                  <CustomCard variant="elevated" padding="lg" className="shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Request Your Free Consultation
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Your phone number"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="businessType">Interested In</Label>
                          <select
                            id="businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange as any}
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          >
                            <option value="">Select business structure</option>
                            <option value="privateLimited">Private Limited Company</option>
                            <option value="llp">Limited Liability Partnership (LLP)</option>
                            <option value="opc">One Person Company (OPC)</option>
                            <option value="partnership">Partnership Firm</option>
                            <option value="soleProprietorship">Sole Proprietorship</option>
                            <option value="notSure">Not Sure Yet (Need Guidance)</option>
                          </select>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Any specific questions?</Label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            placeholder="Tell us a bit about your business idea or specific questions"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="agreeToTerms" 
                            checked={formData.agreeToTerms}
                            onCheckedChange={handleCheckboxChange}
                            required
                          />
                          <Label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                            I agree to be contacted about my business registration needs
                          </Label>
                        </div>
                        
                        <CustomButton 
                          type="submit" 
                          className="w-full" 
                          isLoading={isSubmitting}
                        >
                          👉 Book My Free Consultation Now
                        </CustomButton>
                      </div>
                    </form>
                  </CustomCard>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeadsGeneration;
