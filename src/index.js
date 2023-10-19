import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { ProductProvider } from './context/ProductContext';
import { TokenProvider } from './context/TokenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <TokenProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </TokenProvider>
    </BrowserRouter>
);

