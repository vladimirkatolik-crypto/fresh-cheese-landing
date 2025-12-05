import { Award, Truck, User, Settings } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "12 наград «Лучший сыр России»",
    description:
      "Первые 1,5 года существования сыроварни мы искали подходящее молоко и начали продажи, только когда убедились в его качестве.",
  },
  {
    icon: Truck,
    title: "Поставка от 1 дня",
    description:
      "Мы отладили все процессы работы с документами, Честным знаком и Меркурием так, что от заказа до поставки может пройти меньше суток.",
  },
  {
    icon: User,
    title: "Итальянский сыровар",
    description:
      "Главный сыровар Иван Новелли (итальянец) лично контролирует весь процесс производства от молока до готового сыра.",
  },
  {
    icon: Settings,
    title: "Итальянское оборудование",
    description:
      "Изготавливаем сыры из натурального молока по рецептам Италии, используем оборудование Sfoggiatech и итальянские закваски.",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Почему выбирают нас
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наши преимущества
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы создаём настоящие итальянские сыры, которые ценят лучшие рестораны Москвы
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <advantage.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-tr-3xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
