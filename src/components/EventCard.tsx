import { useState } from 'react';
import { Calendar, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Event } from '@/lib/types';

interface EventCardProps {
  event: Event; 
}

const EventCard = ({ event }: EventCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="mirage-card border-mirage-purple overflow-hidden flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 bg-mirage-orange text-white px-3 py-1 font-sunborn text-sm">
          ₹{event.price}
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="font-ahsing text-xl text-mirage-purple mb-2">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            {/* <Calendar className="mr-2 h-4 w-4 text-mirage-orange" /> */}
            {/* <span>{event.date}</span> */}
          </div>
        </div>
      </div>
      
      <div className="p-4 pt-0 mt-auto flex justify-between items-center">
        {event.description && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1 border-mirage-purple text-mirage-purple hover:bg-mirage-purple hover:text-white">
                <Info className="h-4 w-4" />
                <span>Details</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle className="font-ahsing text-2xl text-mirage-purple">{event.title}</DialogTitle>
                <DialogDescription>
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover my-4 rounded-md" />
                  <p className="mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      {/* <Calendar className="mr-2 h-4 w-4 text-mirage-orange" /> */}
                      {/* <span>{event.date}</span> */}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="font-bold text-lg">Price: ₹{event.price}</span>
                  </div>
                  
                  <a href="https://forms.easebuzz.in/sign-up/Bpvlxs/mirage2025/?inst_name=Bpvlxs&form_name=mirage2025&jsonData=1" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    <Button className="w-full bg-mirage-orange hover:bg-mirage-orange/90 text-white">
                      Register Now
                    </Button>
                  </a>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
        
        <a href="https://forms.easebuzz.in/sign-up/Bpvlxs/mirage2025/?inst_name=Bpvlxs&form_name=mirage2025&jsonData=1" 
           target="_blank" 
           rel="noopener noreferrer"
           className={event.description ? "" : "ml-auto"}>
          <Button className="bg-mirage-orange hover:bg-mirage-orange/90 text-white">
            Register Now
          </Button>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
