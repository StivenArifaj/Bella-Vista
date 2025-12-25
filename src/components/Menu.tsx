
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuData = {
    breakfast: [
      {
        name: "Italian Benedict",
        description: "Poached eggs on focaccia with prosciutto and hollandaise",
        price: "$16",
        image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1000&auto=format&fit=crop",
        dietary: ["vegetarian"]
      },
      {
        name: "Cornetto & Espresso",
        description: "Traditional Italian croissant with fresh espresso",
        price: "$8",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
        dietary: []
      },
      {
        name: "Frittata Rustica",
        description: "Farm eggs with seasonal vegetables and fresh herbs",
        price: "$14",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop",
        dietary: ["vegetarian", "gluten-free"]
      }
    ],
    lunch: [
      {
        name: "Margherita Pizza",
        description: "San Marzano tomatoes, fresh mozzarella, basil",
        price: "$18",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
        dietary: ["vegetarian"]
      },
      {
        name: "Linguine alle Vongole",
        description: "Fresh clams, white wine, garlic, and parsley",
        price: "$24",
        image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=1000&auto=format&fit=crop",
        dietary: []
      },
      {
        name: "Caesar Salad",
        description: "Romaine lettuce, parmesan, croutons, house dressing",
        price: "$15",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000&auto=format&fit=crop",
        dietary: ["vegetarian"]
      }
    ],
    dinner: [
      {
        name: "Osso Buco",
        description: "Braised veal shanks with saffron risotto",
        price: "$38",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop",
        dietary: []
      },
      {
        name: "Branzino al Sale",
        description: "Mediterranean sea bass baked in sea salt",
        price: "$32",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1000&auto=format&fit=crop",
        dietary: ["gluten-free"]
      },
      {
        name: "Pappardelle ai Funghi",
        description: "Wide pasta with wild mushrooms and truffle oil",
        price: "$26",
        image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1000&auto=format&fit=crop",
        dietary: ["vegetarian"]
      }
    ]
  };

  const categories = [
    { id: 'breakfast', name: 'Breakfast', time: '7:00 AM - 11:00 AM' },
    { id: 'lunch', name: 'Lunch', time: '11:00 AM - 4:00 PM' },
    { id: 'dinner', name: 'Dinner', time: '4:00 PM - 10:00 PM' }
  ];

  const getDietaryBadge = (dietary: string) => {
    const badgeStyles = {
      vegetarian: 'bg-green-50 text-green-700 border-green-200',
      'gluten-free': 'bg-amber-50 text-amber-700 border-amber-200',
      vegan: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    };
    return badgeStyles[dietary as keyof typeof badgeStyles] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Delicious Stories</span>
          <h2 className="h2-title mt-2 mb-6">Our Menu</h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover authentic Italian flavors crafted with the finest ingredients
            and traditional cooking methods passed down through generations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-16 space-y-4 sm:space-y-0 sm:space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                : 'bg-white hover:bg-white/80 text-muted-foreground border border-border shadow-sm'
                }`}
            >
              <div className="text-center">
                <div className="text-lg font-serif">{category.name}</div>
                <div className="text-xs opacity-80 mt-1 uppercase tracking-wider">{category.time}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white font-medium tracking-widest uppercase text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View Details</span>
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-medium text-foreground">{item.name}</h3>
                    <span className="text-xl font-bold text-primary font-serif">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  {item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.dietary.map((diet) => (
                        <Badge
                          key={diet}
                          variant="outline"
                          className={`${getDietaryBadge(diet)} uppercase tracking-wider text-[10px] py-1 px-3 border-0`}
                        >
                          {diet}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
