import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextAPI from "./ContextAPI";
import Zustand from "./Zustand";
import App4 from "./App4";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root.render(
    <App />
);
root2.render(
    <ContextAPI />
);
root3.render(
    <Zustand />
);

root4.render(
    <App4 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
