import type { Metadata } from "next";
import {
  EnvelopeSimple,
  InstagramLogo,
  Clock,
  ChatCircle,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ZA Cricket for orders, custom bats, and enquiries.",
};

const trustPoints = [
  {
    icon: Clock,
    title: "Response within 24 hours",
    description: "We reply to all enquiries within one business day.",
  },
  {
    icon: ChatCircle,
    title: "Personal support",
    description: "Speak directly with our team about custom orders and sizing.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & reliable",
    description: "Your information is handled with care. We never share your data.",
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        description="Have a question about our products, custom bat orders, or sponsorship? We would love to hear from you."
      />

      <div className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border"
              >
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-brand-subtle text-brand">
                  <point.icon size={22} weight="duotone" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-zinc-900">
                    {point.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-6">
                Reach Out Directly
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:zacricket06@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-surface hover:bg-brand-subtle transition-colors group"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-brand text-white">
                    <EnvelopeSimple size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="font-semibold text-zinc-900 group-hover:text-brand transition-colors">
                      zacricket06@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-surface hover:bg-brand-subtle transition-colors group"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-brand text-white">
                    <InstagramLogo size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Instagram</p>
                    <p className="font-semibold text-zinc-900 group-hover:text-brand transition-colors">
                      @zacricket
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-surface hover:bg-brand-subtle transition-colors group"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-brand text-white">
                    <span className="font-bold text-sm">f</span>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Facebook</p>
                    <p className="font-semibold text-zinc-900 group-hover:text-brand transition-colors">
                      ZA Cricket
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand-subtle border border-brand/10">
                <h3 className="font-semibold text-zinc-900 text-sm">
                  Custom Bat Enquiries
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  For The Signature custom bat, email us with your preferred
                  weight, profile, handle shape, and engraving details. We will
                  confirm specifications and delivery timeline before processing.
                </p>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8 lg:p-10">
              <h2 className="text-xl font-bold text-zinc-900 mb-2">
                Send a Message
              </h2>
              <p className="text-sm text-zinc-500 mb-6">
                Fill in the form and we will get back to you shortly.
              </p>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  >
                    <option>General Enquiry</option>
                    <option>Custom Bat Order</option>
                    <option>Product Question</option>
                    <option>Exchange / Return</option>
                    <option>Sponsorship</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-zinc-900 text-sm resize-none placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
