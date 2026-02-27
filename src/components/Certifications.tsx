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
    <section id="certifications" className="border-b border-border">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-6">
          {t("sections.certifications")}
        </h2>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm text-text-secondary mt-0.5">
                  {item.issuer}
                </p>
              </div>
              <span className="text-xs text-text-tertiary whitespace-nowrap">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
