import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    parentContainer: {
        display: "flex",
        justifyContent: "center",
    },
    childContainer: {
        width: 700,
        height: 420,
        marginTop: 55,
        borderRadius: "30px !important",
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
        padding: 20,
    },
    input: {
        width: 450,
        [`& fieldset`]: {
            borderRadius: 50,
        },
    },
    button: {
        width: 130,
        height: 50,
        borderRadius: "50px !important",
        background: "#5E8BEF !important",
        "&:hover": {
            backgroundColor: "#2d5ec2 !important",
        },
    },
    link: {
        textDecoration: "none !important",
        marginTop: "3% !important",
        cursor: "pointer",
        fontSize: 18,
    },
});

export { useStyles };
