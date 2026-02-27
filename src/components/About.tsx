import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-bg-card rounded-xl shadow-[0_1px_3px_var(--color-shadow)] p-8 animate-fade-in-delay-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-accent"></span>
            {t("sections.about")}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {t("header.bio")}
          </p>
        </div>
      </div>
    </section>
  );
}
