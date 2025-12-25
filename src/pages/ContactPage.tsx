
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
                <div className="container-custom py-12">
                    <h1 className="h1-display text-center mb-8">Contact Us</h1>
                    <p className="text-body text-center max-w-2xl mx-auto mb-16">
                        We'd love to hear from you. Reach out for private events, feedback, or just to say ciao.
                    </p>
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
