import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, Link } from "@mui/material";

import { useStyles } from "./styles";

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.parentContainer} position="relative">
            <Box className={classes.leftSideToolbarsContainer}>
                <Toolbar>
                    <Link href="/home" className={classes.link} variant="h5">
                        Token Retention
                    </Link>
                </Toolbar>
            </Box>
            {window.location.pathname !== "/" && (
                <Box className={classes.rightSideToolbarsContainer}>
                    <Toolbar>
                        <Link
                            href="/importTokens"
                            className={classes.link}
                            marginX={3}
                        >
                            0.28ETH
                        </Link>
                        <Button className={classes.button}>Sign Out</Button>
                    </Toolbar>
                </Box>
            )}
        </AppBar>
    );
};

export default Header;
