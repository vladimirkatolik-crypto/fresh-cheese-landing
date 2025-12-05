import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#products", label: "Ассортимент" },
  { href: "#about", label: "О нас" },
  { href: "#clients", label: "Клиенты" },
  { href: "#contacts", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-foreground font-display text-xl font-bold">
                it
              </div>
              <div>
                <p className="font-display text-lg font-semibold">
                  Итальянские традиции
                </p>
                <p className="text-sm text-background/60">
                  Сыроварня в центре Москвы
                </p>
              </div>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed">
              Производим итальянские сыры по традиционным рецептам из натурального молока. 
              Поставки для ресторанов, магазинов и оптовых покупателей.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79032017276"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +7 903 201-72-76
                </a>
              </li>
              <li>
                <a
                  href="mailto:zakaz@itradition.ru"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  zakaz@itradition.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>г. Москва</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Итальянские традиции. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-background/50 hover:text-background transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
