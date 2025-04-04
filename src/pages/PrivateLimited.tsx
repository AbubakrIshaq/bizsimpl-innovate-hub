
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PrivateLimited = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-[#df73ff]/20 text-gray-800 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Private Limited Company Registration Online
                </h1>
                <p className="text-lg mb-8 text-gray-600">
                  Register your Private Limited Company in just a few steps. Get expert assistance and complete documentation.
                </p>
                <Button className="text-white bg-[#df73ff] hover:bg-[#df73ff]/90 rounded-full px-8 py-6 font-medium text-base">
                  Get Started Now
                </Button>
              </div>
              <div className="bg-[#df73ff]/20 p-6 rounded-lg shadow-md backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Starting at just ₹4,999</h3>
                <ul className="space-y-3">
                  {[
                    'Company Name Registration',
                    'Digital Signature Certificate (DSC)',
                    'Director Identification Number (DIN)',
                    'Certificate of Incorporation',
                    'PAN & TAN for Company',
                    'Bank Account Opening Assistance'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-[#df73ff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Submit Documents',
                  desc: 'Provide basic details and upload necessary documents'
                },
                {
                  step: '02',
                  title: 'Verification & Processing',
                  desc: 'Our experts verify and process your application'
                },
                {
                  step: '03',
                  title: 'Get Registered',
                  desc: 'Receive your incorporation certificate and start your business'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-[#df73ff] text-2xl font-bold mb-3">{item.step}</div>
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
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Private Limited Company</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Limited Liability Protection',
                'Separate Legal Entity',
                'Perpetual Succession',
                'Easy Transfer of Ownership',
                'Professional Brand Image',
                'Better Funding Opportunities'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-[#df73ff] flex-shrink-0" />
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
                  q: 'What is a Private Limited Company?',
                  a: 'A Private Limited Company is a business entity that has a separate legal existence from its owners. It can have 2-200 shareholders, with limited liability protection.'
                },
                {
                  q: 'How long does the registration process take?',
                  a: 'The registration process typically takes 15-20 working days, depending on document submission and government processing times.'
                },
                {
                  q: 'What documents are required for registration?',
                  a: 'The main documents include identity and address proofs of directors, registered office proof, photographs of directors, and digital signatures.'
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

export default PrivateLimited;
