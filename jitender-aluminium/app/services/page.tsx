"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { FaDoorOpen, FaWindowRestore, FaArchive, FaGlassWhiskey, FaFilm, FaDoorClosed } from "react-icons/fa";

export default function Services() {
  useEffect(() => {
    // Animate service cards on scroll
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: ".services-grid" }
    );
  }, []);

  const coreServices = [
    {
      id: 1,
      title: "Aluminium Door",
      description: "Premium aluminium doors with modern designs, excellent durability, and smooth operation for both residential and commercial spaces.",
      icon: <FaDoorOpen size={32} />,
      image: "/assets/gallery/1.jpg"
    },
    {
      id: 2,
      title: "Window Partition",
      description: "Customizable window partitions that enhance privacy while maintaining aesthetics and natural light flow in your space.",
      icon: <FaWindowRestore size={32} />,
      image: "/assets/gallery/2.jpg"
    },
    {
      id: 3,
      title: "Almirah & Fall Ceiling",
      description: "Stylish almirahs and modern fall ceilings that transform your interiors with functionality and elegance.",
      icon: <FaArchive size={32} />,
      image: "/assets/gallery/3.jpg"
    },
    {
      id: 4,
      title: "Toughened Glass",
      description: "High-strength toughened glass solutions for safety barriers, partitions, and decorative elements in your home or office.",
      icon: <FaGlassWhiskey size={32} />,
      image: "/assets/gallery/4.jpg"
    },
    {
      id: 5,
      title: "Glass Film",
      description: "Protective and decorative glass films that enhance privacy, reduce glare, and add style to your glass surfaces.",
      icon: <FaFilm size={32} />,
      image: "/assets/gallery/5.jpg"
    },
    {
      id: 6,
      title: "Plastic Door",
      description: "Durable and cost-effective plastic doors with excellent insulation properties and low maintenance requirements.",
      icon: <FaDoorClosed size={32} />,
      image: "/assets/gallery/6.jpg"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of aluminium and glass solutions designed to elevate your space
          </p>
        </div>

        {/* Core Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Core Services</h2>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map(service => (
              <div 
                key={service.id} 
                className="service-card bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition duration-300 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Service - Modular Kitchen */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Modular Kitchen Solutions</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your kitchen into a functional masterpiece with our premium modular kitchen designs. 
              We combine aesthetics with practicality to create spaces that inspire culinary creativity.
            </p>
            <div className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-xl w-full h-64 md:h-80 flex items-center justify-center text-gray-500 mx-auto">
              Modular Kitchen Image Placeholder
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Modular Kitchens?</h3>
              <ul className="text-left max-w-2xl mx-auto space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom designs tailored to your space and preferences</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>High-quality materials for durability and longevity</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert installation with attention to detail</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Competitive pricing without compromising on quality</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}