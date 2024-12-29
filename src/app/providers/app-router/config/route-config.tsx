import { AppRoutes, RoutePath } from "app/types/app-types"
import { AboutPage } from "pages/about-page"
import { MainPage } from "pages/main-page"
import { RouteProps } from "react-router-dom"


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN] : {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT] : {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}