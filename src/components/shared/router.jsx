import React from "react";
import { Container } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../home/home.jsx";
import Articles from "../articles/articles.jsx";
import Contact from "../contact/contact.jsx";
  
function Router(props) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/articles",
            element: <Articles />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
    ]);

    return(
        <Container>
            <RouterProvider router={router}/>
        </Container>
    )
}
  
export default Router;