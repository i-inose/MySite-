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
      className="text-sm font-medium text-accent bg-accent-light hover:bg-accent hover:text-white transition-all duration-200 px-4 py-1.5 rounded-full"
    >
      {locale === "ja" ? "EN" : "JA"}
    </button>
  );
}
