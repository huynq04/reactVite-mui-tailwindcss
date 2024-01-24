import { useEffect, useState, useLayoutEffect } from 'react';

function Content() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) setCount(0);
    }, [count]);

    return (
        <div style={{ marginTop: 20 }}>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                click
            </button>
        </div>
    );
}

export default Content;
