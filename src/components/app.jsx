import React from "react";
import Header from "./shared/header.jsx";
import Router from "./shared/router.jsx";
import { Container } from "@mui/material";
  
function App(props) {
    return(
        <Container disableGutters maxWidth={null} sx={{ maxWidth: "100%", margin: 0 }}>
            <Header />
            <Router />
        </Container>
    )
}
  
export default App;