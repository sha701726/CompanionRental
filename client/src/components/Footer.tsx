import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Online Hangouts",
    "In-Person Meetups", 
    "Creative Sessions",
    "Tech Help",
    "Fun Conversations"
  ];

  const quickLinks = [
    { text: "About Me", sectionId: "about" },
    { text: "Testimonials", sectionId: "testimonials" },
    { text: "Book Now", sectionId: "booking" },
    { text: "Contact", sectionId: "contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">Nitin Kumar</div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your friendly companion for meaningful conversations, creative sessions, and genuine connections. 
              Making every interaction count, one hangout at a time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/nitin-kumar-8890b236a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/sha701726" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.sectionId)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="mailto:sha701726@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Nitin Kumar - Friendly Companion Services. All rights reserved. Made with ❤️ for meaningful connections.</p>
        </div>
      </div>
    </footer>
  );
}
