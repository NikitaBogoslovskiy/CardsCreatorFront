import React from "react";
import { Container } from "@mui/material";
import Article from "./article.jsx";
  
function Articles(props) {
    return(
        <Container sx={{ display: "flex", flexDirection: "column", marginTop: "30px", marginBottom: "30px" }}>
            {[...new Array(7)].map(() => <Article />)}
        </Container>
    )
}
  
export default Articles;