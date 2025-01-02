import { useTranslation } from "react-i18next";
import { AppButton } from "shared/ui/app-button/app-button";

interface LanguageSwitcherProps {
  clsNameProps: string;
}

export const LanguageSwitcher = ({ clsNameProps }: LanguageSwitcherProps) => {
  const {t, i18n} = useTranslation()
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <AppButton onClick={toggleLanguage} clsNameProps={clsNameProps}>
      {t('Язык')}
    </AppButton>
  );
};
