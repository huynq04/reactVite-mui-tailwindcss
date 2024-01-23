import { useEffect, useState } from 'react';

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [activeTap, setActiveTap] = useState(tabs[0]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${activeTap}`)
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, [activeTap]);

    return (
        <div>
            {tabs.map((item) => (
                <button key={item} onClick={() => setActiveTap(item)}>
                    {item}
                </button>
            ))}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <ul>
                {posts.map((item, index) => (
                    <li key={index.id}>{item.title || item.name} </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
