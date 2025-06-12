import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">Nitin Kumar</div>
            <div className="hidden md:block ml-2 text-sm text-slate-600">Your Friendly Companion</div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-slate-700 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-slate-700 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("services")} className="text-slate-700 hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection("testimonials")} className="text-slate-700 hover:text-primary transition-colors">Reviews</button>
            <button onClick={() => window.open('/payment', '_blank')} className="text-slate-700 hover:text-primary transition-colors">Payment</button>
            <button onClick={() => scrollToSection("contact")} className="text-slate-700 hover:text-primary transition-colors">Contact</button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left py-2 text-slate-700 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-slate-700 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left py-2 text-slate-700 hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left py-2 text-slate-700 hover:text-primary transition-colors">Reviews</button>
            <button onClick={() => window.open('/payment', '_blank')} className="block w-full text-left py-2 text-slate-700 hover:text-primary transition-colors">Payment</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-slate-700 hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
