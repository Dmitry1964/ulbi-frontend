import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "app/providers/theme-provider/lib/useTheme";
import { MainPage } from "pages/main-page";
import { AboutPage } from "pages/about-page";
import { classNames } from "shared/lib/class-names/class-names";
import 'app/styles/index.scss';
import { AppRouter } from "app/providers/app-router";
import { Navbar } from "widgest/navbar";
import { Container } from "shared/container/container";


export const App = () => {

    const { theme} = useTheme();

    return (
            <div className={classNames('app', [theme], {})}>
                <Navbar classNamesProps={theme} />
                <AppRouter />
            </div>
    )
}