import { useContext } from "react";
import { ThemeContext } from "./theme-context";
import { Themes } from "app/types/app-types";
import { LOCAL_STORAGE_THEME_KEY } from "app/constans/app-constans";

type useThemeResult = {
    toggleTheme: () => void;
    theme: Themes
}

export const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Themes.DarkTheme ? Themes.LightTheme : Themes.DarkTheme;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
       theme,
       toggleTheme 
    }

}