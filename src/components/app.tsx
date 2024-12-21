import { Route, Routes } from "react-router-dom";
import './index.scss';
import { Link } from "react-router-dom";
import { MainPageAsync } from "../pages/main-page/mane-page.async";
import { AboutPageAsync } from "../pages/about-page/about-pagea.async";
import { Suspense } from "react";

export const App = () => {
    return (
        <div>
            <Link to="/">Главная</Link>
            <Link to="about">О Сайте</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={`/`} element={<MainPageAsync />} />
                    <Route path={`/about`} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    )
}