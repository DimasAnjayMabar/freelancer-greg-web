import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Check, X, ChevronDown, ChevronUp, MessageCircle, Instagram } from 'lucide-react';

const PricingCard = ({ plan, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Tentukan berapa banyak pros yang ditampilkan secara default
  const visiblePros = isExpanded ? plan.pros : plan.pros.slice(0, 4);
  const hasMorePros = plan.pros.length > 4;
  
  return (
    <div
      ref={ref}
      className={`relative bg-[#252525] rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-4 ${
        plan.name === "BASIC STARTER" ? 'scale-105 border-2 border-[#e8e8e8]' : ''
      }`}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 200}ms`
      }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#e8e8e8] mb-4">{plan.name}</h3>
        <div className="text-5xl font-bold text-[#e8e8e8] mb-2">{plan.price}</div>
        <p className="text-[#cccccc]">One-time payment</p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-[#e8e8e8] mb-4 flex items-center">
            <Check className="w-5 h-5 mr-2 text-green-400" />
            Pros:
          </h4>
          <ul className="space-y-3">
            {visiblePros.map((pro, index) => (
              <li key={index} className="flex items-start text-[#cccccc]">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">{pro}</span>
              </li>
            ))}
          </ul>
          
          {hasMorePros && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center text-[#e8e8e8] text-sm hover:text-[#ffffff] transition-colors duration-200"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  {plan.pros.length - 4} more features
                </>
              )}
            </button>
          )}
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#e8e8e8] mb-4 flex items-center">
            <X className="w-5 h-5 mr-2 text-red-400" />
            Cons:
          </h4>
          <ul className="space-y-3">
            {plan.cons.map((con, index) => (
              <li key={index} className="flex items-start text-[#cccccc]">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="w-full mt-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg bg-gradient-to-r from-[#353535] to-[#252525] text-[#e8e8e8] hover:from-[#454545] hover:to-[#353535]">
        Get Started
      </button>
    </div>
  );
};

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      id: 1,
      name: "STANDARD WEBSITE",
      price: "$10",
      pros: [
        "Responsive and clean company profile website",
        "5 page navigation bar",
        "Custom layout by request",
        "For fullstack website",
        "Built by TypeScript code",
        "Three times revision",
        "Source code included",
        "Lifetime support ready to help",
        "Free 500MB database access",
        "SEO optimized structure",
        "Mobile-first design approach",
        "Social media integration"
      ],
      cons: [
        "No domain included"
      ]
    },
    {
      id: 2,
      name: "BASIC STARTER",
      price: "$5",
      pros: [
        "Responsive and clean company profile website",
        "3 page navigation bar",
        "Standard layout",
        "Built by TypeScript code",
        "One time revision",
        "Source code included",
        "Lifetime support ready to help",
        "Basic contact form",
        "Google Maps integration"
      ],
      cons: [
        "No domain included",
        "No database included"
      ]
    },
    {
      id: 3,
      name: "PREMIUM WEBSITE",
      price: "$80",
      pros: [
        "Responsive and clean company profile website",
        "10 page navigation bar",
        "Custom layout by request",
        "For fullstack website",
        "Built by TypeScript code",
        "Three times revision",
        "Source code included",
        "Lifetime support ready to help",
        "Advanced admin dashboard",
        "E-commerce functionality",
        "Payment gateway integration",
        "Custom analytics setup",
        "Premium hosting setup",
        "SSL certificate included"
      ],
      cons: [
        "No domain included"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#252525] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-[#e8e8e8] mb-8"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
          >
            PRICING
          </h2>
          <p
            className="text-xl text-[#cccccc] max-w-3xl mx-auto"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            Choose the perfect plan for your business needs. All plans include professional development and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p 
            className="text-[#cccccc] mb-6"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
            }}
          >
            Need a custom solution?
          </p>
          <div 
            className="flex justify-center space-x-4"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
            
            {/* Instagram Button */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};