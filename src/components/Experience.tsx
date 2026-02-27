import { useMessages, useTranslations } from "next-intl";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export default function Experience() {
  const t = useTranslations();
  const messages = useMessages();
  const items = (messages.experience as { items: ExperienceItem[] }).items;

  return (
    <section id="experience" className="py-16 bg-bg-subtle">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-green mb-8">
          {t("sections.experience")}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl p-6 bg-bg-card hover:border-green/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-base font-semibold">{item.role}</h3>
                  <p className="text-sm text-green mt-0.5">{item.company}</p>
                </div>
                <span className="text-xs text-text-tertiary border border-border rounded-full px-3 py-1 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
