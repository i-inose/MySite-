"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === "ja" ? "en" : "ja";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggleLocale}
      className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors px-3 py-1.5 border border-border rounded-md hover:border-border-hover"
    >
      {locale === "ja" ? "EN" : "JA"}
    </button>
  );
}
