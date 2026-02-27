import { useMessages, useTranslations } from "next-intl";

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export default function Certifications() {
  const t = useTranslations();
  const messages = useMessages();
  const items = (messages.certifications as { items: CertificationItem[] })
    .items;

  return (
    <section id="certifications" className="py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-8 flex items-center gap-2">
          <span className="w-8 h-px bg-accent"></span>
          {t("sections.certifications")}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-bg-card rounded-xl shadow-[0_1px_3px_var(--color-shadow)] p-6 flex items-center justify-between gap-4 hover:shadow-[0_4px_12px_var(--color-shadow-hover)] transition-shadow duration-300"
            >
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  {item.name}
                </h3>
                <p className="text-sm text-text-secondary mt-0.5">
                  {item.issuer}
                </p>
              </div>
              <span className="text-xs font-medium text-text-tertiary bg-tag-bg px-3 py-1 rounded-full whitespace-nowrap">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
