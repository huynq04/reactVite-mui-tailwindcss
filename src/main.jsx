import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProviderStore } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProviderStore>
        <App />
    </ProviderStore>
    // <React.StrictMode>
    // </React.StrictMode>
)
