import { Counter } from "./counter"
import './index.scss';

export const App = () => {
    return (
        <div>
            <p className="green">Привет</p>
            <Counter />
        </div>
    )
}