
export interface Event {
  id: number;
  title: string;
  price: number;
  description?: string;
  image: string;
 
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
