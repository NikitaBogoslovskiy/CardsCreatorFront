import { createRoot } from "react-dom/client";
import React from "react";
import App from "./components/app.jsx";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
