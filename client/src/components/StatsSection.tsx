export default function StatsSection() {
  const stats = [
    { value: "50+", label: "Happy Hangouts" },
    { value: "2", label: "Languages (Hindi, English)" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "2h", label: "Response Time" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
