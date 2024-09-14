// @ts-nocheck
import { AppBar, Container, Icon, Toolbar, Typography } from "@mui/material";
import LogoImg from "../../../public/images/logo.png"
import React from "react";
  
function Footer(props) {
    return (
        <AppBar component="div" sx={{ bgcolor: "#FFFFFF", display: "block", position: "sticky", bottom: 0 }}>
            <Toolbar>
                <Icon component="div" sx={{ mr: 1, mt: 0.3, opacity: 0.8 }}>
                    <img src={LogoImg} height={20} />
                </Icon>
                <Typography
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", sm: "block" }, 
                        color: "#000000", 
                        fontSize: 20,
                        fontWeight: 500, 
                        fontFamily: "Oswald",
                        opacity: 0.8
                    }}
                >
                    Cards Creator
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
  
export default Footer;