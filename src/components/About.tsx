import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="border-b border-border">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-6">
          {t("sections.about")}
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          {t("header.bio")}
        </p>
      </div>
    </section>
  );
}
