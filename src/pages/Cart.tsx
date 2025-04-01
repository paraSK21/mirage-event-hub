
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight, ShoppingBag } from "lucide-react";
import { getCartItems, clearCart } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartItems());
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(getCartItems());
  }, [isUpdating]);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.event.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  const handleUpdateCart = () => {
    setIsUpdating(!isUpdating);
  };

  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Empty cart",
        description: "Please add some events to your cart before proceeding to checkout.",
        variant: "destructive",
      });
      return;
    }
    
    navigate("/payment");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-20 pb-12 bg-hero-pattern bg-cover bg-center relative">
          <div className="absolute inset-0 bg-mirage-purple/70 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-ahsing text-white mb-4 text-center">Your Cart</h1>
            <p className="text-xl font-sunborn text-mirage-yellow text-center max-w-3xl mx-auto">
              Review and complete your registration
            </p>
          </div>
        </section>
        
        {/* Cart Content */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {cartItems.length > 0 ? (
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-ahsing text-mirage-purple">Event Registrations ({totalItems})</h2>
                    <Button 
                      variant="outline" 
                      className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                      onClick={handleClearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <CartItem 
                        key={item.event.id} 
                        item={item} 
                        onUpdate={handleUpdateCart} 
                      />
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      className="bg-mirage-blue hover:bg-mirage-blue/90 text-white"
                      asChild
                    >
                      <Link to="/events">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Order Summary */}
                <div className="lg:w-1/3">
                  <div className="mirage-card border-mirage-purple p-6 sticky top-24">
                    <h2 className="text-2xl font-ahsing text-mirage-purple mb-6">Order Summary</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax (5%)</span>
                        <span>₹{tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-mirage-orange hover:bg-mirage-orange/90 text-white py-6"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <div className="mt-4 text-xs text-gray-500 text-center">
                      <p>By proceeding, you agree to the event's terms and conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <ShoppingCart className="mx-auto h-16 w-16 text-mirage-purple/50 mb-4" />
                <h2 className="text-2xl font-ahsing text-mirage-purple mb-4">Your cart is empty</h2>
                <p className="mb-8">Looks like you haven't added any events to your cart yet.</p>
                <Button 
                  className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
                  asChild
                >
                  <Link to="/events">Browse Events</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Help Section */}
        <section className="py-12 bg-mirage-purple/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="mirage-card p-6 border-mirage-orange">
                <h3 className="font-sunborn text-xl mb-4">Need Help?</h3>
                <p className="mb-4">If you have any questions about your registration or the events, feel free to contact us.</p>
                <a href="mailto:mirage2023@example.com" className="text-mirage-orange hover:text-mirage-purple transition-colors">
                  mirage2023@example.com
                </a>
              </div>
              
              <div className="mirage-card p-6 border-mirage-blue">
                <h3 className="font-sunborn text-xl mb-4">Refund Policy</h3>
                <p className="mb-4">Refunds are available up to 48 hours before the event start date. No refunds will be processed after that time.</p>
              </div>
              
              <div className="mirage-card p-6 border-mirage-yellow">
                <h3 className="font-sunborn text-xl mb-4">Group Registration</h3>
                <p className="mb-4">For groups of 10 or more, please contact us directly for special rates and arrangements.</p>
              </div>
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

export default Cart;
