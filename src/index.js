import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// Pages
import App from './App';
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/edit" element={<Edit/>}/>
                <Route path="/delete" element={<Delete/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
