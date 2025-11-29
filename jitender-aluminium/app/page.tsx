"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaCheckCircle, FaTools, FaTruck, FaRupeeSign, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );
    
    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );
    
    gsap.fromTo(
      ".hero-btn",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6 }
    );

    // Why Choose Us animations
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: ".features-section" }
    );
  }, []);

  const features = [
    {
      icon: <FaCheckCircle size={48} />,
      title: "Quality Materials",
      description: "We use only the finest materials for durable and long-lasting installations."
    },
    {
      icon: <FaTools size={48} />,
      title: "Experienced Team",
      description: "Our skilled professionals bring years of expertise to every project."
    },
    {
      icon: <FaTruck size={48} />,
      title: "Timely Delivery",
      description: "We respect your time and complete projects within agreed deadlines."
    },
    {
      icon: <FaRupeeSign size={48} />,
      title: "Competitive Pricing",
      description: "Premium quality services at affordable rates tailored to your budget."
    }
  ];

  const services = [
    { 
      id: 1, 
      title: "Aluminium Doors", 
      description: "Premium aluminium doors with modern designs, excellent durability, and smooth operation for both residential and commercial spaces.",
      image: "/assets/gallery/1.jpg"
    },
    { 
      id: 2, 
      title: "Window Partition", 
      description: "Customizable window partitions that enhance privacy while maintaining aesthetics and natural light flow in your space.",
      image: "/assets/gallery/2.jpg"
    },
    { 
      id: 3, 
      title: "Almirah & Fall Ceiling", 
      description: "Stylish almirahs and modern fall ceilings that transform your interiors with functionality and elegance.",
      image: "/assets/gallery/3.jpg"
    },
    { 
      id: 4, 
      title: "Toughened Glass", 
      description: "High-strength toughened glass solutions for safety barriers, partitions, and decorative elements in your home or office.",
      image: "/assets/gallery/4.jpg"
    },
    { 
      id: 5, 
      title: "Glass Film", 
      description: "Protective and decorative glass films that enhance privacy, reduce glare, and add style to your glass surfaces.",
      image: "/assets/gallery/5.jpg"
    },
    { 
      id: 6, 
      title: "Plastic Door", 
      description: "Durable and cost-effective plastic doors with excellent insulation properties and low maintenance requirements.",
      image: "/assets/gallery/6.jpg"
    }
  ];

  // Slider images for the hero section
  const sliderImages = [
    { id: 1, src: "/assets/sliderImg/slide1.jpg", alt: "Premium Aluminium Door Installation" },
    { id: 2, src: "/assets/sliderImg/slide2.jpg", alt: "Modern Window Partition Design" },
    { id: 3, src: "/assets/sliderImg/slide3.jpg", alt: "Elegant Almirah & Ceiling Work" },
    { id: 4, src: "/assets/sliderImg/slide4.jpg", alt: "High-Quality Toughened Glass" },
    { id: 5, src: "/assets/sliderImg/slide5.jpg", alt: "Professional Glass Film Application" },
    { id: 6, src: "/assets/sliderImg/slide6.jpg", alt: "Durable Plastic Door Solutions" },
    { id: 7, src: "/assets/sliderImg/slide7.jpg", alt: "Custom Aluminium Work" },
    { id: 8, src: "/assets/sliderImg/slide8.jpg", alt: "Expert Glass Installation" },
    { id: 9, src: "/assets/sliderImg/slide9.jpg", alt: "Beautiful Interior Design" }
  ];

  // Gallery images
  const galleryImages = [
    { id: 1, src: "/assets/gallery/1.jpg", alt: "Aluminium Door Installation" },
    { id: 2, src: "/assets/gallery/2.jpg", alt: "Window Partition Design" },
    { id: 3, src: "/assets/gallery/3.jpg", alt: "Modern Almirah" },
    { id: 4, src: "/assets/gallery/4.jpg", alt: "Toughened Glass Installation" },
    { id: 5, src: "/assets/gallery/5.jpg", alt: "Glass Film Application" },
    { id: 6, src: "/assets/gallery/6.jpg", alt: "Plastic Door" },
    { id: 7, src: "/assets/gallery/7.jpg", alt: "Aluminium Work" },
    { id: 8, src: "/assets/gallery/8.jpg", alt: "Glass Installation" },
    { id: 9, src: "/assets/gallery/9.jpg", alt: "Interior Design" },
    { id: 10, src: "/assets/gallery/10.jpg", alt: "Aluminium Partition" },
    { id: 11, src: "/assets/gallery/11.jpg", alt: "Aluminium Work" },
    { id: 12, src: "/assets/gallery/12.jpg", alt: "Glass Installation" },
    { id: 13, src: "/assets/gallery/13.jpg", alt: "Interior Design" },
    { id: 14, src: "/assets/gallery/14.jpg", alt: "Aluminium Partition" },
    { id: 15, src: "/assets/gallery/15.jpg", alt: "Aluminium Door Installation" },
    { id: 16, src: "/assets/gallery/16.jpg", alt: "Window Partition Design" },
    { id: 17, src: "/assets/gallery/17.jpg", alt: "Modern Almirah" },
    { id: 18, src: "/assets/gallery/18.jpg", alt: "Toughened Glass Installation" },
    { id: 19, src: "/assets/gallery/19.jpg", alt: "Glass Film Application" },
    { id: 20, src: "/assets/gallery/20.jpg", alt: "Plastic Door" },
    { id: 21, src: "/assets/gallery/21.jpg", alt: "Aluminium Work" },
    { id: 22, src: "/assets/gallery/22.jpg", alt: "Glass Installation" },
    { id: 23, src: "/assets/gallery/23.jpg", alt: "Interior Design" }
  ];

  // Auto-slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center py-12 md:py-0">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            {sliderImages.map((image) => (
              <SwiperSlide key={image.id} className="flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Content Overlay */}
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[80vh] pt-4">
          <div className="text-center max-w-3xl px-4">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in">
              Transforming Spaces with Premium <span className="text-yellow-400">Aluminium & Glass</span> Solutions
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl text-white mb-8 animate-fade-in-delay">
              Quality Craftsmanship and Reliable Service in Rohini, Delhi
            </p>
            <a 
              href="/contact" 
              className="hero-btn inline-block px-6 py-3 sm:px-8 sm:py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fade-in-delay-2"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out with our commitment to excellence, quality, and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
              >
                <div className="mb-5 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our premium aluminium and glass solutions designed for modern living
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 group overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a 
                    href="/services" 
                    className="text-red-600 font-semibold hover:text-red-700 transition duration-300 inline-flex items-center"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recently completed projects showcasing our craftsmanship and attention to detail
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-xl shadow-xl h-96 md:h-[500px] relative">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold">{image.alt}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition duration-300 shadow-lg"
              onClick={() => setCurrentSlide(currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1)}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition duration-300 shadow-lg"
              onClick={() => setCurrentSlide(currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1)}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-red-600' : 'bg-gray-300'}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="/gallery" 
              className="inline-block px-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition duration-300 shadow-lg"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>
      
      {/* Additional Business Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose JITENDER Aluminium & Glass Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of experience serving the Rohini community with unmatched quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Trusted Partner for Aluminium & Glass Solutions</h3>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in the industry, JITENDER Aluminium & Glass Work has established itself as a leading provider of high-quality aluminium and glass solutions in Rohini, Delhi.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of skilled craftsmen combines traditional techniques with modern technology to deliver exceptional results that exceed customer expectations. We take pride in our meticulous attention to detail and commitment to using only the finest materials.
              </p>
              <p className="text-gray-600 mb-6">
                From residential projects to commercial installations, we offer comprehensive services tailored to meet your specific needs and budget. Our customer-centric approach ensures seamless communication and timely delivery of all projects.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
              >
                Contact Us Today
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-red-600">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-600">Free consultation and accurate quotations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-red-600">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-600">Professional installation with clean finish</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-red-600">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-600">Warranty on all products and services</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-red-600">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-600">Post-installation support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-red-600">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-600">Competitive pricing without compromising quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}