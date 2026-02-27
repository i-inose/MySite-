import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="py-8 mt-4">
      <div className="max-w-2xl mx-auto px-6">
        <div className="border-t border-border pt-8">
          <p className="text-sm text-text-tertiary text-center">
            &copy; {new Date().getFullYear()} {t("header.name")}.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
