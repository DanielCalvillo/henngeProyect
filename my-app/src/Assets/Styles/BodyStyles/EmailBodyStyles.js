import { makeStyles } from '@material-ui/core/styles';

const EmailBodyStyles = makeStyles(() => ({
    mail: {
        marginLeft: "0",
        marginTop: "1rem",
        color: "black"
    },
    from: {
        marginBottom: "1rem"
    },
    to: {
        marginBottom: "1rem"
    },
    subject: {
        marginBottom: "1rem"
    },
    content: {
        marginBottom: "1rem"
    },
    date: {
        marginBottom: "1rem"
    }
}));

export default EmailBodyStyles
