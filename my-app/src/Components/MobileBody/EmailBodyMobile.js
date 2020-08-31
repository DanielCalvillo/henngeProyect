import React from 'react'
import EmailBodyMobileStyles from '../../Assets/Styles/MobileBodyStyles/EmailBodyMobileStyles'

function EmailBodyMobile(props) {
    const classes = EmailBodyMobileStyles()
    return (
        <>
            <hr/>
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
        </>
    )
}

export default EmailBodyMobile