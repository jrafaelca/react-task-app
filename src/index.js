import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {DataProvider} from "./context";

// Pages
import App from './App';
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/edit/:id" element={<Edit/>}/>
                    <Route path="/delete/:id" element={<Delete/>}/>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    </React.StrictMode>
);
