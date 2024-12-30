import { useTheme } from "app/providers/theme-provider/lib/useTheme";
import { classNames } from "shared/lib/class-names/class-names";
import 'app/styles/index.scss';
import { AppRouter } from "app/providers/app-router";
import { Navbar } from "widgest/navbar";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const MyComponent = () => {

    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? "en" : "ru")
    }
    return (
        <div>
            {t("Тестовый пример")}
            <button onClick={toggle}>{t("Перевод")}</button>
        </div>
    )
}


export const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme], {})}>
            <Suspense fallback="">
                <Navbar classNamesProps={theme} />
                <MyComponent />
                <AppRouter />
            </Suspense>
        </div>
    )
}