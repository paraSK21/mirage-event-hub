
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center" 
        style={{ backgroundPosition: 'center 30%' }}
      />
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mirage-purple/70 via-transparent to-mirage-blue/70"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/cd615528-b697-4587-9c92-4d3d751dd759.png" 
            alt="Mirage Event Logo" 
            className="w-40 h-40 mx-auto mb-4"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-ahsing text-white mb-4 animate-float">
          MIRAGE
        </h1>
        <p className="text-xl md:text-2xl font-sunborn text-mirage-yellow mb-6">
          2023
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <div className="flex items-center text-white">
            <Calendar className="mr-2 h-5 w-5 text-mirage-yellow" />
            <span className="font-sunborn">May 6th - 8th, 2023</span>
          </div>
          <div className="hidden md:block h-4 w-0.5 bg-mirage-yellow mx-4"></div>
          <div className="flex items-center text-white">
            <MapPin className="mr-2 h-5 w-5 text-mirage-yellow" />
            <span className="font-sunborn">Bharati Vidyapeeth DEEMED TO BE University Medical College Pune</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-mirage-orange hover:bg-mirage-orange/90 text-white font-sunborn py-6"
            asChild
          >
            <Link to="/events">Explore Events</Link>
          </Button>
          <Button 
            className="bg-mirage-blue hover:bg-mirage-blue/90 text-white font-sunborn py-6"
            asChild
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-mirage-purple/90 to-transparent"></div>
      <div className="absolute -bottom-8 right-0 w-40 h-40 bg-mirage-orange rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute -top-8 left-0 w-40 h-40 bg-mirage-blue rounded-full opacity-30 blur-2xl"></div>
    </div>
  );
};

export default Hero;
