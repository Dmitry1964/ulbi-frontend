import { useTheme } from "app/providers/theme-provider/lib/useTheme";
import { classNames } from "shared/lib/class-names/class-names";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import cls from './theme-switcher.module.scss';
import { Themes } from "app/types/app-types";
import { AppButton } from "shared/ui/app-button/app-button";


interface ThemeSwitcherProps {
    clsNameProps?: string;
}

export const ThemeSwitcher = ({clsNameProps}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
        className={classNames(cls.theme_switcher, [], {})}
            onClick={toggleTheme}
        >
            {theme === Themes.DarkTheme ? <DarkIcon/> : <LightIcon/>}
        </AppButton>

    )
}