
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { SCHEDULE, EVENTS } from "@/lib/data";
import { Clock, MapPin, Calendar } from "lucide-react";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("day1");
  
  const getEventById = (id: number) => {
    return EVENTS.find(event => event.id === id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-20 pb-12 bg-hero-pattern bg-cover bg-center relative">
          <div className="absolute inset-0 bg-mirage-purple/70 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-ahsing text-white mb-4 text-center">Event Schedule</h1>
            <p className="text-xl font-sunborn text-mirage-yellow text-center max-w-3xl mx-auto">
              Plan your MIRAGE experience with our comprehensive event schedule
            </p>
          </div>
        </section>
        
        {/* Schedule Tabs */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="day1" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-mirage-purple/10">
                  <TabsTrigger 
                    value="day1" 
                    className={`${activeTab === "day1" ? "bg-mirage-orange text-white" : ""} data-[state=active]:bg-mirage-orange data-[state=active]:text-white`}
                  >
                    Day 1 (May 6)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="day2"
                    className={`${activeTab === "day2" ? "bg-mirage-orange text-white" : ""} data-[state=active]:bg-mirage-orange data-[state=active]:text-white`}
                  >
                    Day 2 (May 7)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="day3"
                    className={`${activeTab === "day3" ? "bg-mirage-orange text-white" : ""} data-[state=active]:bg-mirage-orange data-[state=active]:text-white`}
                  >
                    Day 3 (May 8)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="allDays"
                    className={`${activeTab === "allDays" ? "bg-mirage-orange text-white" : ""} data-[state=active]:bg-mirage-orange data-[state=active]:text-white`}
                  >
                    All Days
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="day1" className="mt-0">
                <ScheduleDay dayData={SCHEDULE[0]} />
              </TabsContent>
              
              <TabsContent value="day2" className="mt-0">
                <ScheduleDay dayData={SCHEDULE[1]} />
              </TabsContent>
              
              <TabsContent value="day3" className="mt-0">
                <ScheduleDay dayData={SCHEDULE[2]} />
              </TabsContent>
              
              <TabsContent value="allDays" className="mt-0">
                <ScheduleDay dayData={SCHEDULE[3]} />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Download and Share */}
        <section className="py-12 bg-mirage-purple/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-ahsing text-mirage-purple mb-6">Plan Your Visit</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Download the schedule or register for events to make the most of your MIRAGE 2023 experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
                asChild
              >
                <Link to="/events">Register for Events</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-mirage-purple text-mirage-purple hover:bg-mirage-purple hover:text-white"
              >
                Download Schedule
              </Button>
            </div>
          </div>
        </section>
        
        {/* Interactive Schedule Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-mirage-purple mb-12">Venue Map</h2>
            
            <div className="mirage-card p-6 border-mirage-blue overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-mirage-blue/10 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mb-4 text-mirage-blue">
                    <MapPin className="h-16 w-16 mx-auto" />
                  </div>
                  <p className="font-sunborn text-xl mb-4">Interactive venue map coming soon</p>
                  <p className="text-gray-600">Check back closer to the event date for a detailed map of all venues</p>
                </div>
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

const ScheduleDay = ({ dayData }) => {
  return (
    <div>
      <div className="flex items-center justify-center mb-8">
        <div className="bg-mirage-purple text-white px-6 py-3 rounded-full">
          <div className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-mirage-yellow" />
            <span className="font-sunborn text-lg">{dayData.day} - {dayData.date}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {dayData.events.map((event) => (
          <div key={event.id} className="mirage-card p-4 border-mirage-purple hover:border-mirage-orange transition-colors">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-mirage-orange/10 px-4 py-2 rounded-md min-w-[150px] flex items-center">
                <Clock className="mr-2 h-5 w-5 text-mirage-orange" />
                <span className="font-medium">{event.time}</span>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-ahsing text-xl text-mirage-purple">{event.title}</h3>
                <div className="flex items-center mt-1">
                  <MapPin className="mr-1 h-4 w-4 text-mirage-orange" />
                  <span className="text-sm">{event.venue}</span>
                </div>
              </div>
              
              <Link 
                to={`/events`} 
                className="bg-mirage-purple hover:bg-mirage-purple/90 text-white font-medium py-2 px-4 rounded"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
