
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { getCartItems, updateParticipantInfo, clearCart } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Calendar, User, Mail, Phone, Building, CheckCircle } from "lucide-react";

const Payment = () => {
  const [cartItems, setCartItems] = useState(getCartItems());
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    upiId: "",
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart");
      toast({
        title: "Empty cart",
        description: "Please add some events to your cart before proceeding to checkout.",
        variant: "destructive",
      });
    }
  }, [cartItems, navigate, toast]);
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.event.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleUpdateParticipantInfo = () => {
    // Check if required participant info is filled
    if (!formData.name || !formData.email || !formData.phone || !formData.college) {
      toast({
        title: "Missing information",
        description: "Please fill in all participant details before proceeding.",
        variant: "destructive",
      });
      return;
    }
    
    // Update participant info for each cart item
    cartItems.forEach((item) => {
      updateParticipantInfo(item.event.id, {
        participantName: formData.name,
        participantEmail: formData.email,
        participantPhone: formData.phone,
        participantCollege: formData.college,
      });
    });
    
    setStep(2);
    
    toast({
      title: "Information saved",
      description: "Your participant details have been saved.",
    });
  };
  
  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
  };
  
  const validateCardInfo = () => {
    // Simple validation for demonstration
    if (paymentMethod === "card") {
      if (
        !formData.cardNumber ||
        formData.cardNumber.length < 16 ||
        !formData.cardExpiry ||
        !formData.cardCvv
      ) {
        return false;
      }
    } else if (paymentMethod === "upi") {
      if (!formData.upiId || !formData.upiId.includes("@")) {
        return false;
      }
    }
    
    return true;
  };
  
  const handleSubmitPayment = () => {
    if (!validateCardInfo()) {
      toast({
        title: "Invalid payment details",
        description: "Please check your payment information and try again.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      clearCart(); // Clear the cart after successful payment
      
      toast({
        title: "Payment successful",
        description: "Your registration is complete. You will receive a confirmation email shortly.",
      });
    }, 2000);
  };
  
  const renderParticipantDetailsStep = () => (
    <div className="mirage-card p-6 border-mirage-purple">
      <h2 className="text-2xl font-ahsing text-mirage-purple mb-6">Participant Details</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="name" className="flex items-center">
            <User className="mr-2 h-4 w-4 text-mirage-orange" />
            Full Name
          </Label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="flex items-center">
            <Mail className="mr-2 h-4 w-4 text-mirage-orange" />
            Email Address
          </Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="flex items-center">
            <Phone className="mr-2 h-4 w-4 text-mirage-orange" />
            Phone Number
          </Label>
          <Input 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleInputChange} 
            required 
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="college" className="flex items-center">
            <Building className="mr-2 h-4 w-4 text-mirage-orange" />
            College/Institution
          </Label>
          <Input 
            id="college" 
            name="college" 
            value={formData.college} 
            onChange={handleInputChange} 
            required 
            className="mt-1"
          />
        </div>
      </div>
      
      <Button 
        className="w-full bg-mirage-orange hover:bg-mirage-orange/90 text-white py-6"
        onClick={handleUpdateParticipantInfo}
      >
        Continue to Payment
      </Button>
    </div>
  );
  
  const renderPaymentDetailsStep = () => (
    <div className="mirage-card p-6 border-mirage-purple">
      <h2 className="text-2xl font-ahsing text-mirage-purple mb-6">Payment Method</h2>
      
      <div className="mb-6">
        <RadioGroup 
          value={paymentMethod} 
          onValueChange={handlePaymentMethodChange}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-md">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center cursor-pointer">
              <CreditCard className="mr-2 h-5 w-5 text-mirage-blue" />
              Credit/Debit Card
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-md">
            <RadioGroupItem value="upi" id="upi" />
            <Label htmlFor="upi" className="flex items-center cursor-pointer">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 mr-2 text-mirage-purple">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" fill="#6C57BC" />
                <path d="M17.977 11.005l-1.577 1.58a.518.518 0 0 0 0 .73l1.58 1.58a.518.518 0 0 0 .73 0l.733-.734a3.632 3.632 0 0 0 0-5.12l-.733-.74a.518.518 0 0 0-.733 0l-1.58 1.58a.518.518 0 0 0 0 .73l1.58 1.58a.518.518 0 0 0 .73 0" fill="#FFFFFF" />
                <path d="M10.55 6.028l1.58 1.58a.518.518 0 0 0 .73 0l1.58-1.58a.518.518 0 0 0 0-.73l-.733-.734a3.632 3.632 0 0 0-5.12 0l-.734.734a.518.518 0 0 0 0 .73l1.58 1.58a.518.518 0 0 0 .73 0l1.58-1.58a.518.518 0 0 0 0-.73" fill="#FFFFFF" />
                <path d="M6.023 12.995l1.577-1.58a.518.518 0 0 0 0-.73l-1.58-1.58a.518.518 0 0 0-.73 0l-.733.734a3.632 3.632 0 0 0 0 5.12l.734.734a.518.518 0 0 0 .73 0l1.58-1.58a.518.518 0 0 0 0-.73l-1.58-1.58a.518.518 0 0 0-.73 0" fill="#FFFFFF" />
                <path d="M13.45 17.974l-1.58-1.58a.518.518 0 0 0-.73 0l-1.58 1.58a.518.518 0 0 0 0 .73l.734.734a3.632 3.632 0 0 0 5.12 0l.733-.734a.518.518 0 0 0 0-.73l-1.58-1.58a.518.518 0 0 0-.73 0l-1.58 1.58a.518.518 0 0 0 0 .73" fill="#FFFFFF" />
              </svg>
              UPI Payment
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      {paymentMethod === "card" && (
        <div className="space-y-4 mb-6">
          <div>
            <Label htmlFor="cardNumber" className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4 text-mirage-orange" />
              Card Number
            </Label>
            <Input 
              id="cardNumber" 
              name="cardNumber" 
              placeholder="1234 5678 9012 3456" 
              value={formData.cardNumber} 
              onChange={handleInputChange} 
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="cardExpiry" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-mirage-orange" />
                Expiry (MM/YY)
              </Label>
              <Input 
                id="cardExpiry" 
                name="cardExpiry" 
                placeholder="MM/YY" 
                value={formData.cardExpiry} 
                onChange={handleInputChange} 
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="cardCvv">CVV</Label>
              <Input 
                id="cardCvv" 
                name="cardCvv" 
                placeholder="123" 
                value={formData.cardCvv} 
                onChange={handleInputChange} 
                className="mt-1"
              />
            </div>
          </div>
        </div>
      )}
      
      {paymentMethod === "upi" && (
        <div className="space-y-4 mb-6">
          <div>
            <Label htmlFor="upiId" className="flex items-center">
              UPI ID
            </Label>
            <Input 
              id="upiId" 
              name="upiId" 
              placeholder="yourname@upi" 
              value={formData.upiId} 
              onChange={handleInputChange} 
              className="mt-1"
            />
          </div>
        </div>
      )}
      
      <div className="flex justify-between mb-6">
        <Button 
          variant="outline" 
          className="border-mirage-purple text-mirage-purple hover:bg-mirage-purple hover:text-white"
          onClick={() => setStep(1)}
        >
          Back
        </Button>
        
        <Button 
          className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
          onClick={handleSubmitPayment}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : `Pay ₹${total.toFixed(2)}`}
        </Button>
      </div>
      
      <div className="text-xs text-gray-500 text-center">
        <p>Your payment information is secure and encrypted.</p>
      </div>
    </div>
  );
  
  const renderConfirmationStep = () => (
    <div className="mirage-card p-6 border-mirage-purple text-center">
      <div className="mb-6 text-green-500">
        <CheckCircle className="h-16 w-16 mx-auto" />
      </div>
      
      <h2 className="text-2xl font-ahsing text-mirage-purple mb-4">Registration Complete!</h2>
      
      <p className="mb-6">
        Thank you for registering for MIRAGE 2023. A confirmation email has been sent to {formData.email} with your registration details.
      </p>
      
      <div className="mb-8 p-4 bg-mirage-yellow/10 rounded-md">
        <h3 className="font-sunborn text-lg mb-2">Registration Details</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Events:</strong> {cartItems.length}</p>
        <p><strong>Total Paid:</strong> ₹{total.toFixed(2)}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
          asChild
        >
          <Link to="/">Return to Home</Link>
        </Button>
        <Button 
          variant="outline" 
          className="border-mirage-purple text-mirage-purple hover:bg-mirage-purple hover:text-white"
        >
          Download Receipt
        </Button>
      </div>
    </div>
  );
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return renderParticipantDetailsStep();
      case 2:
        return renderPaymentDetailsStep();
      case 3:
        return renderConfirmationStep();
      default:
        return renderParticipantDetailsStep();
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-20 pb-12 bg-hero-pattern bg-cover bg-center relative">
          <div className="absolute inset-0 bg-mirage-purple/70 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-ahsing text-white mb-4 text-center">Checkout</h1>
            <p className="text-xl font-sunborn text-mirage-yellow text-center max-w-3xl mx-auto">
              Complete your registration for MIRAGE 2023
            </p>
          </div>
        </section>
        
        {/* Steps Indicator */}
        <section className="py-8 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-mirage-orange text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="text-sm mt-2">Details</span>
              </div>
              
              <div className={`flex-grow h-0.5 ${step >= 2 ? 'bg-mirage-orange' : 'bg-gray-200'}`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-mirage-orange text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="text-sm mt-2">Payment</span>
              </div>
              
              <div className={`flex-grow h-0.5 ${step >= 3 ? 'bg-mirage-orange' : 'bg-gray-200'}`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-mirage-orange text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="text-sm mt-2">Confirmation</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Checkout Content */}
        <section className="py-8 bg-mirage-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Checkout Form */}
              <div className="lg:w-3/5">{renderStepContent()}</div>
              
              {/* Order Summary */}
              {step < 3 && (
                <div className="lg:w-2/5">
                  <div className="mirage-card border-mirage-purple p-6 sticky top-24">
                    <h2 className="text-2xl font-ahsing text-mirage-purple mb-6">Order Summary</h2>
                    
                    <div className="mb-6">
                      {cartItems.map((item) => (
                        <div key={item.event.id} className="flex justify-between items-center py-3 border-b border-gray-200">
                          <div>
                            <h3 className="font-medium">{item.event.title}</h3>
                            <p className="text-sm text-gray-500">{item.event.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹{item.event.price}</p>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
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
                    
                    <div className="text-xs text-gray-500">
                      <p>By completing your purchase, you agree to our Terms of Service and Privacy Policy.</p>
                    </div>
                  </div>
                </div>
              )}
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

export default Payment;
