import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

import { useStyles } from "./styles";

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.parentContainer} position="relative">
            <Box className={classes.leftSideToolbarsContainer}>
                <Toolbar>
                    <Typography variant="h5">Token Retention</Typography>
                </Toolbar>
            </Box>
            {window.location.pathname !== "/" && (
                <Box className={classes.rightSideToolbarsContainer}>
                    <Toolbar>
                        <Typography marginX={3}>0.28ETH</Typography>
                        <Button className={classes.button}>Sign Out</Button>
                    </Toolbar>
                </Box>
            )}
        </AppBar>
    );
};

export default Header;
