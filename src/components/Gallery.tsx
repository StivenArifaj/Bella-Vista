
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      caption: "Intimate Dining Atmosphere",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
      caption: "Culinary Masterpieces",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
      caption: "Fresh Ingredients",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
      caption: "Signature Cocktails",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1000&auto=format&fit=crop",
      caption: "Elegant Plating",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    }
  ];

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Visual Journey</span>
          <h2 className="h2-title mt-2 mb-6">Our Gallery</h2>
          <p className="text-body max-w-2xl mx-auto">
            Step into our world of authentic Italian dining. From our warm ambiance
            to our artfully prepared dishes, every detail creates an unforgettable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${image.colSpan} ${image.rowSpan}`}
              onClick={() => openModal(image.url)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <ZoomIn className="w-10 h-10 text-white mb-2" />
                <p className="text-white font-medium tracking-wide uppercase text-sm">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Improved Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <div className="relative max-w-6xl max-h-[90vh] w-full">
                <Button
                  onClick={closeModal}
                  variant="ghost"
                  className="absolute -top-12 right-0 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
                >
                  <X className="w-6 h-6" />
                </Button>
                <motion.img
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  src={selectedImage}
                  alt="Gallery large view"
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
