import { ShieldCheck, Truck, CreditCard, Medal } from "@phosphor-icons/react/dist/ssr";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Pro-grade standards on every product.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    description: "Shipping from S$4.99.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description: "Safe, simple payments.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Medal,
    title: "Athlete Tested",
    description: "Developed with pro players.",
    color: "bg-amber-100 text-amber-700",
  },
];

export function TrustBar() {
  return (
    <section className="py-6 sm:py-8 bg-brand-gradient-soft border-y border-border/60">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-sm"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}
              >
                <item.icon size={22} weight="duotone" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-zinc-900">{item.title}</h3>
                <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
