
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Highlights Section */}
        <section className="py-16 bg-mirage-purple/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-mirage-purple mb-12">Event Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="mirage-card p-8 text-center border-mirage-orange hover:border-mirage-purple transition-colors">
                <div className="w-16 h-16 mx-auto bg-mirage-orange rounded-full flex items-center justify-center mb-4">
                  <span className="font-ahsing text-2xl text-white">20+</span>
                </div>
                <h3 className="font-sunborn text-xl mb-2">Exciting Events</h3>
                <p className="text-gray-600">From cultural performances to workshops</p>
              </div>
              
              <div className="mirage-card p-8 text-center border-mirage-blue hover:border-mirage-purple transition-colors">
                <div className="w-16 h-16 mx-auto bg-mirage-blue rounded-full flex items-center justify-center mb-4">
                  <span className="font-ahsing text-2xl text-white">3</span>
                </div>
                <h3 className="font-sunborn text-xl mb-2">Days of Celebration</h3>
                <p className="text-gray-600">Packed with non-stop entertainment</p>
              </div>
              
              <div className="mirage-card p-8 text-center border-mirage-yellow hover:border-mirage-purple transition-colors">
                <div className="w-16 h-16 mx-auto bg-mirage-yellow rounded-full flex items-center justify-center mb-4">
                  <span className="font-ahsing text-2xl text-white">1000+</span>
                </div>
                <h3 className="font-sunborn text-xl mb-2">Participants</h3>
                <p className="text-gray-600">Join a community of enthusiasts</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Events Section */}
        <section className="py-16 bg-gradient-to-b from-white to-mirage-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-ahsing text-mirage-purple">Featured Events</h2>
              <Link to="/events" className="flex items-center text-mirage-orange hover:text-mirage-purple transition-colors">
                <span className="font-sunborn">View All</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Featured Event 1 */}
              <div className="mirage-card overflow-hidden border-mirage-purple">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1581873372796-635b67ca2008" 
                    alt="Mariachi Band Competition" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-ahsing text-2xl text-white mb-2">Mariachi Band Competition</h3>
                    <div className="flex items-center text-sm text-white mb-2">
                      <Calendar className="mr-2 h-4 w-4 text-mirage-yellow" />
                      <span>May 8th, 2023</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <MapPin className="mr-2 h-4 w-4 text-mirage-yellow" />
                      <span>Main Auditorium</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="mb-4">Watch different Mariachi bands compete for the title of Mirage Mariachi Champion.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-mirage-orange">₹200</span>
                    <Button 
                      className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
                      asChild
                    >
                      <Link to="/events">Register Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Featured Event 2 */}
              <div className="mirage-card overflow-hidden border-mirage-purple">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1572885935436-67f32cb341e5" 
                    alt="Dia de los Muertos Art Workshop" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-ahsing text-2xl text-white mb-2">Dia de los Muertos Art Workshop</h3>
                    <div className="flex items-center text-sm text-white mb-2">
                      <Calendar className="mr-2 h-4 w-4 text-mirage-yellow" />
                      <span>May 7th, 2023</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <MapPin className="mr-2 h-4 w-4 text-mirage-yellow" />
                      <span>Art Studio</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="mb-4">Learn about the Day of the Dead tradition and create your own sugar skull art piece.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-mirage-orange">₹180</span>
                    <Button 
                      className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
                      asChild
                    >
                      <Link to="/events">Register Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Video Section */}
        <section className="py-16 bg-mirage-purple">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-white mb-12">Experience the Excitement</h2>
            
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-2xl">
              <div className="w-full h-0 pb-[56.25%] relative bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="mb-4 text-mirage-yellow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-sunborn text-xl mb-4">Event video will be available soon</p>
                    <p className="text-gray-300">Check back closer to the event date for a preview of MIRAGE 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-mirage-orange to-mirage-yellow text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-ahsing mb-6">Ready to Join the Celebration?</h2>
            <p className="text-xl font-sunborn mb-10 max-w-3xl mx-auto">Don't miss out on this vibrant celebration of Mexican culture. Register for your favorite events now and be part of MIRAGE 2023!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-white text-mirage-orange hover:bg-mirage-purple hover:text-white border-2 border-white font-sunborn py-6 px-8 text-lg"
                asChild
              >
                <Link to="/events">Browse Events</Link>
              </Button>
              <Button 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-sunborn py-6 px-8 text-lg"
                asChild
              >
                <Link to="/schedule">View Schedule</Link>
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

export default Index;
