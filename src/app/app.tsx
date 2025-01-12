import { useTheme } from "app/providers/theme-provider/lib/useTheme";
import { classNames } from "shared/lib/class-names/class-names";
import "app/styles/index.scss";
import { AppRouter } from "app/providers/app-router";
import { Navbar } from "widgest/navbar";
import { Suspense } from "react";
import { Sidebar } from "widgest/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <Suspense fallback="">
        <Navbar classNamesProps={theme} />
        <div className="app__wrapper">
          <Sidebar theme={theme} />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
