import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    parentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    paper: {
        marginTop: 10,
        maxWidth: 1000,
        width: 1000,
        height: "70vh !important",
        borderRadius: "10px !important",
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
    link: {
        textDecoration: "none !important",
        color: "white !important",
    },
});

export { useStyles };
