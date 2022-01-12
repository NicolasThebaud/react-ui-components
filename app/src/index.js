import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

// SCREENS
import App from "./App";
import Rails from "./screens/Rails";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="rails" element={<Rails/>}/>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
