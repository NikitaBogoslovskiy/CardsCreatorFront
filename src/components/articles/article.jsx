// @ts-nocheck
import React, { useState } from "react";
import { Container, Typography, Button, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton, Icon, SvgIcon } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import LogoImg from "../../../public/images/logo.png"
import { BorderColor } from "@mui/icons-material";
import { theme } from "../../themes/custom.jsx";
  
function Article(props) {
    const title = "Lorem Ipsum";
    const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const ordinaryBgColor = theme.background.default;
    const focusedBgColor = theme.background.highlighted;
    const ordinaryBorderColor = "#0000001E";
    const focusedBorderColor = "#00000028";
    const [bgColor, setBgColor] = useState(ordinaryBgColor);
    const [borderColor, setBorderColor] = useState(ordinaryBorderColor);

    const handleOnFocus = () => {
        setBgColor(focusedBgColor);
        setBorderColor(focusedBorderColor);
    }

    const handleOffFocus = () => {
        setBgColor(ordinaryBgColor);
        setBorderColor(ordinaryBorderColor);
    }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return(
        <React.Fragment>
            <Tooltip title="" onMouseOver={handleOnFocus} onMouseOut={handleOffFocus} onClick={handleOpen}>
                <Container
                    sx={{
                        display: "flex", 
                        flexDirection: "row", 
                        marginBottom: "20px",
                        padding: "20px",
                        backgroundColor: bgColor,
                        borderColor: borderColor,
                        borderStyle: "solid",
                        borderRadius: 5, 
                        borderWidth: 1 }}>
                    <Container sx={{ display: "flex", justifyContent: "center", width: "25%", margin: "10px" }}>
                        <img src={LogoImg} height={100} />
                    </Container>
                    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                        <Typography
                            sx={{
                                userSelect: "none",
                                color: theme.text.primary.color, 
                                fontSize: theme.text.primary.size.content, 
                                fontFamily: theme.text.primary.family, 
                                fontWeight: theme.text.primary.weight
                            }} >
                            {title}
                        </Typography>
                        <Typography
                            sx={{
                                userSelect: "none",
                                color: theme.text.secondary.color, 
                                fontSize: theme.text.secondary.size.content, 
                                fontFamily: theme.text.secondary.family, 
                                fontWeight: theme.text.secondary.weight
                            }} >
                            {comment}
                        </Typography>
                    </Container>
                </Container>
            </Tooltip>
            <Dialog
                sx={{ width: "100%" }}
                open={open}
                onClose={handleClose}
                scroll="body"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogActions sx={{ padding: 0 }}>
                    <IconButton onClick={handleClose}>
                        <SvgIcon component={CloseIcon} sx={{ color: "#000000" }}/>
                    </IconButton>
                </DialogActions>
                <DialogTitle 
                    id="scroll-dialog-title" 
                    sx={{ 
                        pt: "0px", 
                        textAlign: "center",
                        color: theme.text.primary.color, 
                        fontSize: theme.text.primary.size.content, 
                        fontFamily: theme.text.primary.family, 
                        fontWeight: theme.text.primary.weight
                    }}>
                        {title}
                    </DialogTitle>
                <DialogContent dividers={false} sx={{ pl: "45px", pr: "45px", pb: "5px" }}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        sx={{ 
                            textAlign: "justify",
                            color: theme.text.secondary.color, 
                            fontSize: theme.text.secondary.size.content, 
                            fontFamily: theme.text.secondary.family, 
                            fontWeight: theme.text.secondary.weight
                        }}
                    >
                        {[...new Array(10)].map(() => text)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ pr: "35px", pb: "20px" }}>
                    <Button onClick={handleClose} sx={{ "&:hover": { backgroundColor: theme.background.highlighted } }}>
                        <Typography
                            sx={{
                                color: theme.text.primary.color, 
                                fontSize: theme.text.primary.size.button, 
                                fontFamily: theme.text.primary.family, 
                                fontWeight: theme.text.primary.weight
                            }} >
                            Close
                        </Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
  
export default Article;