import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from "./contextProvider"
import {BrowserRouter} from "react-router-dom"



ReactDOM.render(
    <BrowserRouter>
        <ContextProvider>
            <App />
        </ContextProvider>,    
    // </BrowserRouter>,
 document.getElementById('root'))
