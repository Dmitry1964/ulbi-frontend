import { FC } from "react"
import {useLocation } from "react-router-dom"
import { classNames } from "shared/lib/class-names/class-names"
import cn from './navbar.module.scss'
import { AppLink } from "shared/ui/app-link/app-link"
import { ThemeSwitcher } from "widgest/theme-switcher"

type NavbarProps = {
    classNamesProps?: string
}

export const Navbar: FC<NavbarProps> = ({ classNamesProps }) => {

    const { pathname } = useLocation();


    return (
        <div className={classNames(cn.navbar, [cn[classNamesProps]], {})}>
            <ThemeSwitcher />
            <div className={classNames(cn.navbar__links, [], {})}>
                <AppLink
                    to="/"
                    classNamesProps={classNamesProps}
                    path={pathname}
                >
                    Главная
                </AppLink>
                <AppLink to={'/about'} classNamesProps={classNamesProps} path={pathname}>
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}