import { useState } from "react";
import classes from './counter.module.scss';

export const Counter = () => {
const [count, setCount] = useState(0)

    return (
        <div>
            <h2>{count}</h2>
            <button className={classes.button}
                onClick={() => setCount(count+1)}
            >Count</button>
        </div>
    )
}