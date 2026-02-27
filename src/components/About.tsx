import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-green mb-8">
          {t("sections.about")}
        </h2>
        <div className="border border-border rounded-2xl p-8 bg-bg-card hover:border-green/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-300">
          <p className="text-base text-text-secondary leading-relaxed">
            {t("header.bio")}
          </p>
        </div>
      </div>
    </section>
  );
}
