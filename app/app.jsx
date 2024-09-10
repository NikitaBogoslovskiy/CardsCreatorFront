import { createRoot } from "react-dom/client";
import React from "react";
import Header from "./components/shared/header.jsx";
import Footer from "./components/shared/footer.jsx";
  
createRoot(
    document.getElementById("app")
)
.render(
    <div>
        <Header />
        <Footer />
    </div>
);