import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import { classNames } from "shared/lib/class-names/class-names";
import cn from './app-link.module.scss';

interface AppLinkProps extends LinkProps {
    classNamesProps: string;
    path: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { classNamesProps, children, to, path } = props;

    return (
        <Link 
            to={to} 
            className={classNames(cn.link, [cn[classNamesProps]], { 
                [cn.isActive]: path === to 
            })}
        >
            {children}
        </Link>
    )
}