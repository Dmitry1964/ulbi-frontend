import { FC, useMemo, useState } from "react";
import { Themes } from "../types/app-types";
import { ThemeContext } from "./theme-context";
import { LOCAL_STORAGE_THEME_KEY } from "../constans/app-constans";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LightTheme


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