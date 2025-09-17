import { Button } from "@/components/ui/button";
import { useLocale } from "./IntlProvider";

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex gap-2">
      <Button
        variant={locale === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLocale("en")}
      >
        EN
      </Button>
      <Button
        variant={locale === "de" ? "default" : "outline"}
        size="sm"
        onClick={() => setLocale("de")}
      >
        DE
      </Button>
    </div>
  );
};
