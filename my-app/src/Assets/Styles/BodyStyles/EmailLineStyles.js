import { makeStyles } from '@material-ui/core/styles';

const EmailLineStyles = makeStyles(() => ({
    container: {
        paddingLeft: ".5rem",
        paddingRight: ".5rem",
        '&:hover': {
            cursor: "pointer",
            color: "blue",
            backgroundColor: "#f6f8fa"
        },
        borderBottom: "1px solid #9c9c9c",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        paddingLeft: "1rem"
    },
    clipIcon: {
        height: "1rem",
        marginRight: "1rem"
    },
    mail: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        fontWeight: "100",
        padding: ".2rem"
    },
    mailContent: {
        width: "10%"
    },
    subject: {
        width: "30%",
    },
    to: {
        width: "10%"
    },
    date: {
        fontWeight: 600,
        width: "140px",
        textAlign: "left",
        fontWeight: "bold"
    },
    subThreads: {
        margin: "0",
        backgroundColor: "#888888",
        color: "white",
        paddingRight: ".2rem",
        paddingLeft: ".2rem",
        borderRadius: "5px",
        fontWeight: "bold"
    }
}));

export default EmailLineStyles