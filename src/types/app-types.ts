export enum Themes  {
    LightTheme ='light',
    DarkTheme = 'dark',
}
export type ThemeContextProps = {
    theme?: Themes;
    setTheme?: (theme:Themes) => void;
}