import React from "react";

import { Box, Typography, Paper } from "@mui/material";

import { useStyles } from "./styles";

const ImportTokens = () => {
    const classes = useStyles();

    return (
        <Box className={classes.parentContainer}>
            <Box className={classes.retentionsButtonContainer}>
                <Typography
                    className={classes.retentionsSubtitle}
                    sx={{
                        marginRight: 104,
                        color: "#2D5EC2",
                        fontWeight: "bold",
                    }}
                    variant="h5"
                >
                    Import Tokens
                </Typography>
            </Box>
            <Paper className={classes.paper}>Import tokens with metamask</Paper>
        </Box>
    );
};

export default ImportTokens;
