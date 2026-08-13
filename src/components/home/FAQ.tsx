import Link from "next/link";
import {
  Question,
  Truck,
  ArrowsLeftRight,
  Wrench,
  Ruler,
} from "@phosphor-icons/react/dist/ssr";

const faqs = [
  {
    icon: Wrench,
    question: "How long does a custom Signature bat take?",
    answer:
      "Custom bats need an extra 1–10 business days before dispatch. Weight, grains, handle, grip, profile, and engraving are confirmed first.",
  },
  {
    icon: Truck,
    question: "Where do you ship?",
    answer:
      "Worldwide — including Singapore, Bahrain, Oman, and beyond. Delivery typically takes 1–14 business days after dispatch.",
  },
  {
    icon: ArrowsLeftRight,
    question: "Can I return or exchange a product?",
    answer:
      "No returns. Exchanges only for wrong item, transit damage, or manufacturing defect — within 5 days, with a mandatory unboxing video.",
  },
  {
    icon: Question,
    question: "What products do you sell?",
    answer:
      "Signature, Eagle, and Monarch bats; Players Edition pads; Ghost & Players gloves; wicket-keeping gear; thigh pads; and custom duffel bags.",
  },
  {
    icon: Ruler,
    question: "How do I choose the right bat weight?",
    answer:
      "Juniors 2.7–2.8 lbs, club 2.9–2.10 lbs, power 2.11+. See Tips & Toolkit or contact us for personalised advice.",
  },
  {
    icon: Question,
    question: "What delivery charges apply?",
    answer:
      "Under S$75: S$4.99. S$75 and above: S$9.99. Some international destinations may differ at checkout.",
  },
  {
    icon: Wrench,
    question: "Do new bats need knocking in?",
    answer:
      "Yes. Knock in and oil English willow before match use — or book a Basic, Performance, or Restore bundle.",
  },
];

export function FAQ() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-subtle text-brand text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
            Got questions?
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            We&apos;ve got answers
          </h2>
          <p className="mt-1.5 sm:mt-3 text-xs sm:text-base text-zinc-600">
            Quick answers before you order.{" "}
            <Link href="/contact" className="text-brand font-medium hover:underline">
              Contact us
            </Link>
          </p>
        </div>

        <div className="space-y-1.5 sm:space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface rounded-lg sm:rounded-2xl border border-border overflow-hidden hover:border-brand/20 transition-colors"
            >
              <summary className="flex items-center gap-2 sm:gap-4 cursor-pointer px-3 sm:px-6 py-2.5 sm:py-5 font-medium text-[13px] sm:text-base text-zinc-900 hover:bg-brand-subtle/30 transition-colors list-none">
                <div className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-subtle text-brand">
                  <faq.icon size={18} weight="duotone" />
                </div>
                <span className="flex-1 text-left leading-snug">
                  {faq.question}
                </span>
                <span className="text-brand text-base sm:text-xl leading-none group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-3 sm:px-6 pb-3 sm:pb-5 sm:pl-[4.25rem] text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
