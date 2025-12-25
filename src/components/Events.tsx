
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Music, Wine, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

const Events = () => {
  const events = [
    {
      title: "Jazz Night",
      date: "Every Friday",
      time: "20:00 - 23:00",
      description: "Enjoy smooth jazz melodies while dining on our finest Italian dishes.",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop",
      price: "No cover charge",
      icon: Music
    },
    {
      title: "Wine Tasting",
      date: "First Saturday of Month",
      time: "18:00 - 21:00",
      description: "Discover exceptional Italian wines paired with artisanal appetizers.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
      price: "$45 per person",
      icon: Wine
    },
    {
      title: "Cooking Class",
      date: "Every Sunday",
      time: "14:00 - 17:00",
      description: "Learn to make authentic pasta and traditional sauces with our head chef.",
      image: "https://images.unsplash.com/photo-1556911220-e1502402c48e?q=80&w=1000&auto=format&fit=crop",
      price: "$65 per person",
      icon: ChefHat
    }
  ];

  return (
    <section id="events" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Join the Celebration</span>
          <h2 className="h2-title mt-2 mb-6">Events & Entertainment</h2>
          <p className="text-body max-w-2xl mx-auto">
            Experience the vibrant culture of Italy through our regular events,
            live music, and special culinary experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-white hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                    <event.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <div className="font-semibold text-lg">{event.date}</div>
                    <div className="text-sm opacity-90">{event.time}</div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-semibold text-primary">{event.price}</span>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                      Reserve Spot
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <Calendar className="mr-2 h-5 w-5" /> View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
