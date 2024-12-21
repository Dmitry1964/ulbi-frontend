import { useContext } from "react";
import { Themes } from "../types/app-types";
import { ThemeContext } from "./theme-context";
import { LOCAL_STORAGE_THEME_KEY } from "../constans/app-constans";

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