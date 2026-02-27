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
    <section id="certifications" className="py-16 bg-bg-subtle">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-green mb-8">
          {t("sections.certifications")}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl p-6 bg-bg-card flex items-center justify-between gap-4 hover:border-green/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-300"
            >
              <div>
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-sm text-text-secondary mt-0.5">
                  {item.issuer}
                </p>
              </div>
              <span className="text-xs text-text-tertiary border border-border rounded-full px-3 py-1 whitespace-nowrap">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
