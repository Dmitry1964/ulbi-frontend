import { FC, ButtonHTMLAttributes } from "react"
import cn from './app-button.module.scss';
import { classNames } from "shared/lib/class-names/class-names";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    clsNameProps?: string;
}

export const AppButton: FC<ButtonProps> = (props) => {
    const { children, ...otherProps } = props
    return (
        <button
            className={cn.button}
            {...otherProps}
        >
            {children}
        </button>
    )
}