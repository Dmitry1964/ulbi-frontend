import { FC} from "react"
import { classNames } from "shared/lib/class-names/class-names"
import cls from './container.module.scss';

export const Container: FC = ({ children }) => {
    return (
        <div className={classNames(cls.container, [], {})}>
            {children}
        </div>
    )
}