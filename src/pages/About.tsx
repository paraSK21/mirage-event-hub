import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Clock, Info, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const About = () => {
  const { toast } = useToast();

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Download",
      description: "The event brochure will be available for download soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-20 pb-12 bg-hero-pattern bg-cover bg-center relative">
          <div className="absolute inset-0 bg-mirage-purple/70 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-ahsing text-white mb-4 text-center">About MIRAGE</h1>
            <p className="text-xl font-sunborn text-mirage-yellow text-center max-w-3xl mx-auto">
              Where Culture Comes Alive
            </p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-ahsing text-mirage-purple mb-6">Welcome to MIRAGE</h2>
                <p className="mb-4">
                  Since 2012, Mirage has been more than just a cultural fest for Bharati Vidyapeeth Medical College—it's been a celebration of imagination, talent, and togetherness. Born from a desire to offer students a break from the rigors of medical academia, Mirage has grown into a pulsating hub of creativity, expression, and intercollegiate camaraderie.
                </p>
                <p className="mb-4">
                  What sets Mirage apart is not just the scale of the events, but the heart that drives it. Every year, our students pour in relentless effort, infusing the fest with new ideas, fresh energy, and an unwavering commitment to excellence.
                </p>
                <p className="mb-6">
                  Backed by the wholehearted support of faculty and administration, Mirage has become a signature event that reflects the vibrant spirit of our college community.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-mirage-orange hover:bg-mirage-orange/90 text-white"
                    asChild
                  >
                    <Link to="/events">Explore Events</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-mirage-purple text-mirage-purple hover:bg-mirage-purple hover:text-white"
                    onClick={handleDownloadBrochure}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-mirage-blue/20 rounded-lg p-6 relative z-10">
                  <img 
                    src="/lovable-uploads/cd615528-b697-4587-9c92-4d3d751dd759.png" 
                    alt="Mirage Event Poster" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-mirage-yellow rounded-full opacity-50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-mirage-orange rounded-full opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Event Details */}
        <section className="py-16 bg-mirage-purple/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-mirage-purple mb-12">Event Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="mirage-card p-8 border-mirage-orange bg-white">
                <div className="w-16 h-16 rounded-full bg-mirage-orange flex items-center justify-center mb-6 mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-sunborn text-xl mb-4 text-center">Dates</h3>
                <p className="text-center">
                  <span className="font-bold block mb-2">Coming Soon</span>
                  Three days of non-stop celebrations, performances, and activities
                </p>
              </div>
              
              <div className="mirage-card p-8 border-mirage-blue bg-white">
                <div className="w-16 h-16 rounded-full bg-mirage-blue flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-sunborn text-xl mb-4 text-center">Venue</h3>
                <p className="text-center">
                  <span className="font-bold block mb-2">Bharati Vidyapeeth Medical College</span>
                  Multiple locations across campus including auditoriums, outdoor spaces, and studios
                </p>
              </div>
              
              <div className="mirage-card p-8 border-mirage-yellow bg-white">
                <div className="w-16 h-16 rounded-full bg-mirage-yellow flex items-center justify-center mb-6 mx-auto">
                  <Info className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-sunborn text-xl mb-4 text-center">Participation</h3>
                <p className="text-center">
                  <span className="font-bold block mb-2">Open to All</span>
                  Students from all colleges are welcome to participate in this intercollegiate festival
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Makes Mirage Special */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-mirage-purple mb-12">What Makes Mirage Special</h2>
            
            <div className="bg-mirage-purple/5 rounded-xl p-8 shadow-lg">
              <p className="mb-6 text-lg">
                Year after year, Mirage has pushed the boundaries of innovation and inclusivity. Each edition is a testament to our students' passion, planning, and performance. Mirage has something for everyone:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="p-4 rounded-lg bg-white border border-mirage-purple/30">
                  <h3 className="font-sunborn text-lg mb-2 text-mirage-yellow">Dance Competitions</h3>
                  <p>High-octane dance battles that light up the stage and energize the crowd</p>
                </div>
                
                <div className="p-4 rounded-lg bg-white border border-mirage-purple/30">
                  <h3 className="font-sunborn text-lg mb-2 text-mirage-yellow">Musical Performances</h3>
                  <p>Soul-stirring musical performances that move the crowd and create lasting memories</p>
                </div>
                
                <div className="p-4 rounded-lg bg-white border border-mirage-purple/30">
                  <h3 className="font-sunborn text-lg mb-2 text-mirage-yellow">Fashion Shows</h3>
                  <p>Dazzling fashion shows that showcase elegance, creativity, and style</p>
                </div>
                
                <div className="p-4 rounded-lg bg-white border border-mirage-purple/30">
                  <h3 className="font-sunborn text-lg mb-2 text-mirage-yellow">Debates & Quizzes</h3>
                  <p>Intellectually stimulating debates and quizzes that challenge the sharpest minds</p>
                </div>
                
                <div className="p-4 rounded-lg bg-white border border-mirage-purple/30">
                  <h3 className="font-sunborn text-lg mb-2 text-mirage-yellow">Photography Contests</h3>
                  <p>Creative photography competitions that capture moments and perspectives</p>
                </div>
                
                <div className="p-4 rounded-lg bg-white border border-mirage-purple/30">
                  <h3 className="font-sunborn text-lg mb-2 text-mirage-yellow">Modern Culture</h3>
                  <p>Gaming tournaments, meme battles, open mics, and more for every form of talent</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Video Section */}
        <section className="py-16 bg-mirage-purple">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-white mb-12">The MIRAGE Experience</h2>
            
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-2xl">
              <div className="w-full h-0 pb-[56.25%] relative bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="mb-4 text-mirage-yellow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-sunborn text-xl mb-4">Event video will be available soon</p>
                    <p className="text-gray-300">Check back closer to the event date for our promotional video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Event History */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-ahsing text-center text-mirage-purple mb-12">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-full bg-mirage-orange/30"></div>
                
                <div className="relative pl-8 md:ml-[50%] mb-12">
                  <div className="absolute top-5 -left-4 md:-left-4 w-8 h-8 rounded-full bg-mirage-orange flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-orange bg-white">
                    <h3 className="font-sunborn text-xl mb-2">The Beginning</h3>
                    <p className="text-gray-600 mb-2">2012</p>
                    <p>Mirage was born from a desire to offer students a break from the rigors of medical academia, starting as a small celebration of creativity.</p>
                  </div>
                </div>
                
                <div className="relative pr-8 md:mr-[50%] md:text-right mb-12">
                  <div className="absolute top-5 -right-4 md:-right-4 w-8 h-8 rounded-full bg-mirage-purple flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-purple bg-white">
                    <h3 className="font-sunborn text-xl mb-2">Growing Popularity</h3>
                    <p className="text-gray-600 mb-2">2015-2018</p>
                    <p>Mirage expanded to include more events and began attracting participants from across the campus, becoming a signature event.</p>
                  </div>
                </div>
                
                <div className="relative pl-8 md:ml-[50%] mb-12">
                  <div className="absolute top-5 -left-4 md:-left-4 w-8 h-8 rounded-full bg-mirage-blue flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-blue bg-white">
                    <h3 className="font-sunborn text-xl mb-2">Intercollegiate Expansion</h3>
                    <p className="text-gray-600 mb-2">2019-2021</p>
                    <p>The festival gained regional recognition and expanded to welcome students from other colleges, becoming a true intercollegiate celebration.</p>
                  </div>
                </div>
                
                <div className="relative pr-8 md:mr-[50%] md:text-right mb-12">
                  <div className="absolute top-5 -right-4 md:-right-4 w-8 h-8 rounded-full bg-mirage-yellow flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-yellow bg-white">
                    <h3 className="font-sunborn text-xl mb-2">Full Scale Festival</h3>
                    <p className="text-gray-600 mb-2">2022-2023</p>
                    <p>Mirage evolved into a full-scale cultural festival with a diverse array of events spanning multiple days and attracting participants from across the region.</p>
                  </div>
                </div>
                
                <div className="relative pl-8 md:ml-[50%]">
                  <div className="absolute top-5 -left-4 md:-left-4 w-8 h-8 rounded-full bg-mirage-orange flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="mirage-card p-6 border-mirage-orange bg-white">
                    <h3 className="font-sunborn text-xl mb-2">MIRAGE 2025</h3>
                    <p className="text-gray-600 mb-2">Coming Soon</p>
                    <p>With renewed energy and an expanded vision, Mirage 2025 promises to be the most ambitious yet with a stellar lineup of events, breathtaking performances, and exciting new additions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-mirage-purple to-mirage-blue text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-ahsing mb-6">Join Us for MIRAGE 2025</h2>
            <p className="text-xl font-sunborn mb-10 max-w-3xl mx-auto">Be part of this extraordinary journey where talent meets opportunity, and memories are etched in vibrant hues. Let's create magic. Let's create Mirage.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-mirage-orange hover:bg-mirage-orange/90 text-white font-sunborn py-6 px-8 text-lg"
                asChild
              >
                <Link to="/events">Register for Events</Link>
              </Button>
              <Button 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-sunborn py-6 px-8 text-lg"
                asChild
              >
                <Link to="/schedule">View Event Schedule</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;