export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya S.",
      service: "Creative Session",
      rating: 5,
      text: "Nitin made my day so much better! We had an amazing brainstorming session for my startup idea. His tech insights were invaluable and he's genuinely fun to talk to.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Arjun K.",
      service: "In-Person Meetup",
      rating: 5,
      text: "I was feeling lonely after moving to a new city. Nitin was like talking to an old friend. We explored some great cafes in Noida and had wonderful conversations about life.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Sneha M.",
      service: "Tech Help Session",
      rating: 5,
      text: "Needed help with Python for my project. Nitin explained everything so patiently and made learning fun. Plus, we ended up having great conversations about tech and career goals.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Rahul D.",
      service: "Online Hangout",
      rating: 5,
      text: "What a refreshing experience! We had deep conversations about goals and dreams. Nitin is a great listener and offered some really insightful perspectives.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Ananya P.",
      service: "Event Companion",
      rating: 5,
      text: "Booked Nitin as my companion for a tech event. He made the whole experience so much more enjoyable and we networked together. Highly recommend for anyone who needs an event buddy!",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Karan L.",
      service: "Fun Conversation",
      rating: 5,
      text: "Just needed someone to talk to after a rough week. Nitin was so understanding and we had some good laughs discussing movies and random topics. Exactly what I needed!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    }
  ];

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What People Say</h2>
          <p className="text-xl text-slate-600">Real experiences from real hangouts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-secondary text-xl">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} testimonial`} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
