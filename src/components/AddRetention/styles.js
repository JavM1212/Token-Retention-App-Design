import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    parentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    paper: {
        width: 150,
        height: 100,
        borderRadius: "10px !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 100,
        [`& fieldset`]: {
            borderRadius: 20,
        },
    },
});

export { useStyles };
