import cheesemakerImage from "@/assets/cheesemaker.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={cheesemakerImage}
                alt="Иван Новелли - главный сыровар"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card rounded-2xl p-6 shadow-elevated max-w-xs border border-border/50">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-foreground font-bold text-lg">
                  12
                </div>
                <div>
                  <p className="font-semibold text-foreground">Наград</p>
                  <p className="text-sm text-muted-foreground">"Лучший сыр России"</p>
                </div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              О сыроварне
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Настоящий вкус{" "}
              <span className="text-primary italic">Италии</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">«Итальянские традиции»</strong> — сыроварня в центре Москвы, где мы создаём аутентичные итальянские сыры по традиционным рецептам.
              </p>
              <p>
                Наш главный сыровар <strong className="text-foreground">Иван Новелли</strong> — настоящий итальянец, который привёз в Россию не только рецепты, но и культуру производства сыра. Он лично контролирует каждый этап — от выбора молока до созревания готового продукта.
              </p>
              <p>
                Мы используем только <strong className="text-foreground">натуральное молоко</strong> от проверенных фермерских хозяйств, <strong className="text-foreground">итальянские закваски</strong> и профессиональное оборудование <strong className="text-foreground">Sfoggiatech</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">8+</p>
                <p className="text-sm text-muted-foreground mt-1">лет опыта</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground mt-1">партнёров</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground mt-1">видов сыра</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
