"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    // Animate gallery items on scroll
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, scrollTrigger: ".gallery-grid" }
    );
  }, []);

  // Gallery images from the public/assets/gallery folder
  const galleryImages = [
    { id: 1, src: "/assets/gallery/1.jpg", alt: "Aluminium Door Installation" },
    { id: 2, src: "/assets/gallery/2.jpg", alt: "Window Partition Design" },
    { id: 3, src: "/assets/gallery/3.jpg", alt: "Modern Almirah" },
    { id: 4, src: "/assets/gallery/4.jpg", alt: "Toughened Glass Balcony" },
    { id: 5, src: "/assets/gallery/5.jpg", alt: "Glass Film Application" },
    { id: 6, src: "/assets/gallery/6.jpg", alt: "Plastic Door Installation" },
    { id: 7, src: "/assets/gallery/7.jpg", alt: "Fall Ceiling Design" },
    { id: 8, src: "/assets/gallery/8.jpg", alt: "Modular Kitchen" },
    { id: 9, src: "/assets/gallery/9.jpg", alt: "Aluminium Work" },
    { id: 10, src: "/assets/gallery/10.jpg", alt: "Glass Installation" },
    { id: 11, src: "/assets/gallery/11.jpg", alt: "Window Design" },
    { id: 12, src: "/assets/gallery/12.jpg", alt: "Partition Work" },
    { id: 13, src: "/assets/gallery/13.jpg", alt: "Ceiling Installation" },
    { id: 14, src: "/assets/gallery/14.jpg", alt: "Door Installation" },
    { id: 15, src: "/assets/gallery/15.jpg", alt: "Glass Film Work" },
    { id: 16, src: "/assets/gallery/16.jpg", alt: "Almirah Design" },
    { id: 17, src: "/assets/gallery/17.jpg", alt: "Kitchen Work" },
    { id: 18, src: "/assets/gallery/18.jpg", alt: "Commercial Installation" },
    { id: 19, src: "/assets/gallery/19.jpg", alt: "Residential Work" },
    { id: 20, src: "/assets/gallery/20.jpg", alt: "Office Partition" },
    { id: 21, src: "/assets/gallery/21.jpg", alt: "Glass Balcony" },
    { id: 22, src: "/assets/gallery/22.jpg", alt: "Modern Design" },
    { id: 23, src: "/assets/gallery/23.jpg", alt: "Finished Project" },
  ];

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing the quality and craftsmanship of our work
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
              onClick={() => openLightbox(image.id)}
            >
              <div className="w-full aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button 
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-yellow-400 transition duration-300"
              >
                &times;
              </button>
              <div className="w-full h-[70vh] overflow-hidden rounded-xl">
                {selectedImage && (
                  <img 
                    src={`/assets/gallery/${selectedImage}.jpg`} 
                    alt={`Gallery Image ${selectedImage}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="text-white text-center mt-4">
                <p className="text-xl">Project Image {selectedImage}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}