import { AboutPage } from "pages/about-page"
import { MainPage } from "pages/main-page"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "app/providers/app-router";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({path, element}) => (
                        <Route key={path} path={path} element={element}/>
                    ))
                }
            </Routes>
        </Suspense>
    );
}

export default AppRouter;