
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OnePersonCompany = () => {
  const handleRegister = () => {
    window.location.href = "https://accounts.razorpay.com/auth/?redirecturl=https%3A%2F%2Feasy.razorpay.com%2Frize%2Fincorporation%2Fonboarding%3Fvisitor_id%3D601a54dd81d8e--1f62992176b2e%26utm_source%3Ddirect%26utm_medium%3Dwebsite%26section_source%3Dnavbar&product=rize_incorporation";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  One Person Company Registration
                </h1>
                <p className="text-lg mb-8 text-white/90">
                  Start your solo business journey with limited liability protection. Register your OPC today.
                </p>
                <Button 
                  className="text-primary bg-white hover:bg-white/90 rounded-full px-8 py-6 font-medium text-base"
                  onClick={handleRegister}
                >
                  Start Registration
                </Button>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Starting at just ₹7,999</h3>
                <ul className="space-y-3">
                  {[
                    'Name Approval',
                    'Digital Signature Certificate',
                    'Director Identification Number',
                    'Certificate of Incorporation',
                    'PAN & TAN for OPC',
                    'Bank Account Opening Assistance'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50" id="Registration-Number">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">OPC Registration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Name Reservation',
                  desc: 'Apply for OPC name with the Ministry of Corporate Affairs'
                },
                {
                  step: '02',
                  title: 'Document Submission',
                  desc: 'Submit required documents and information of sole director'
                },
                {
                  step: '03',
                  title: 'OPC Registration',
                  desc: 'Receive your OPC certificate and start business operations'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-secondary text-2xl font-bold mb-3">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of One Person Company</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Limited Liability Protection',
                'Separate Legal Entity',
                'Perpetual Succession',
                'Professional Corporate Image',
                'Easy Access to Funding',
                'Fewer Compliance Requirements'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                  <p className="font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'What is a One Person Company (OPC)?',
                  a: 'A One Person Company is a type of company that can be formed by a single person as a shareholder. It provides the benefits of a company structure with limited liability protection to a single entrepreneur.'
                },
                {
                  q: 'What is the nominee requirement in an OPC?',
                  a: 'An OPC requires the sole member to nominate a person who would become the member of the company in the event of the subscriber\'s death or inability to contract.'
                },
                {
                  q: 'Can an OPC be converted to a Private Limited Company?',
                  a: 'Yes, an OPC can be voluntarily converted into a Private Limited Company by increasing the number of members to at least two and meeting other requirements under the Companies Act.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OnePersonCompany;
