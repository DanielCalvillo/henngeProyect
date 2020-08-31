import { makeStyles } from '@material-ui/core/styles';

const EmailLineMobileStyles = makeStyles(() => ({
    container: {
        marginLeft: ".6rem",
        marginRight: ".6rem"
    },
    mail: {
        display: "flex",
        flexDirection: "column",
    },
    emailAndIconContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    secondContainer: {
        display: "flex"
    },
    emailContainer: {
        marginTop: "0rem",
        marginBottom: ".7rem",
        marginLeft: "2vh"
    },
    mailIcon: {
        marginTop: ".5rem",
        height: "2.5rem"
    },
    date: {
        justifyContent: "flex-end"
    },
    clipIcon: {
        height: "1rem",
        marginRight: ".5rem"
    },
    fromEmail: {
        marginBottom: ".3rem"
    },
    toEmail: {
        display: "flex"
    },
    subThreads: {
        margin: "0",
        backgroundColor: "#888888",
        color: "white",
        borderRadius: "5px",
        fontWeight: "bold",
        width: "1.5rem",
        alignContent: "right",
        paddingLeft: ".2rem"
    },
    dateAndThreadContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    }
}));

export default EmailLineMobileStyles