import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="bg-bg-card shadow-[0_1px_3px_var(--color-shadow)]">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="flex items-start justify-between animate-fade-in">
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              {t("header.name")}
            </h1>
            <p className="text-sm font-medium text-accent mt-1">
              {t("header.role")}
            </p>
          </div>
          <LanguageSwitcher />
        </div>
        <p className="text-sm text-text-secondary mt-6 leading-relaxed max-w-lg animate-fade-in-delay-1">
          {t("header.bio")}
        </p>
        <nav className="flex gap-4 mt-8 animate-fade-in-delay-2">
          {(["about", "experience", "projects", "certifications"] as const).map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium text-text-secondary px-3 py-1.5 rounded-md hover:bg-accent-light hover:text-accent transition-all duration-200"
              >
                {t(`nav.${section}`)}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
