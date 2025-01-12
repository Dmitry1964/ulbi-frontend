import { classNames } from "shared/lib/class-names/class-names";
import cls from "./sidebar.module.scss";
import { ThemeSwitcher } from "widgest/theme-switcher";
import { LanguageSwitcher } from "widgest/language-switcher";

interface SidebarProps {
  theme: string;
}

export const Sidebar = ({ theme }: SidebarProps) => {
  return (
    <div className={classNames(cls.sidebar, [cls[theme]], {})}>
      <div className={classNames(cls.sidebar__wrapper, [], {})}>
        <ThemeSwitcher clsNameProps="button__theme" />
        <LanguageSwitcher clsNameProps="button__language" />
      </div>
    </div>
  );
};
