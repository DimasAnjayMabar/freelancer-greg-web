import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Coffee, ShoppingBag, ExternalLink } from 'lucide-react';

const TypeCard = ({ type, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div
      ref={ref}
      key={type.id}
      className="group bg-[#252525] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 200}ms`
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={type.image}
          alt={type.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full bg-[#252525]/80 backdrop-blur-md text-[#e8e8e8] py-3 rounded-lg hover:bg-[#353535] transition-all duration-300 flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              Check it out →
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#353535] to-[#252525] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
            <type.icon className="w-6 h-6 text-[#e8e8e8]" />
          </div>
          <h3 className="text-2xl font-bold text-[#e8e8e8]">{type.title}</h3>
        </div>
        
        <p className="text-[#cccccc] mb-6 leading-relaxed">{type.description}</p>
        
        <ul className="space-y-3">
          {type.features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#e8e8e8]">
              <div className="w-2 h-2 bg-gradient-to-r from-[#e8e8e8] to-[#cccccc] rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <button className="mt-8 w-full bg-gradient-to-r from-[#353535] to-[#252525] text-[#e8e8e8] py-3 rounded-xl font-semibold hover:from-[#454545] hover:to-[#353535] transition-all duration-300 hover:scale-105 shadow-lg">
          Check it out →
        </button>
      </div>
    </div>
  );
};

export const TypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const websiteTypes = [
    {
      id: 1,
      title: "CAFE WEBSITE",
      icon: Coffee,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Warm and inviting designs for restaurants and cafes",
      features: ["Menu showcase", "Online reservations", "Location finder", "Social media integration"]
    },
    {
      id: 2,
      title: "ECOMMERCE WEBSITE",
      icon: ShoppingBag,
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Powerful online stores that drive sales",
      features: ["Product catalog", "Shopping cart", "Payment integration", "Inventory management"]
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
            LET'S PICK AND CHOOSE
          </h2>
          <p
            className="text-xl text-[#cccccc] max-w-3xl mx-auto"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            Choose from our specialized website types, each crafted with industry-specific features and design elements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {websiteTypes.map((type, index) => (
            <TypeCard key={type.id} type={type} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};