import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { athletes } from "@/data/products";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Sponsored Athletes",
  description:
    "Meet the ZA Cricket sponsored athletes driving our product innovation.",
};

export default function AthletesPage() {
  return (
    <div>
      <PageBanner
        title="ZA Sponsored Athletes"
        description="Our sponsored athletes represent the best of Singapore cricket. They test, refine, and compete with ZA gear at every level."
        image="/images/products/the-eagle/eagle-lifestyle-02.jpg"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-zinc-600 leading-relaxed">
              Every ZA product goes through real-world testing with our
              sponsored athletes. Their feedback shapes our bats, gloves, pads,
              and keeping gear. When you buy ZA, you are buying gear that has
              been proven on Singapore pitches.
            </p>
          </div>

          <div className="space-y-16">
            {athletes.map((athlete, i) => (
              <article
                key={athlete.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-surface ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-brand font-semibold text-sm">
                    ZA Sponsored Athlete
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 mt-2">
                    {athlete.name}
                  </h2>
                  <p className="text-brand font-medium mt-1">{athlete.role}</p>
                  {athlete.bio && (
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                      {athlete.bio}
                    </p>
                  )}
                  {athlete.achievements && (
                    <ul className="mt-6 space-y-2">
                      {athlete.achievements.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-zinc-700"
                        >
                          <CheckCircle
                            size={18}
                            weight="fill"
                            className="text-brand shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {athlete.productLine && (
                    <Link
                      href="/product/the-eagle"
                      className="inline-flex mt-6 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand-dark transition-colors"
                    >
                      Shop {athlete.productLine}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
