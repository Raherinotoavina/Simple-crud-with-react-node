import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";
import "./style/style.scss";

const root = document.querySelector(".root");
createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)