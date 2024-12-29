export enum Themes  {
    LightTheme ='light',
    DarkTheme = 'dark',
}
export type ThemeContextProps = {
    theme?: Themes;
    setTheme?: (theme:Themes) => void;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT] : '/about'
}
