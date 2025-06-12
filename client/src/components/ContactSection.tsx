import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick questions or instant booking",
      link: "https://wa.me/917017267400",
      buttonText: "Chat on WhatsApp",
      bgColor: "bg-accent/10",
      iconColor: "text-accent",
      buttonColor: "bg-accent hover:bg-accent/90"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed inquiries or formal booking",
      link: "mailto:sha701726@gmail.com",
      buttonText: "Send Email",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
      buttonColor: "bg-primary hover:bg-primary/90"
    },
    {
      icon: MessageCircle,
      title: "LinkedIn",
      description: "Professional networking and connections",
      link: "https://www.linkedin.com/in/nitin-kumar-8890b236a",
      buttonText: "Connect on LinkedIn",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary",
      buttonColor: "bg-secondary hover:bg-secondary/90"
    }
  ];

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect!</h2>
          <p className="text-xl text-slate-600">Multiple ways to get in touch - choose what works best for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${method.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 ${method.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{method.title}</h3>
                <p className="text-slate-600 mb-6">{method.description}</p>
                <Button
                  asChild
                  className={`w-full text-white font-semibold transition-colors ${method.buttonColor}`}
                >
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    {method.buttonText}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 text-slate-600">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-accent" />
              <span>Usually respond within 2 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Available in Delhi NCR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
