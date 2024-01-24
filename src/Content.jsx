import { useEffect, useRef, useState } from 'react';

function Content() {
    const [count, setCount] = useState(90);

    const timer = useRef();
    const prevCount = useRef();

    // render UI thi moi goi call back
    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const handleStart = () => {
        timer.current = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(timer.current);
    };

    console.log(count, prevCount.current);

    return (
        <div style={{ marginTop: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Content;
