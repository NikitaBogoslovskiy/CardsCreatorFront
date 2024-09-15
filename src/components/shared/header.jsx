// @ts-nocheck
import React from "react";
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    Icon,
    Box,
    Button,
    IconButton,
    SvgIcon,
    Link
} from "@mui/material";
import LogoImg from "../../../public/images/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { theme } from "../../themes/custom.jsx"

function Header(props) {
    const navigation = ["home", "articles", "contact"];

    return (
        <AppBar sx={{ bgcolor: theme.background.default, display: "block", position: "sticky" }}>
            <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Container disableGutters sx={{ margin: 0, display: { xs: "none", sm: "block" } }}>
                    <Container disableGutters sx={{ margin: 0, display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center" }}>
                        <Link href="/home" underline="none">
                            <Icon component="div" sx={{ mr: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <img src={LogoImg} height={25} />
                            </Icon>
                        </Link>
                        <Link href="/home" underline="none">
                            <Typography
                                component="div"
                                sx={{
                                    userSelect: "none",
                                    display: { xs: "none", sm: "block" }, 
                                    color: theme.text.header.color, 
                                    fontSize: theme.text.header.size.content,
                                    fontWeight: theme.text.header.weight, 
                                    fontFamily: theme.text.header.family,
                                }}
                            >
                                Cards Creator
                            </Typography>
                        </Link>
                    </Container>
                </Container>
                <Container disableGutters sx={{ margin: 0, display: { xs: "none", sm: "block" } }}>
                    <Container disableGutters component="nav" sx={{ margin: 0, display: "flex", flexDirection: "row", justifyContent: "right", wrap: "nowrap" }}>
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
                        <IconButton onClick={() => {}}>
                            <SvgIcon component={LoginIcon} sx={{ color: "#000000" }}/>
                        </IconButton>
                    </Container>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
  
export default Header;