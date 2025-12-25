
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reservation from '@/components/Reservation';

const ReservationPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
                <div className="container-custom py-12">
                    <h1 className="h1-display text-center mb-8">Book a Table</h1>
                    <p className="text-body text-center max-w-2xl mx-auto mb-16">
                        Join us for an unforgettable dining experience. Reserve your spot today.
                    </p>
                    <Reservation />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ReservationPage;
