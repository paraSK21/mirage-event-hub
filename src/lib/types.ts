
export interface Event {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
  time: string;
  venue: string;
  image: string;
  category: 'cultural' | 'technical' | 'sports' | 'workshop' | 'other';
}

export interface CartItem {
  event: Event;
  quantity: number;
  participantName?: string;
  participantEmail?: string;
  participantPhone?: string;
  participantCollege?: string;
}

export interface Schedule {
  day: string;
  date: string;
  events: {
    id: number;
    time: string;
    title: string;
    venue: string;
  }[];
}
