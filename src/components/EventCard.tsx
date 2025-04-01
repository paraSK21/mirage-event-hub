
import { useState } from 'react';
import { Calendar, Clock, MapPin, Info, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Event } from '@/lib/types';
import { addToCart, getCartItems } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (quantity <= 0) return;
    
    addToCart(event, quantity);
    setIsDialogOpen(false);
    
    toast({
      title: "Added to cart",
      description: `${quantity} ticket${quantity > 1 ? 's' : ''} for ${event.title} added to your cart.`,
    });
    
    setQuantity(1);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

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
            <Calendar className="mr-2 h-4 w-4 text-mirage-orange" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-mirage-orange" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-mirage-orange" />
            <span>{event.venue}</span>
          </div>
        </div>
        
        <p className="text-sm line-clamp-3 mb-4">{event.description}</p>
      </div>
      
      <div className="p-4 pt-0 mt-auto flex justify-between items-center">
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
                    <Calendar className="mr-2 h-4 w-4 text-mirage-orange" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-mirage-orange" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-mirage-orange" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-lg">Price: ₹{event.price}</span>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full"
                      onClick={decreaseQuantity}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full"
                      onClick={increaseQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-mirage-orange hover:bg-mirage-orange/90 text-white"
                  onClick={handleAddToCart}
                >
                  Add to Cart - ₹{event.price * quantity}
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        
        <Button 
          className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
          onClick={() => {
            addToCart(event, 1);
            toast({
              title: "Added to cart",
              description: `1 ticket for ${event.title} added to your cart.`,
            });
          }}
        >
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
