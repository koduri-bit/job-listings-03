import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {JobListContextProvider} from "./store/joblist-context";


ReactDOM.render(  (<JobListContextProvider>
                    <App />
                    </JobListContextProvider>) ,  document.getElementById('root') );


