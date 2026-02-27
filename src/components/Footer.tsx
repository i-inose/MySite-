import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer>
      <div className="max-w-2xl mx-auto px-6 py-8">
        <p className="text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} {t("header.name")}.{" "}
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
