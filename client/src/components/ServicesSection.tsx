import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ServicesSection() {
  const scrollToBooking = (service: string) => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Pre-select the service in the form after a short delay
      setTimeout(() => {
        const serviceSelect = document.querySelector('#service') as HTMLSelectElement;
        if (serviceSelect) {
          serviceSelect.value = service;
        }
      }, 500);
    }
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917017267400?text=${encodedMessage}`, '_blank');
  };

  const services = [
    {
      id: "online",
      icon: "💻",
      title: "Online Hangouts",
      description: "Video calls via Zoom/Google Meet for conversations, brainstorming, or just virtual company.",
      pricing: [
        "1 Hour: ₹299",
        "3 Hours: ₹799",
        "Full Day (6h): ₹1499"
      ],
      buttonText: "Book Online Session"
    },
    {
      id: "in-person",
      icon: "☕",
      title: "In-Person Meetups",
      description: "Coffee dates, walks, event companionship, or exploring the city together in Noida/Delhi NCR.",
      pricing: [
        "2 Hours: ₹599",
        "Half Day (4h): ₹1199",
        "Full Day (8h): ₹2199"
      ],
      buttonText: "Book Meetup"
    },
    {
      id: "creative",
      icon: "🎨",
      title: "Creative Sessions",
      description: "Brainstorming ideas, business planning, creative problem-solving, or content collaboration.",
      pricing: [
        "1.5 Hours: ₹499",
        "3 Hours: ₹899",
        "Full Day Project: ₹1799"
      ],
      buttonText: "Book Creative Session"
    },
    {
      id: "tech",
      icon: "🔧",
      title: "Tech Help & Guidance",
      description: "Casual tech support, coding help, database guidance, or learning Python together.",
      pricing: [
        "1 Hour: ₹399",
        "3 Hours: ₹999",
        "Project Help: ₹1599"
      ],
      buttonText: "Get Tech Help"
    },
    {
      id: "conversation",
      icon: "🎭",
      title: "Fun Conversations",
      description: "Light-hearted chats about movies, life goals, humor, current events, or whatever's on your mind.",
      pricing: [
        "1 Hour: ₹249",
        "3 Hours: ₹699",
        "Extended Chat: ₹1299"
      ],
      buttonText: "Start Chatting"
    },
    {
      id: "custom",
      icon: "✨",
      title: "Custom Experience",
      description: "Have something specific in mind? Let's create a unique experience tailored just for you!",
      pricing: [
        "Completely customizable",
        "Fair pricing based on request",
        "Let's discuss your ideas!"
      ],
      buttonText: "Discuss Custom Plan",
      isCustom: true
    }
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What I Offer</h2>
          <p className="text-xl text-slate-600">Choose the type of hangout that fits your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                service.isCustom 
                  ? "bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-dashed border-primary/30"
                  : "bg-slate-50"
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.pricing.map((price, index) => (
                  <div key={index} className="flex items-center text-sm text-slate-700">
                    <Check className="h-4 w-4 text-accent mr-2" />
                    <span>{price}</span>
                  </div>
                ))}
              </div>
              
              <Button
                onClick={() => {
                  if (service.isCustom) {
                    openWhatsApp("Hi Nitin! I have a custom hangout idea in mind. Can we discuss the details?");
                  } else {
                    scrollToBooking(service.id);
                  }
                }}
                className={`w-full py-3 px-6 font-semibold transition-colors ${
                  service.isCustom
                    ? "bg-secondary hover:bg-secondary/90 text-white"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
              >
                {service.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
