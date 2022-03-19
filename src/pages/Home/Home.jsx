import React from "react";
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from "@mui/material";

import { useStyles } from "./styles";

const rows = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => {
    const classes = useStyles();

    return (
        <Box className={classes.parentContainer}>
            <Box className={classes.retentionsButtonContainer}>
                <Typography
                    className={classes.retentionsSubtitle}
                    sx={{
                        marginRight: 95,
                        color: "#2D5EC2",
                        fontWeight: "bold",
                    }}
                    variant="h5"
                >
                    Retentions
                </Typography>
                <Button className={classes.button} variant="contained">
                    Add
                </Button>
            </Box>
            <TableContainer className={classes.table} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Number</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Start Date</TableCell>
                            <TableCell align="right">End Date</TableCell>
                            <TableCell align="right">Remaining Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    1)
                                </TableCell>
                                <TableCell align="right">14ETH</TableCell>
                                <TableCell align="right">2/12/2022</TableCell>
                                <TableCell align="right">8/12/2022</TableCell>
                                <TableCell align="right">
                                    5 months, 7 days
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Home;
