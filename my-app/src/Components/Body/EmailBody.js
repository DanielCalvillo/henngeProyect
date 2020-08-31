import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    mail: {
        marginLeft: "0",
        marginTop: "1rem"
    },
    from: {
        marginBottom: "1vh"
    },
    to: {
        marginBottom: "1vh"
    },
    subject: {
        marginBottom: "1vh"
    },
    content: {
        marginBottom: "1vh"
    },
    date: {
        marginBottom: "1vh"
    }
}));

function EmailBody(props) {
    const classes = useStyles()
    return (
        <div className={classes.mail}>
            <div className={classes.from}>
                FROM: {props.from}
            </div>
            <div className={classes.to}>
                TO: {props.to}
            </div>
            <div className={classes.subject}>
                SUBJECT: {props.subject}
            </div>
            <div className={classes.content}>
                MAIL: By the time you are reading this, I'll be looking forward for your response, 
                and this is only a plainText to simulate the mail It will be displayed.
            </div>
            <div className={classes.date}>
                Received on: {props.date}
            </div>
        </div>
    )
}

export default EmailBody