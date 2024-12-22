import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "app/providers/theme-provider/lib/useTheme";
import { MainPage } from "pages/main-page";
import { AboutPage } from "pages/about-page";
import { classNames } from "shared/lib/class-names/class-names";
import 'app/styles/index.scss';
import { AppRouter } from "app/providers/app-router";


export const App = () => {

    const {theme, toggleTheme} = useTheme();
    console.log(theme);
    
    return (
        <div className={classNames('app', [theme], {})}>
            <Link to="/">Главная</Link>
            <Link to="about">О Сайте</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <AppRouter/>
        </div>
    )
}