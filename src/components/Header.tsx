import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="border-b border-border">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-xl font-semibold tracking-tight">
              {t("header.name")}
            </h1>
            <p className="text-sm text-text-secondary mt-1">
              {t("header.role")}
            </p>
          </div>
          <LanguageSwitcher />
        </div>
        <p className="text-sm text-text-secondary mt-6 leading-relaxed max-w-lg">
          {t("header.bio")}
        </p>
        <nav className="flex gap-6 mt-6">
          {(["about", "experience", "projects", "certifications"] as const).map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
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
