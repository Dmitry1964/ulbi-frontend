import { useTheme } from "app/providers/theme-provider/lib/useTheme";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

import { Themes } from "app/types/app-types";
import { AppButton } from "shared/ui/app-button/app-button";

interface ThemeSwitcherProps {
  clsNameProps?: string;
}

export const ThemeSwitcher = ({ clsNameProps }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton clsNameProps={clsNameProps} onClick={toggleTheme}>
      {theme === Themes.DarkTheme ? <DarkIcon /> : <LightIcon />}
    </AppButton>
  );
};
