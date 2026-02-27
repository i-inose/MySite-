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
    <section id="experience" className="border-b border-border">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-6">
          {t("sections.experience")}
        </h2>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="group">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium">{item.role}</h3>
                  <p className="text-sm text-text-secondary mt-0.5">
                    {item.company}
                  </p>
                </div>
                <span className="text-xs text-text-tertiary whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
