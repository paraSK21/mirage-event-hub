
import { useState } from 'react';
import { Calendar, Clock, MapPin, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/lib/types';
import { removeFromCart, updateCartItemQuantity } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

interface CartItemProps {
  item: CartItemType;
  onUpdate: () => void;
}

const CartItem = ({ item, onUpdate }: CartItemProps) => {
  const { event, quantity } = item;
  const { toast } = useToast();

  const handleRemove = () => {
    removeFromCart(event.id);
    onUpdate();
    toast({
      title: "Removed from cart",
      description: `${event.title} has been removed from your cart.`,
    });
  };

  const handleQuantityUpdate = (newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemove();
      return;
    }
    
    updateCartItemQuantity(event.id, newQuantity);
    onUpdate();
  };

  return (
    <div className="mirage-card p-4 mb-4 border-mirage-purple flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/4 h-32 md:h-auto overflow-hidden rounded-md">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-ahsing text-xl text-mirage-purple mb-2">{event.title}</h3>
          <span className="font-bold text-mirage-orange">₹{event.price}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
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
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full border-mirage-purple"
              onClick={() => handleQuantityUpdate(quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full border-mirage-purple"
              onClick={() => handleQuantityUpdate(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-bold">Subtotal: ₹{event.price * quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              onClick={handleRemove}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
