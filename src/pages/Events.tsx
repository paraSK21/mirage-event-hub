
import { useState } from "react";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import { EVENTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: "cultural", name: "Cultural" },
    { id: "workshop", name: "Workshops" },
    { id: "sports", name: "Sports" },
    { id: "technical", name: "Technical" },
    { id: "other", name: "Other" },
  ];

  const filteredEvents = EVENTS.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === null || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-20 pb-12 bg-hero-pattern bg-cover bg-center relative">
          <div className="absolute inset-0 bg-mirage-purple/70 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-ahsing text-white mb-4 text-center">Our Events</h1>
            <p className="text-xl font-sunborn text-mirage-yellow text-center max-w-3xl mx-auto">
              Explore and register for our exciting lineup of events
            </p>
          </div>
        </section>
        
        {/* Search and Filter */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-mirage-purple focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
                <Button
                  variant="outline"
                  className={`${
                    selectedCategory === null
                      ? "bg-mirage-purple text-white"
                      : "border-mirage-purple text-mirage-purple"
                  }`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
                
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant="outline"
                    className={`${
                      selectedCategory === category.id
                        ? "bg-mirage-purple text-white"
                        : "border-mirage-purple text-mirage-purple"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Events Grid */}
        <section className="py-12 bg-mirage-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-sunborn text-mirage-purple mb-4">No events found</h3>
                <p className="mb-6">Try adjusting your search or filter criteria</p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Registration CTA */}
        <section className="py-16 bg-gradient-to-b from-mirage-orange/20 to-mirage-yellow/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-ahsing text-mirage-purple mb-6">Ready to Participate?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Register for your favorite events now and secure your spot at MIRAGE 2023!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
                asChild
              >
                <Link to="/cart">View Cart</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-mirage-purple text-mirage-purple hover:bg-mirage-purple hover:text-white"
                asChild
              >
                <Link to="/schedule">Check Schedule</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-mirage-purple text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="font-ahsing text-3xl">MIRAGE</span>
              <span className="ml-2 text-mirage-yellow font-sunborn text-sm">2023</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link to="/" className="text-center md:text-left hover:text-mirage-yellow transition-colors">Home</Link>
              <Link to="/about" className="text-center md:text-left hover:text-mirage-yellow transition-colors">About</Link>
              <Link to="/events" className="text-center md:text-left hover:text-mirage-yellow transition-colors">Events</Link>
              <Link to="/schedule" className="text-center md:text-left hover:text-mirage-yellow transition-colors">Schedule</Link>
              <Link to="/cart" className="text-center md:text-left hover:text-mirage-yellow transition-colors">Cart</Link>
            </div>
          </div>
          
          <div className="border-t border-mirage-purple/30 mt-8 pt-8 text-center text-sm text-mirage-purple-200">
            <p>&copy; 2023 MIRAGE. All rights reserved. Designed for Bharati Vidyapeeth DEEMED TO BE University Medical College</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;
