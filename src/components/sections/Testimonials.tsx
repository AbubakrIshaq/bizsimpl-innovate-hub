
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
      quote: "Bizsimpl transformed our registration experience. What would have taken weeks was completed in just days. Their digital approach and expert guidance saved us valuable time and resources.",
      author: "Sarah Johnson",
      position: "Founder, TechNova Solutions",
      rating: 5
    },
    {
      quote: "The compliance management tools are a game-changer. We never miss important deadlines, and the interface is incredibly intuitive. I highly recommend Bizsimpl to any business owner.",
      author: "Michael Chen",
      position: "CEO, Horizon Ventures",
      rating: 5
    },
    {
      quote: "As a first-time entrepreneur, I was overwhelmed by the registration process. Bizsimpl made it straightforward and stress-free. Their customer support is exceptional.",
      author: "Jessica Williams",
      position: "Director, Artisan Crafts Co.",
      rating: 5
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
    <section ref={testimonialsRef} className="py-20 bg-gradient-blue" id="testimonials">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="reveal reveal-up inline-block px-3 py-1 mb-4 text-sm font-medium text-bizsimpl-700 bg-white rounded-full">
            Testimonials
          </span>
          <h2 className="reveal reveal-up text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What our customers say
          </h2>
          <p className="reveal reveal-up text-lg text-gray-700">
            Don't just take our word for it. See what businesses like yours have experienced using Bizsimpl.
          </p>
        </div>

        <div className="reveal reveal-up max-w-4xl mx-auto relative">
          <CustomCard variant="glass" className="p-8 md:p-10">
            <div className="mb-6 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
              <div className="text-gray-600 text-sm">{testimonials[currentIndex].position}</div>
            </div>
          </CustomCard>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-bizsimpl-200 bg-white text-bizsimpl-700 hover:bg-bizsimpl-50 transition-colors"
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
                    index === currentIndex ? 'w-8 bg-bizsimpl-600' : 'w-2.5 bg-bizsimpl-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-bizsimpl-200 bg-white text-bizsimpl-700 hover:bg-bizsimpl-50 transition-colors"
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
