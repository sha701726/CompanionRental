import { Shield, MessageCircle, Lock, Heart } from "lucide-react";

export default function TrustSafetySection() {
  const trustPoints = [
    {
      icon: Shield,
      title: "100% Professional",
      description: "All interactions are strictly professional, respectful, and non-romantic.",
      bgColor: "bg-trust/10",
      iconColor: "text-trust"
    },
    {
      icon: MessageCircle,
      title: "Clear Boundaries",
      description: "Expectations and boundaries are discussed upfront for everyone's comfort.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your personal information and conversations remain completely confidential.",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: Heart,
      title: "Genuine Care",
      description: "I genuinely care about making your experience positive and meaningful.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Trust & Safety First</h2>
          <p className="text-xl text-slate-600">Your comfort and safety are my top priorities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className={`${point.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 ${point.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
