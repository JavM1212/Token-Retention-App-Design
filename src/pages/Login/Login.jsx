import React, { useState } from "react";
import { Box, Paper, TextField, Typography, Button, Link } from "@mui/material";

import { useStyles } from "./styles";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const classes = useStyles();

    return (
        <Box className={classes.parentContainer}>
            <Paper className={classes.childContainer} elevation={6}>
                <Typography variant="h3" sx={{ fontWeight: 200 }}>
                    {isLogin ? "Login" : "Register"}
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
                    {isLogin ? "Login" : "Register"}
                </Button>
                <Link
                    className={classes.link}
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Sign Up" : "Sign In"}
                </Link>
            </Paper>
        </Box>
    );
};

export default Login;
