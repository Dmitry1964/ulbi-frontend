import { createContext } from "react";
import { ThemeContextProps, Themes } from "../types/app-types";
export {ThemeContextProps} from "../types/app-types"


export const ThemeContext = createContext<ThemeContextProps>({})

