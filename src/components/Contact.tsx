
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Calendar, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-warm-50 relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Get in Touch</span>
          <h2 className="h2-title mt-2 mb-6">Contact Us</h2>
          <p className="text-body max-w-2xl mx-auto">
            Visit us for an authentic Italian dining experience, or get in touch
            for catering, private events, and special occasions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="bg-primary/10 p-4 rounded-full shrink-0">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Italian Way<br />
                    Downtown District<br />
                    New York, NY 10001
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 mt-2 font-semibold">
                    Get Directions →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="bg-primary/10 p-4 rounded-full shrink-0">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Phone & Email</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium text-foreground text-lg">(555) 123-4567</p>
                    <p>booking@bellavista.com</p>
                    <p>events@bellavista.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="bg-primary/10 p-4 rounded-full shrink-0">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Opening Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between w-full min-w-[200px]">
                      <span>Mon-Thu</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between w-full min-w-[200px]">
                      <span>Fri-Sat</span>
                      <span>11:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between w-full min-w-[200px]">
                      <span>Sunday</span>
                      <span>10:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group"
          >
            {/* Abstract Map Placeholder since we can't embed real Google Maps without API Key - Making it look artistic */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg relative z-10 text-center max-w-xs mx-4">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-serif font-bold mb-2">Find Us Here</h3>
                <p className="text-sm text-muted-foreground mb-4">We are located in the historic Downtown District.</p>
                <Button className="w-full">Open in Maps</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
