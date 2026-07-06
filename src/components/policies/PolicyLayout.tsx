interface PolicySection {
  title: string;
  content: string;
}

interface PolicyLayoutProps {
  title: string;
  sections: PolicySection[];
}

export function PolicyLayout({ title, sections }: PolicyLayoutProps) {
  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
          {title}
        </h1>
        <p className="text-sm text-zinc-500 mb-12">
          Last updated: July 2025
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-zinc-900 mb-3">
                {section.title}
              </h2>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
