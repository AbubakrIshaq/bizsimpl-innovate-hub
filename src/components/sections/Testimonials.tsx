
import React, { useEffect, useRef, useState } from 'react';
import { CustomCard } from '../ui/CustomCard';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = testimonialsRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const testimonials = [
    {
      quote: "We were able to get our company incorporated in just 10 days! The team was very professional and prompt in their responses. Highly recommended for all startup founders.",
      author: "Rajesh Kumar",
      position: "Founder, TechVision AI",
      rating: 5
    },
    {
      quote: "The service provided by BizSimpl was outstanding. They guided us through the entire process and made it extremely easy for us to get our Pvt Ltd registered.",
      author: "Aarti Sharma",
      position: "Co-founder, GreenEarth Solutions",
      rating: 5
    },
    {
      quote: "Being a first-time entrepreneur, I was worried about the legalities. BizSimpl made the process seamless and kept me informed at every step.",
      author: "Vivek Patel",
      position: "CEO, CloudStack Technologies",
      rating: 4
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section ref={testimonialsRef} className="py-20 bg-gradient-to-r from-gray-50 to-purple-50" id="testimonials">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="reveal reveal-up inline-block px-3 py-1 mb-4 text-sm font-medium text-purple-700 bg-white rounded-full">
            Testimonials
          </span>
          <h2 className="reveal reveal-up text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What our customers say
          </h2>
          <p className="reveal reveal-up text-lg text-gray-700">
            Don't just take our word for it. See what businesses like yours have experienced using BizSimpl.
          </p>
        </div>

        <div className="reveal reveal-up max-w-4xl mx-auto relative">
          <CustomCard variant="glass" className="p-8 md:p-10 border border-purple-100">
            <div className="mb-6 flex justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i + testimonials[currentIndex].rating} className="h-6 w-6 text-gray-300" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
              <div className="text-purple-700 text-sm">{testimonials[currentIndex].position}</div>
            </div>
          </CustomCard>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-purple-200 bg-white text-purple-700 hover:bg-purple-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-purple-700' : 'w-2.5 bg-purple-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-purple-200 bg-white text-purple-700 hover:bg-purple-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
