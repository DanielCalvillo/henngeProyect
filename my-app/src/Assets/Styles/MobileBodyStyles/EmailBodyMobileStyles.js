import { makeStyles } from '@material-ui/core/styles';

const EmailBodyMobileStyles = makeStyles(() => ({
    mail: {
        marginLeft: "1rem",
        marginTop: "1rem"
    },
    from: {
        marginBottom: ".8rem"
    },
    to: {
        marginBottom: ".8rem"
    },
    subject: {
        marginBottom: ".8rem"
    },
    content: {
        marginBottom: ".8rem"
    },
    date: {
        marginBottom: ".8rem"
    }
}));

export default EmailBodyMobileStyles