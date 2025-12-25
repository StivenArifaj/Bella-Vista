
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Heart } from 'lucide-react';

const AboutPage = () => {
    const team = [
        {
            name: "Marco Rossi",
            role: "Executive Chef",
            image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1000&auto=format&fit=crop",
            bio: "With over 20 years of experience in Michelin-starred kitchens across Italy."
        },
        {
            name: "Sofia Bianchi",
            role: "Head Sommelier",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
            bio: "Certified sommelier with a passion for discovering rare vintage wines."
        },
        {
            name: "Alessandro Romano",
            role: "Pastry Chef",
            image: "https://images.unsplash.com/photo-1556910111-a53677a1000a?q=80&w=1000&auto=format&fit=crop",
            bio: "Master of traditional Italian dolci with a modern artistic twist."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            alt="Restaurant Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-20 text-center text-white px-4 animate-fade-in-up">
                        <Badge className="bg-primary/80 hover:bg-primary text-white border-none px-4 py-1 mb-6 text-sm tracking-widest uppercase">
                            Since 1985
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">Our Story</h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
                            A journey through taste, tradition, and the art of Italian hospitality.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute top-0 left-0 w-20 h-20 bg-accent/20 rounded-full -translate-x-10 -translate-y-10 z-0" />
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-10 translate-y-10 z-0" />
                                <img
                                    src="https://images.unsplash.com/photo-1507048331197-7d4defea8700?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Chef Cooking"
                                    className="relative z-10 rounded-lg shadow-2xl w-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                                    Tradition Meets Modernity
                                </h2>
                                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        Founded in 1985, Bella Vista began as a humble family kitchen in the heart of Rome.
                                        Driven by Nonna Maria's passion for authentic flavors, we grew from a small trattoria
                                        into a celebration of Italian culinary artistry.
                                    </p>
                                    <p>
                                        Today, we continue that legacy by serving recipes passed down through generations,
                                        reimagined with a modern touch. Every dish tells a story of heritage, love, and
                                        the finest ingredients sourced from local farmers and Italian artisans.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-6 mt-12">
                                    <div className="text-center">
                                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                                            <Heart className="w-6 h-6" />
                                        </div>
                                        <span className="font-semibold block text-foreground">Passion</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <span className="font-semibold block text-foreground">Quality</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                        <span className="font-semibold block text-foreground">Tradition</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 px-4 bg-warm-50 relative overflow-hidden">
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary font-medium tracking-widest uppercase text-sm">The Maestros</span>
                            <h2 className="h2-title mt-2 mb-6">Meet Our Team</h2>
                            <p className="text-body max-w-2xl mx-auto">
                                The passionate individuals who bring the magic of Italy to your table every single day.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white">
                                        <div className="aspect-[3/4] overflow-hidden relative">
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                            />
                                        </div>
                                        <CardContent className="p-8 text-center relative z-20">
                                            <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                                                {member.role}
                                            </p>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                {member.bio}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
