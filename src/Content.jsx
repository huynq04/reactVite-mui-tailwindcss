import { useEffect, useState } from 'react';

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, []);

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <ul>
                {posts.map((item, index) => (
                    <li key={index.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
