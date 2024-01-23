import { useEffect, useState } from 'react';

function Content() {
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
            console.log('render');
        }, 1000);

        // cleanup function
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    );
}

export default Content;
