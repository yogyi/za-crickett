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
      "Custom Signature bats take 7–14 business days. Your weight (grams), grain count, handle shape, and engraving are confirmed by email after ordering.",
  },
  {
    icon: Truck,
    question: "Do you ship across Singapore?",
    answer:
      "Yes. We deliver island-wide across Singapore, Hong Kong, and India. Standard delivery charges apply to every order and are shown in your cart before checkout.",
  },
  {
    icon: ArrowsLeftRight,
    question: "Can I exchange a product if it does not fit?",
    answer:
      "Unused items can be exchanged within 14 days. Custom engraved bats are excluded unless there is a manufacturing defect.",
  },
  {
    icon: Question,
    question: "What is included in bat bundles?",
    answer:
      "Our Basic Bundle covers knocking, oiling, and scuff sheet. Performance adds toe guard and grip. Restore includes full repair and cleaning.",
  },
  {
    icon: Ruler,
    question: "How do I choose the right bat weight?",
    answer:
      "As a rule: juniors (2.7–2.8 lbs), club players (2.9–2.10 lbs), and power hitters (2.11+ lbs). The Signature customiser uses grams (1080–1300g) for precision. Use our bat weight guide on the homepage or contact us for personalised advice.",
  },
  {
    icon: Question,
    question: "What delivery charges apply?",
    answer:
      "Standard delivery fees apply to all orders — there is no free-shipping threshold. Fees are shown in your cart based on your country (Singapore, Hong Kong, or India). See our Shipping Policy for full details.",
  },
  {
    icon: Wrench,
    question: "Do I need a bat prep bundle?",
    answer:
      "New English willow bats should be knocked in before match use. Our Basic Bundle covers knocking, oiling, and scuff sheet — essential for Singapore matting and indoor nets.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            Got questions?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            We&apos;ve got answers
          </h2>
          <p className="mt-3 text-zinc-600">
            Quick answers before you order. Need more help?{" "}
            <Link href="/contact" className="text-brand font-medium hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface rounded-2xl border border-border overflow-hidden hover:border-brand/20 transition-colors"
            >
              <summary className="flex items-center gap-4 cursor-pointer px-6 py-5 font-medium text-zinc-900 hover:bg-brand-subtle/30 transition-colors list-none">
                <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-xl bg-brand-subtle text-brand">
                  <faq.icon size={18} weight="duotone" />
                </div>
                <span className="flex-1">{faq.question}</span>
                <span className="text-brand text-xl leading-none group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pl-[4.25rem] text-sm text-zinc-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
