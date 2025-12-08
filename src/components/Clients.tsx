const clients = [
  "Вкусвилл",
  "Перекресток",
  "Азбука Вкуса",
  "Novikov Group",
  "Bocconcino",
  "Валенок",
  "Веранда",
  "Ветерок",
  "Водный",
  "Чайхона №1",
  "Колбасный цех",
  "La Scarpetta",
  "Магадан",
  "Mozza",
  "OM",
  "Петрович",
  "Пинцерия",
  "Pittore",
  "Ривьера",
  "Салюмерия",
  "Santineta Antinori",
  "Страна",
  "Сыроварня",
  "Tigrus",
  "Урюк",
];

export function Clients() {
  return (
    <section id="clients" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Нам доверяют
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наши клиенты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Лучшие рестораны и магазины Москвы выбирают наши сыры
          </p>
        </div>

        {/* Clients Marquee */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* First Row */}
          <div className="flex gap-8 mb-8 animate-marquee">
            {[...clients.slice(0, 11), ...clients.slice(0, 11)].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 px-8 py-4 bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-card transition-shadow"
              >
                <span className="text-foreground font-medium whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>

          {/* Second Row - Reverse */}
          <div className="flex gap-8 animate-marquee-reverse">
            {[...clients.slice(11), ...clients.slice(11)].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 px-8 py-4 bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-card transition-shadow"
              >
                <span className="text-foreground font-medium whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-full">
            <span className="text-3xl">🏆</span>
            <p className="text-foreground font-medium">
              Более 200 партнёров по всей России
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
