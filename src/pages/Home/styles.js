import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    parentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    table: {
        marginTop: 10,
        maxWidth: 1000,
        width: 1000,
        height: "70vh !important",
        borderRadius: "10px !important",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
            width: "0.4em !important",
        },
        "&::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00) !important",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#E1E3F7 !important",
            outline: "1px solid grey !important",
            borderRadius: "100px !important",
        },
    },
    button: {
        width: 100,
        borderRadius: "50px !important",
        background: "#2D5EC2 !important",
        "&:hover": {
            backgroundColor: "#2d5ec2 !important",
        },
        fontWeight: "bold !important",
    },
    retentionsButtonContainer: {
        display: "flex",
        marginTop: 20,
        marginBottom: 10,
    },
    tableHeaders: {
        fontWeight: "bold !important",
    },
    link: {
        textDecoration: "none !important",
        color: "white !important",
    },
});

export { useStyles };
