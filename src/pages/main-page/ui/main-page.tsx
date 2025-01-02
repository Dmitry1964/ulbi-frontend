import { classNames } from 'shared/lib/class-names/class-names';
import cls from './main-page.module.scss';

const MainPage = () => {
    return (
        <div className={classNames(cls.main_page, [], {})}>
            MainPage
        </div>
    )
}

export default MainPage;