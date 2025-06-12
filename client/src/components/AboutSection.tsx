export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600">Get to know the person behind the service</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="" 
              // https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600
              alt="Nitin working on creative projects" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">Hi there! I'm Nitin Kumar 👋</h3>
            
            <p className="text-slate-700 leading-relaxed">
              I'm a BCA student and Python developer from Noida with a passion for meaningful human connections. 
              What started as helping friends with tech problems and creative brainstorming evolved into something bigger - 
              the realization that sometimes people just need someone to talk to, share ideas with, or simply hang out.
            </p>
            
            <p className="text-slate-700 leading-relaxed">
              Whether you're looking for deep conversations about life and goals, need someone to bounce creative ideas off, 
              want casual tech guidance, or just need a friendly companion for coffee - I'm genuinely excited to be that person for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-2">🎯 What I Do</h4>
                <p className="text-sm text-slate-600">Python Developer, Tech Enthusiast, Creative Problem Solver</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-2">🌟 My Mission</h4>
                <p className="text-sm text-slate-600">Creating meaningful connections and brightening your day</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-2">🗣️ Languages</h4>
                <p className="text-sm text-slate-600">Hindi (Native), English (Advanced)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-2">📍 Location</h4>
                <p className="text-sm text-slate-600">Noida, UP (Online & In-Person Available)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
