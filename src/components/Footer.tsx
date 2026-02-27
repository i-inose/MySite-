import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-sm text-text-tertiary text-center">
          &copy; {new Date().getFullYear()} {t("header.name")}.{" "}
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
