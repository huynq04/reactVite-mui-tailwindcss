import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// fake event comment
function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Content is lession ${id}`,
            })
        );
    }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
