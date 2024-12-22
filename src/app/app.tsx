import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "app/providers/lib/useTheme";
import { MainPage } from "pages/main-page";
import { AboutPage } from "pages/about-page";
import { classNames } from "shared/lib/class-names/class-names";
import 'app/styles/index.scss';


export const App = () => {

    const {theme, toggleTheme} = useTheme();
    console.log(theme);
    
    return (
        <div className={classNames('app', [theme], {})}>
            <Link to="/">Главная</Link>
            <Link to="about">О Сайте</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={`/`} element={<MainPage />} />
                    <Route path={`/about`} element={<AboutPage />} />
                </Routes>
            </Suspense>

        </div>
    )
}