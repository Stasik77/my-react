import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



























let users = [
    {
        name: "12",
        age: 302,
        address: {
            city: "spb",
            country: "usa",

        }
    },
    {
        name: "13",
        age: 32,
        address: {
            city: "spb",
            country: "usa",
        }
    }

]
let b: Array<number | boolean | string>

b = [3,25,62,]
b =[true]
b = [""]

console.log(users[0].age)