
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Clock, Info, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const About = () => {
  const { toast } = useToast();

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Download",
      description: "The event brochure will be available for download soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-20 pb-12 bg-hero-pattern bg-cover bg-center relative">
          <div className="absolute inset-0 bg-mirage-purple/70 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-ahsing text-white mb-4 text-center">About MIRAGE</h1>
            <p className="text-xl font-sunborn text-mirage-yellow text-center max-w-3xl mx-auto">
              A vibrant celebration of Mexican culture and heritage
            </p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-ahsing text-mirage-purple mb-6">Welcome to MIRAGE 2023</h2>
                <p className="mb-4">
                  MIRAGE is an annual cultural festival hosted by Bharati Vidyapeeth DEEMED TO BE University Medical College Pune, celebrating the vibrant colors, sounds, and traditions of Mexican culture.
                </p>
                <p className="mb-4">
                  Now in its fifth year, MIRAGE has grown to become one of the most anticipated cultural events in the college calendar, attracting participants and visitors from across the region.
                </p>
                <p className="mb-6">
                  This three-day extravaganza features a diverse array of events including workshops, performances, competitions, exhibitions, and culinary experiences, all designed to immerse participants in the rich tapestry of Mexican heritage.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
                    asChild
                  >
                    <Link to="/events">Explore Events</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-mirage-purple text-mirage-purple hover:bg-mirage-purple hover:text-white"
                    onClick={handleDownloadBrochure}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-mirage-blue/20 rounded-lg p-6 relative z-10">
                  <img 
                    src="/lovable-uploads/cd615528-b697-4587-9c92-4d3d751dd759.png" 
                    alt="Mirage Event Poster" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-mirage-yellow rounded-full opacity-50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-mirage-orange rounded-full opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Event Details */}
        <section className="py-16 bg-mirage-purple/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-mirage-purple mb-12">Event Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="mirage-card p-8 border-mirage-orange">
                <div className="w-16 h-16 rounded-full bg-mirage-orange flex items-center justify-center mb-6 mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-sunborn text-xl mb-4 text-center">Dates</h3>
                <p className="text-center">
                  <span className="font-bold block mb-2">May 6th - 8th, 2023</span>
                  Three days of non-stop celebrations, performances, and activities
                </p>
              </div>
              
              <div className="mirage-card p-8 border-mirage-blue">
                <div className="w-16 h-16 rounded-full bg-mirage-blue flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-sunborn text-xl mb-4 text-center">Venue</h3>
                <p className="text-center">
                  <span className="font-bold block mb-2">Bharati Vidyapeeth DEEMED TO BE University Medical College</span>
                  Multiple locations across campus including auditoriums, outdoor spaces, and studios
                </p>
              </div>
              
              <div className="mirage-card p-8 border-mirage-yellow">
                <div className="w-16 h-16 rounded-full bg-mirage-yellow flex items-center justify-center mb-6 mx-auto">
                  <Info className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-sunborn text-xl mb-4 text-center">Participation</h3>
                <p className="text-center">
                  <span className="font-bold block mb-2">Open to All</span>
                  Students, faculty, and visitors are all welcome to participate in the festivities
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Video Section */}
        <section className="py-16 bg-mirage-purple">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-white mb-12">The MIRAGE Experience</h2>
            
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
                    <p className="text-gray-300">Check back closer to the event date for our promotional video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Event History */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-mirage-purple mb-12">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-full bg-mirage-orange/30"></div>
                
                <div className="relative pl-8 md:ml-[50%] mb-12">
                  <div className="absolute top-5 -left-4 md:-left-4 w-8 h-8 rounded-full bg-mirage-orange flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-orange">
                    <h3 className="font-sunborn text-xl mb-2">MIRAGE Begins</h3>
                    <p className="text-gray-600 mb-2">2019</p>
                    <p>MIRAGE started as a small cultural day celebration with just 5 events and 200 participants, focusing on introducing Mexican culture to the campus.</p>
                  </div>
                </div>
                
                <div className="relative pr-8 md:mr-[50%] md:text-right mb-12">
                  <div className="absolute top-5 -right-4 md:-right-4 w-8 h-8 rounded-full bg-mirage-purple flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-purple">
                    <h3 className="font-sunborn text-xl mb-2">Growing Popularity</h3>
                    <p className="text-gray-600 mb-2">2020</p>
                    <p>Despite moving online due to COVID-19, MIRAGE expanded to include 10 virtual events, reaching over 500 participants across multiple colleges.</p>
                  </div>
                </div>
                
                <div className="relative pl-8 md:ml-[50%] mb-12">
                  <div className="absolute top-5 -left-4 md:-left-4 w-8 h-8 rounded-full bg-mirage-blue flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-blue">
                    <h3 className="font-sunborn text-xl mb-2">Regional Recognition</h3>
                    <p className="text-gray-600 mb-2">2021</p>
                    <p>The festival gained regional recognition with hybrid events attended by over 700 participants and featured guest performances from Mexican cultural groups.</p>
                  </div>
                </div>
                
                <div className="relative pr-8 md:mr-[50%] md:text-right mb-12">
                  <div className="absolute top-5 -right-4 md:-right-4 w-8 h-8 rounded-full bg-mirage-yellow flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-yellow">
                    <h3 className="font-sunborn text-xl mb-2">Full Scale Festival</h3>
                    <p className="text-gray-600 mb-2">2022</p>
                    <p>MIRAGE returned to a fully in-person format with 15 events spanning two days and attracted over 900 participants from across the state.</p>
                  </div>
                </div>
                
                <div className="relative pl-8 md:ml-[50%]">
                  <div className="absolute top-5 -left-4 md:-left-4 w-8 h-8 rounded-full bg-mirage-orange flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-orange">
                    <h3 className="font-sunborn text-xl mb-2">MIRAGE 2023</h3>
                    <p className="text-gray-600 mb-2">2023</p>
                    <p>Now in its fifth year, MIRAGE 2023 expands to a three-day extravaganza with over 20 events, expecting more than 1000 participants from across the region.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-mirage-purple to-mirage-blue text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-ahsing mb-6">Join Us for MIRAGE 2023</h2>
            <p className="text-xl font-sunborn mb-10 max-w-3xl mx-auto">Be part of this cultural celebration and immerse yourself in the vibrant colors, sounds, and traditions of Mexico!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-mirage-orange hover:bg-mirage-orange/90 text-white font-sunborn py-6 px-8 text-lg"
                asChild
              >
                <Link to="/events">Register for Events</Link>
              </Button>
              <Button 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-sunborn py-6 px-8 text-lg"
                asChild
              >
                <Link to="/schedule">View Event Schedule</Link>
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

export default About;
