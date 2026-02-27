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
    <section id="experience" className="py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-8 flex items-center gap-2">
          <span className="w-8 h-px bg-accent"></span>
          {t("sections.experience")}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-bg-card rounded-xl shadow-[0_1px_3px_var(--color-shadow)] p-6 hover:shadow-[0_4px_12px_var(--color-shadow-hover)] transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-accent mt-0.5">
                    {item.company}
                  </p>
                </div>
                <span className="text-xs font-medium text-text-tertiary bg-tag-bg px-3 py-1 rounded-full whitespace-nowrap">
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
