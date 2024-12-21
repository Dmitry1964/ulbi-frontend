import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync } from "../pages/main-page/mane-page.async";
import { AboutPageAsync } from "../pages/about-page/about-pagea.async";
import { Suspense } from "react";
import '../styles/index.scss';
import { useTheme } from "../theme/useTheme";


export const App = () => {

    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Link to="/">Главная</Link>
            <Link to="about">О Сайте</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={`/`} element={<MainPageAsync />} />
                    <Route path={`/about`} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    )
}