import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-green tracking-wide uppercase">
              Portfolio
            </p>
            <h1 className="text-3xl font-bold tracking-tight mt-2">
              {t("header.name")}
            </h1>
            <p className="text-base text-text-secondary mt-1">
              {t("header.role")}
            </p>
          </div>
          <LanguageSwitcher />
        </div>

        <p className="text-sm text-text-secondary mt-8 leading-relaxed max-w-xl">
          {t("header.bio")}
        </p>

        <nav className="flex gap-1 mt-10">
          {(["about", "experience", "projects", "certifications"] as const).map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm text-text-secondary px-4 py-2 rounded-lg hover:bg-green-light hover:text-green-dark transition-all duration-200"
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
