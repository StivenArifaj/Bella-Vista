
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Phone, MapPin, Clock, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation data:', formData);

    toast({
      title: "Reservation Received",
      description: "We have received your request and will confirm shortly via email.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00',
    '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  return (
    <section id="reservation" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 skew-x-12 transform translate-x-1/4 -z-10" />

      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Book Your Table</span>
          <h2 className="h2-title mt-2 mb-6">Reservations</h2>
          <p className="text-body max-w-2xl mx-auto">
            Secure your spot for an unforgettable dining experience.
            For parties larger than 10, please contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-2xl border-0 overflow-hidden bg-white/50 backdrop-blur-sm">
              <CardHeader className="bg-primary/5 p-8 border-b border-border/50">
                <CardTitle className="text-2xl font-serif text-foreground">Request a Booking</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="h-12 bg-white/80"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 bg-white/80"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="h-12 bg-white/80"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Guests</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 pl-10 pr-3 border border-input rounded-md bg-white/80 text-foreground appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                          <option value="10+">10+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="h-12 bg-white/80"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 pl-10 pr-3 border border-input rounded-md bg-white/80 text-foreground appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Allergies, special occasion, patio seating..."
                      rows={3}
                      className="w-full px-3 py-2 border border-input rounded-md bg-white/80 text-foreground resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-serif font-semibold mb-6">Opening Hours</h3>
              <div className="space-y-4 text-primary-foreground/90">
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span>Mon - Thu</span>
                  <span>11:00 - 22:00</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span>Fri - Sat</span>
                  <span>11:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 - 21:00</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl font-serif font-semibold mb-6 flex items-center text-foreground">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                Contact Us
              </h3>
              <p className="text-muted-foreground mb-6">
                Prefer to book by phone? Call us between 10am and 10pm.
              </p>
              <a href="tel:+15551234567" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block mb-2">
                (555) 123-4567
              </a>
              <p className="text-sm text-muted-foreground">
                booking@bellavista.com
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl font-serif font-semibold mb-6 flex items-center text-foreground">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                Location
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                123 Italian Way<br />
                Downtown District<br />
                New York, NY 10001
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
