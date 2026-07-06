import Image from "next/image";

interface PageBannerProps {
  title: string;
  description: string;
  image?: string;
}

export function PageBanner({ title, description, image }: PageBannerProps) {
  return (
    <section className="relative bg-brand-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/za-cricket-logo.png"
              alt="ZA Cricket"
              width={120}
              height={48}
              className="h-10 w-auto object-contain mb-6"
            />
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              {title}
            </h1>
            <p className="mt-4 text-zinc-600 leading-relaxed max-w-lg">
              {description}
            </p>
          </div>
          {image && (
            <div className="relative aspect-[16/10] md:aspect-[2/1] lg:aspect-[16/10] rounded-2xl overflow-hidden mt-6 md:mt-0">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
