
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
      <main className="flex-grow pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 to-purple-900 py-16 md:py-24 mt-10">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-purple-600/30 backdrop-blur-sm px-6 py-2 rounded-full mb-6 text-white/90 text-sm font-medium">
                Free 20-Minute Expert Consultation
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Avoid Choosing the Wrong Business Structure for Your Startup in India
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-light">
                Get personalized guidance for Early-Stage Founders
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
                <p className="text-white text-base md:text-lg leading-relaxed">
                  Many startup founders in India regret the business structure they chose after incorporation.
                  <br />
                  <span className="font-semibold text-purple-200">Why?</span> Because they didn't get the right guidance before starting their company.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Problem Statement */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                This small mistake can lead to:
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                  {icon: "❌", text: "Expensive restructuring later"},
                  {icon: "❌", text: "Legal complications"},
                  {icon: "❌", text: "Unnecessary compliance burdens"}
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center">
                    <span className="text-4xl mb-4">{item.icon}</span>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  The Problem: Most Founders Don't Know Their Options
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Unfortunately, many platforms promote Private Limited Companies by default.
                </p>
                <p className="text-purple-700 font-semibold text-lg mb-6">
                  But that may not be the right fit for your startup.
                </p>
                <p className="text-gray-700 text-lg">
                  Depending on your goals, you might be better off with an LLP, OPC, Partnership, or Sole Proprietorship.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What You'll Learn */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                What You'll Learn in This Free Consultation:
              </h2>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-md mb-16">
                <ul className="space-y-6">
                  {[
                    "The best business structure for your startup's vision",
                    "Differences between Private Limited, LLP, OPC, Partnership etc.",
                    "Key legal and compliance requirements in India",
                    "Common mistakes and how to avoid them",
                    "Post-registration responsibilities you must be aware of"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-purple-600 rounded-full p-1 text-white mr-4 mt-1 shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-gray-800 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
                  Who Should Book This?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Aspiring entrepreneurs planning to start up",
                    "Freelancers or consultants ready to formalize their business",
                    "Founders unsure whether to choose Pvt Ltd, LLP, or something else",
                    "Indian startups preparing for funding or clients"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4 shrink-0">
                        <Info className="h-4 w-4" />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-purple-100 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                  <div className="sticky top-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
                      Book Your Free 1-on-1 Consultation
                    </h2>
                    <p className="text-gray-700 text-lg mb-8">
                      You'll get 20 minutes of expert guidance from professionals who've helped 1,000+ startups across India.
                    </p>
                    <div className="flex items-center mb-8 bg-white/70 p-5 rounded-xl backdrop-blur">
                      <Calendar className="text-purple-600 mr-4 h-10 w-10 shrink-0" />
                      <p className="text-purple-800 font-medium">
                        No pressure. No upselling. Just real, honest advice.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl text-white inline-block">
                      <p className="font-semibold text-lg mb-1">
                        100% Free & Confidential
                      </p>
                      <p className="text-purple-100">
                        We're here to support India's startup ecosystem — not sell to it.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <CustomCard variant="elevated" padding="lg" className="shadow-lg border border-purple-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Request Your Free Consultation
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-base mb-1.5">Full Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          className="h-12"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-base mb-1.5">Email Address</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="h-12"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-base mb-1.5">Phone Number</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Your phone number"
                          className="h-12"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="businessType" className="text-base mb-1.5">Interested In</Label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange as any}
                          required
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        <Label htmlFor="message" className="text-base mb-1.5">Any specific questions?</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tell us a bit about your business idea or specific questions"
                        />
                      </div>
                      
                      <div className="flex items-start space-x-3 bg-purple-50 p-4 rounded-lg">
                        <Checkbox 
                          id="agreeToTerms" 
                          checked={formData.agreeToTerms}
                          onCheckedChange={handleCheckboxChange}
                          required
                          className="mt-1"
                        />
                        <Label htmlFor="agreeToTerms" className="text-base text-gray-700">
                          I agree to be contacted about my business registration needs
                        </Label>
                      </div>
                      
                      <CustomButton 
                        type="submit" 
                        className="w-full h-14 text-lg font-medium" 
                        isLoading={isSubmitting}
                      >
                        👉 Book My Free Consultation Now
                      </CustomButton>
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
