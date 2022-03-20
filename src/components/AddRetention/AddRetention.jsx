import React from "react";
import { Box, Paper, TextField } from "@mui/material";

import { useStyles } from "./styles";

const Home = () => {
    const classes = useStyles();

    return (
        <Box className={classes.parentContainer}>
            <Paper className={classes.paper}>
                <form action="#" className={classes.formContainer}>
                    <TextField
                        className={classes.input}
                        label="Amount"
                        required
                        autoFocus
                        margin="normal"
                    />
                </form>
            </Paper>
        </Box>
    );
};

export default Home;
