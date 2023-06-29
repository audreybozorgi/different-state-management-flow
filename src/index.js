import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
root2.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
root3.render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>
);

root4.render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
