import { useEffect, useState } from 'react';

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

function Content() {
    const [posts, setPosts] = useState([]);
    const [activeTap, setActiveTap] = useState(tabs[0]);
    const [backTop, setBackTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${activeTap}`)
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, [activeTap]);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY >= 200 ? setBackTop(true) : setBackTop(false);
        };

        window.addEventListener('scroll', handleScroll);

        // cleanUp function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {tabs.map((item) => (
                <button key={item} onClick={() => setActiveTap(item)}>
                    {item}
                </button>
            ))}

            {backTop && <button style={{ position: 'fixed', bottom: 20, right: 20 }}>Back to Top</button>}

            <ul>
                {posts.map((item, index) => (
                    <li key={index}>{item.title || item.name} </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
