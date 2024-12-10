import { useState } from "react";
import './counter.scss';

export const Counter = () => {
const [count, setCount] = useState(0)

    return (
        <div>
            <h2>{count}</h2>
            <button className="button"
                onClick={() => setCount(count+1)}
            >Count</button>
        </div>
    )
}