
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const LLP = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-secondary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Limited Liability Partnership Registration
                </h1>
                <p className="text-lg mb-8 text-white/90">
                  Register your LLP with ease. Get all the benefits of a partnership with limited liability protection.
                </p>
                <Button className="text-secondary bg-white hover:bg-white/90 rounded-full px-8 py-6 font-medium text-base">
                  Register LLP Now
                </Button>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Starting at just ₹6,999</h3>
                <ul className="space-y-3">
                  {[
                    'Name Reservation',
                    'Digital Signature Certificate',
                    'DPIN for Partners',
                    'LLP Agreement Drafting',
                    'Certificate of Incorporation',
                    'PAN & TAN for LLP'
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">LLP Registration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Name Approval',
                  desc: 'Apply for LLP name approval with the MCA'
                },
                {
                  step: '02',
                  title: 'Document Submission',
                  desc: 'Submit required documents and information of partners'
                },
                {
                  step: '03',
                  title: 'LLP Registration',
                  desc: 'Receive your LLP registration certificate and start operations'
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
            <h2 className="text-3xl font-bold text-center mb-12">Advantages of LLP</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Limited Liability Protection',
                'Low Cost of Formation',
                'Fewer Compliance Requirements',
                'No Minimum Capital Requirement',
                'Flexible Profit Sharing',
                'Perpetual Existence'
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
                  q: 'What is an LLP?',
                  a: 'An LLP or Limited Liability Partnership is a corporate business structure that combines the flexibility of a partnership with the limited liability feature of a company.'
                },
                {
                  q: 'How many partners are required to form an LLP?',
                  a: 'A minimum of 2 partners are required to form an LLP in India. There is no maximum limit on the number of partners.'
                },
                {
                  q: 'What are the compliance requirements for an LLP?',
                  a: 'LLPs need to file an Annual Return and Statement of Accounts and Solvency once a year. They have fewer compliance requirements compared to a Private Limited Company.'
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

export default LLP;
