// @ts-nocheck
import React from "react";
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    Icon,
    Box,
    Button
} from "@mui/material";
import LogoImg from "../../../public/images/logo.png"
import { theme } from "../../themes/custom.jsx"

  
function Header(props) {
    const navigation = ["home", "articles", "contact"];

    return (
        <AppBar sx={{ bgcolor: theme.background.default, display: "block", position: "sticky" }}>
            <Toolbar>
                <Icon component="div" sx={{ mr: 1.5, mt: 0.3, display: { xs: "none", sm: "block" } }}>
                    <img src={LogoImg} height={25} />
                </Icon>
                <Typography
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", sm: "block" }, 
                        color: theme.text.header.color, 
                        fontSize: theme.text.header.size.content,
                        fontWeight: theme.text.header.weight, 
                        fontFamily: theme.text.header.family,
                    }}
                >
                    Cards Creator
                </Typography>
                <Box component="nav" sx={{ display: { xs: "none", sm: "block" } }}>
                    {navigation.map((item) => (
                        <Button key={item} href={"/" + item} 
                        sx={{ 
                            color: theme.text.primary.color, 
                            fontSize: theme.text.primary.size.button, 
                            fontFamily: theme.text.primary.family, 
                            fontWeight: theme.text.primary.weight 
                        }}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
  
export default Header;