import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Need a Friend for a Day? 
              <span className="text-primary"> I've Got You!</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Hi, I'm Nitin! Whether you need meaningful conversations, creative brainstorming, 
              tech guidance, or just someone to hang out with - I'm here to make your day better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToBooking}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book Now - Let's Hang Out!
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg transition-all"
              >
                See What I Offer
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-accent" />
                <span>Safe & Professional</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-accent" />
                <span>Multiple Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-accent" />
                <span>Tech Savvy</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="" 
                // https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600
                alt="Nitin Kumar - Your friendly companion for hire" 
                className="rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-white" 
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Available Now! 🎉
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
