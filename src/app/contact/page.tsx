import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  WhatsappLogo,
  Clock,
  ChatCircle,
  Cricket,
} from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ZA Cricket for orders, custom bats, and enquiries.",
};

const channels = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: EnvelopeSimple,
    hint: "Best for custom bats & orders",
  },
  {
    label: "WhatsApp",
    value: CONTACT_PHONE_DISPLAY,
    href: WHATSAPP_URL,
    icon: WhatsappLogo,
    hint: "Fast replies for sizing & orders",
    external: true,
  },
  {
    label: "Phone",
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_TEL}`,
    icon: Phone,
    hint: "Call the Singapore team",
  },
  {
    label: "Instagram",
    value: "@_zacricket",
    href: "https://instagram.com/_zacricket",
    icon: InstagramLogo,
    hint: "DMs for quick questions",
    external: true,
  },
];

const promises = [
  {
    icon: Clock,
    title: "Reply within 24 hours",
    description: "We respond on business days — usually much sooner.",
  },
  {
    icon: ChatCircle,
    title: "Talk to the team",
    description: "Real advice on sizing, custom specs, and match prep.",
  },
  {
    icon: Cricket,
    title: "Built for players",
    description: "From club nets to international pathways — we speak cricket.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-[#3a234d] to-zinc-950" />
        <div className="absolute inset-0 pattern-dots-light opacity-20" />
        <div className="absolute -top-32 right-0 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-brand-glow/15 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-6 xl:col-span-5 relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/90 mb-5">
                Singapore · Direct support
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] text-balance">
                Let&apos;s talk cricket.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-purple-100/80 leading-relaxed max-w-lg text-pretty">
                Orders, custom Signature bats, sizing, or sponsorship — write us
                and we&apos;ll reply with clear next steps.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand font-semibold text-sm hover:bg-violet-100 transition-colors active:scale-[0.98]"
                >
                  <EnvelopeSimple size={18} weight="bold" />
                  Email the team
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors active:scale-[0.98]"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  WhatsApp {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href="#message"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors active:scale-[0.98]"
                >
                  Send a message
                  <ArrowRight size={16} weight="bold" />
                </a>
              </div>
              <p className="mt-8 text-sm text-purple-200/55">
                Usually reply within one business day ·{" "}
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="text-purple-100/80 underline-offset-4 hover:underline hover:text-white transition-colors"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
                {" · "}
                <a
                  href="https://instagram.com/_zacricket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-100/80 underline-offset-4 hover:underline hover:text-white transition-colors"
                >
                  @_zacricket
                </a>
              </p>
            </div>

            {/* Cutout bat — same treatment as homepage hero */}
            <div className="lg:col-span-6 xl:col-span-7 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]">
              <div
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="relative aspect-[3/4] h-full max-h-[min(72vh,520px)] w-auto max-w-[min(100%,380px)]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[90%]">
                    <div className="hero-boundary-ring absolute inset-0 opacity-70" />
                    <div className="hero-boundary-ring absolute inset-[10%] opacity-40" />
                    <div className="hero-product-glow absolute inset-[14%] rounded-full" />
                  </div>
                  <Image
                    src="/images/hero/signature-hero-cut.webp"
                    alt="ZA Signature cricket bat"
                    fill
                    unoptimized
                    priority
                    className="object-contain object-center drop-shadow-[0_36px_60px_rgba(0,0,0,0.55)]"
                    sizes="(max-width: 1024px) 70vw, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promises strip */}
      <section className="border-b border-border bg-brand-subtle/60">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {promises.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="h-11 w-11 shrink-0 flex items-center justify-center rounded-2xl bg-white text-brand shadow-sm border border-brand/10">
                  <item.icon size={22} weight="duotone" />
                </div>
                <div>
                  <h2 className="font-semibold text-zinc-900 text-sm sm:text-base">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600 leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-14 sm:py-16 lg:py-24">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
            {/* Channels */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3">
                  Direct channels
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 text-balance">
                  Reach us the way that suits you
                </h2>
              </div>

              <div className="space-y-3">
                {channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    {...(ch.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-border bg-white hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all active:scale-[0.99]"
                  >
                    <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-2xl bg-brand text-white shrink-0 group-hover:bg-brand-dark transition-colors">
                      <ch.icon size={24} weight="fill" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-zinc-500">
                        {ch.label}
                      </p>
                      <p className="font-semibold text-zinc-900 truncate group-hover:text-brand transition-colors">
                        {ch.value}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">{ch.hint}</p>
                    </div>
                    <ArrowRight
                      size={18}
                      weight="bold"
                      className="text-zinc-300 group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </a>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white p-6 sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/80 via-transparent to-fuchsia-600/20" />
                <div className="absolute inset-0 pattern-dots-light opacity-20" />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                    The Signature
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    Custom bat enquiries
                  </h3>
                  <p className="mt-3 text-sm text-purple-100/85 leading-relaxed text-pretty">
                    Tell us your preferred weight, profile, handle shape, and
                    engraving. We confirm specs and timeline before anything is
                    built.
                  </p>
                  <Link
                    href="/product/the-signature"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-violet-200 transition-colors"
                  >
                    View The Signature
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="message" className="lg:col-span-7 scroll-mt-28">
              <div className="relative rounded-[1.75rem] border border-border bg-surface/80 p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_-40px_rgba(75,46,99,0.35)]">
                <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-2">
                  Message
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 text-balance">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-zinc-600 mb-8 max-w-md text-pretty">
                  Share a few details and we&apos;ll open a draft email to our
                  team — ready for you to send.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
