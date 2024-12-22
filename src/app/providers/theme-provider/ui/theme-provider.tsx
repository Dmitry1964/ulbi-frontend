import { LOCAL_STORAGE_THEME_KEY } from "app/constans/app-constans";
import { Themes } from "app/types/app-types";
import { FC, useMemo, useState } from "react";
import { ThemeContext } from "../lib/theme-context";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.DarkTheme


export const ThemeProvider: FC = ({children}) => {

    const [theme, setTheme] = useState<Themes>(defaultTheme)


    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}