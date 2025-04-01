
import { Event, Schedule } from "./types";

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Mariachi Magic",
    description: "Experience authentic Mexican music with our talented Mariachi band. Learn about the history and cultural significance of Mariachi music in Mexico.",
    price: 150,
    date: "May 6th, 2023",
    time: "10:00 AM - 12:00 PM",
    venue: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8a?q=80&w=1974&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 2,
    title: "Salsa Dance Workshop",
    description: "Learn the basics of Salsa dancing with professional instructors. No prior experience needed!",
    price: 200,
    date: "May 6th, 2023",
    time: "1:00 PM - 3:00 PM",
    venue: "Dance Studio",
    image: "https://images.unsplash.com/photo-1545959570-a94084071b5d?q=80&w=1776&auto=format&fit=crop",
    category: "workshop"
  },
  {
    id: 3,
    title: "Mexican Cuisine Masterclass",
    description: "Learn to cook authentic Mexican dishes with our expert chefs. Take home recipes and cooking techniques.",
    price: 300,
    date: "May 6th, 2023",
    time: "4:00 PM - 6:00 PM",
    venue: "Culinary Lab",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1780&auto=format&fit=crop",
    category: "workshop"
  },
  {
    id: 4,
    title: "Lucha Libre Exhibition",
    description: "Watch professional Mexican wrestlers showcase their skills in this exciting exhibition match.",
    price: 250,
    date: "May 6th, 2023",
    time: "7:00 PM - 9:00 PM",
    venue: "Sports Complex",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1981&auto=format&fit=crop",
    category: "sports"
  },
  {
    id: 5,
    title: "Dia de los Muertos Art Workshop",
    description: "Learn about the Day of the Dead tradition and create your own sugar skull art piece.",
    price: 180,
    date: "May 7th, 2023",
    time: "10:00 AM - 12:00 PM",
    venue: "Art Studio",
    image: "https://images.unsplash.com/photo-1572885935436-67f32cb341e5?q=80&w=1974&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 6,
    title: "Piñata Making Competition",
    description: "Showcase your creativity by designing and making your own piñata. Prizes for the best designs!",
    price: 150,
    date: "May 7th, 2023",
    time: "1:00 PM - 3:00 PM",
    venue: "Craft Center",
    image: "https://images.unsplash.com/photo-1628434285426-46aed0a3d395?q=80&w=1974&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 7,
    title: "Tequila Tasting Experience",
    description: "Sample different varieties of premium tequila and learn about the production process. Must be 21+.",
    price: 350,
    date: "May 7th, 2023",
    time: "4:00 PM - 6:00 PM",
    venue: "Tasting Room",
    image: "https://images.unsplash.com/photo-1514362453360-8f2f743a530e?q=80&w=1776&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 8,
    title: "Mexican Cinema Night",
    description: "Watch acclaimed Mexican films and participate in discussions with film critics and experts.",
    price: 120,
    date: "May 7th, 2023",
    time: "7:00 PM - 10:00 PM",
    venue: "Screening Room",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1770&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 9,
    title: "Mexican Revolution History Talk",
    description: "Learn about the Mexican Revolution from historians and experts in Mexican history.",
    price: 100,
    date: "May 8th, 2023",
    time: "10:00 AM - 12:00 PM",
    venue: "Lecture Hall",
    image: "https://images.unsplash.com/photo-1605461867313-e2c1b15b9887?q=80&w=1770&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 10,
    title: "Mariachi Band Competition",
    description: "Watch different Mariachi bands compete for the title of Mirage Mariachi Champion.",
    price: 200,
    date: "May 8th, 2023",
    time: "1:00 PM - 4:00 PM",
    venue: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1581873372796-635b67ca2008?q=80&w=1770&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 11,
    title: "Aztec Dance Performance",
    description: "Witness traditional Aztec dances performed by professional dancers in full ceremonial attire.",
    price: 180,
    date: "May 8th, 2023",
    time: "5:00 PM - 6:30 PM",
    venue: "Outdoor Amphitheater",
    image: "https://images.unsplash.com/photo-1543363136-3fdb62e11be5?q=80&w=1770&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 12,
    title: "Mexican Street Food Festival",
    description: "Sample a variety of authentic Mexican street foods from different regions of Mexico.",
    price: 250,
    date: "May 8th, 2023",
    time: "7:00 PM - 10:00 PM",
    venue: "Food Court",
    image: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?q=80&w=1770&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 13,
    title: "Mexican Folk Art Exhibition",
    description: "Explore a curated exhibition of Mexican folk art, from alebrijes to textiles.",
    price: 120,
    date: "May 6th-8th, 2023",
    time: "All Day",
    venue: "Art Gallery",
    image: "https://images.unsplash.com/photo-1547493832-8361a2867b17?q=80&w=1776&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 14,
    title: "Frida Kahlo Tribute Art Workshop",
    description: "Create artwork inspired by the legendary Mexican artist Frida Kahlo and learn about her life and work.",
    price: 180,
    date: "May 7th, 2023",
    time: "10:00 AM - 1:00 PM",
    venue: "Art Studio",
    image: "https://images.unsplash.com/photo-1641893843833-a9b97b3406c6?q=80&w=1771&auto=format&fit=crop",
    category: "workshop"
  },
  {
    id: 15,
    title: "Soccer Tournament: Mexico vs. The World",
    description: "Participate in or watch an exciting soccer tournament inspired by Mexico's passion for the sport.",
    price: 150,
    date: "May 6th-7th, 2023",
    time: "Various Times",
    venue: "Sports Field",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1936&auto=format&fit=crop",
    category: "sports"
  },
  {
    id: 16,
    title: "Mexican Spanish Language Workshop",
    description: "Learn the basics of Mexican Spanish, including slang and colloquialisms unique to Mexico.",
    price: 120,
    date: "May 8th, 2023",
    time: "2:00 PM - 4:00 PM",
    venue: "Language Lab",
    image: "https://images.unsplash.com/photo-1616198814651-e71f960c3180?q=80&w=1974&auto=format&fit=crop",
    category: "workshop"
  },
  {
    id: 17,
    title: "Traditional Mexican Textile Workshop",
    description: "Learn about and create traditional Mexican textile art using authentic techniques.",
    price: 200,
    date: "May 7th, 2023",
    time: "11:00 AM - 2:00 PM",
    venue: "Craft Center",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1778&auto=format&fit=crop",
    category: "workshop"
  },
  {
    id: 18,
    title: "Mexican Poetry Reading",
    description: "Listen to readings of famous Mexican poets and participate in a poetry workshop.",
    price: 100,
    date: "May 8th, 2023",
    time: "3:00 PM - 5:00 PM",
    venue: "Library",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=1770&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 19,
    title: "Mexican Photography Exhibition",
    description: "View a collection of photographs showcasing Mexico's landscapes, people, and culture.",
    price: 120,
    date: "May 6th-8th, 2023",
    time: "All Day",
    venue: "Photography Gallery",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1770&auto=format&fit=crop",
    category: "cultural"
  },
  {
    id: 20,
    title: "Closing Fiesta",
    description: "Celebrate the end of Mirage with a grand fiesta featuring live music, dancing, and traditional Mexican entertainment.",
    price: 300,
    date: "May 8th, 2023",
    time: "8:00 PM - 12:00 AM",
    venue: "Main Plaza",
    image: "https://images.unsplash.com/photo-1573875133988-0c1f3cf4a2d7?q=80&w=1770&auto=format&fit=crop",
    category: "cultural"
  }
];

export const SCHEDULE: Schedule[] = [
  {
    day: "Day 1",
    date: "May 6th, 2023",
    events: [
      {
        id: 1,
        time: "10:00 AM - 12:00 PM",
        title: "Mariachi Magic",
        venue: "Main Auditorium"
      },
      {
        id: 2,
        time: "1:00 PM - 3:00 PM",
        title: "Salsa Dance Workshop",
        venue: "Dance Studio"
      },
      {
        id: 3,
        time: "4:00 PM - 6:00 PM",
        title: "Mexican Cuisine Masterclass",
        venue: "Culinary Lab"
      },
      {
        id: 4,
        time: "7:00 PM - 9:00 PM",
        title: "Lucha Libre Exhibition",
        venue: "Sports Complex"
      }
    ]
  },
  {
    day: "Day 2",
    date: "May 7th, 2023",
    events: [
      {
        id: 5,
        time: "10:00 AM - 12:00 PM",
        title: "Dia de los Muertos Art Workshop",
        venue: "Art Studio"
      },
      {
        id: 14,
        time: "10:00 AM - 1:00 PM",
        title: "Frida Kahlo Tribute Art Workshop",
        venue: "Art Studio"
      },
      {
        id: 17,
        time: "11:00 AM - 2:00 PM",
        title: "Traditional Mexican Textile Workshop",
        venue: "Craft Center"
      },
      {
        id: 6,
        time: "1:00 PM - 3:00 PM",
        title: "Piñata Making Competition",
        venue: "Craft Center"
      },
      {
        id: 7,
        time: "4:00 PM - 6:00 PM",
        title: "Tequila Tasting Experience",
        venue: "Tasting Room"
      },
      {
        id: 8,
        time: "7:00 PM - 10:00 PM",
        title: "Mexican Cinema Night",
        venue: "Screening Room"
      }
    ]
  },
  {
    day: "Day 3",
    date: "May 8th, 2023",
    events: [
      {
        id: 9,
        time: "10:00 AM - 12:00 PM",
        title: "Mexican Revolution History Talk",
        venue: "Lecture Hall"
      },
      {
        id: 10,
        time: "1:00 PM - 4:00 PM",
        title: "Mariachi Band Competition",
        venue: "Main Auditorium"
      },
      {
        id: 16,
        time: "2:00 PM - 4:00 PM",
        title: "Mexican Spanish Language Workshop",
        venue: "Language Lab"
      },
      {
        id: 18,
        time: "3:00 PM - 5:00 PM",
        title: "Mexican Poetry Reading",
        venue: "Library"
      },
      {
        id: 11,
        time: "5:00 PM - 6:30 PM",
        title: "Aztec Dance Performance",
        venue: "Outdoor Amphitheater"
      },
      {
        id: 12,
        time: "7:00 PM - 10:00 PM",
        title: "Mexican Street Food Festival",
        venue: "Food Court"
      },
      {
        id: 20,
        time: "8:00 PM - 12:00 AM",
        title: "Closing Fiesta",
        venue: "Main Plaza"
      }
    ]
  },
  {
    day: "All Days",
    date: "May 6th-8th, 2023",
    events: [
      {
        id: 13,
        time: "All Day",
        title: "Mexican Folk Art Exhibition",
        venue: "Art Gallery"
      },
      {
        id: 19,
        time: "All Day",
        title: "Mexican Photography Exhibition",
        venue: "Photography Gallery"
      },
      {
        id: 15,
        time: "Various Times",
        title: "Soccer Tournament: Mexico vs. The World",
        venue: "Sports Field"
      }
    ]
  }
];

// Cart storage functions
export const getCartItems = (): CartItem[] => {
  const cartItems = localStorage.getItem('mirage-cart');
  return cartItems ? JSON.parse(cartItems) : [];
};

export const addToCart = (event: Event, quantity: number = 1) => {
  const cartItems = getCartItems();
  const existingItem = cartItems.find(item => item.event.id === event.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ event, quantity });
  }

  localStorage.setItem('mirage-cart', JSON.stringify(cartItems));
  return cartItems;
};

export const removeFromCart = (eventId: number) => {
  const cartItems = getCartItems();
  const updatedCart = cartItems.filter(item => item.event.id !== eventId);
  localStorage.setItem('mirage-cart', JSON.stringify(updatedCart));
  return updatedCart;
};

export const updateCartItemQuantity = (eventId: number, quantity: number) => {
  const cartItems = getCartItems();
  const item = cartItems.find(item => item.event.id === eventId);
  
  if (item) {
    item.quantity = quantity;
    if (quantity <= 0) {
      return removeFromCart(eventId);
    }
  }
  
  localStorage.setItem('mirage-cart', JSON.stringify(cartItems));
  return cartItems;
};

export const clearCart = () => {
  localStorage.removeItem('mirage-cart');
  return [];
};

export const updateParticipantInfo = (eventId: number, info: {
  participantName?: string;
  participantEmail?: string;
  participantPhone?: string;
  participantCollege?: string;
}) => {
  const cartItems = getCartItems();
  const item = cartItems.find(item => item.event.id === eventId);
  
  if (item) {
    item.participantName = info.participantName || item.participantName;
    item.participantEmail = info.participantEmail || item.participantEmail;
    item.participantPhone = info.participantPhone || item.participantPhone;
    item.participantCollege = info.participantCollege || item.participantCollege;
  }
  
  localStorage.setItem('mirage-cart', JSON.stringify(cartItems));
  return cartItems;
};
