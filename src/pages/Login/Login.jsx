import React from "react";
import { Box, Paper, TextField, Typography, Button, Link } from "@mui/material";

import { useStyles } from "./styles";

const Login = () => {
    const classes = useStyles();

    return (
        <Box className={classes.parentContainer}>
            <Paper className={classes.childContainer} elevation={6}>
                <Typography variant="h3" sx={{ fontWeight: 200 }}>
                    Login
                </Typography>
                <form action="#" className={classes.formContainer}>
                    <TextField
                        className={classes.input}
                        label="Email"
                        required
                        autoFocus
                        margin="normal"
                    />
                    <TextField
                        className={classes.input}
                        label="Password"
                        type="password"
                        required
                        margin="normal"
                    />
                </form>
                <Button className={classes.button} variant="contained">
                    Login
                </Button>
                <Link className={classes.link}>SignUp</Link>
            </Paper>
        </Box>
    );
};

export default Login;
