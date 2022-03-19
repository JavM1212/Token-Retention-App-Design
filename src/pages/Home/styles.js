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
        height: "70vh !important",
        borderRadius: "10px !important",
        overflow: "scroll",
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
});

export { useStyles };
