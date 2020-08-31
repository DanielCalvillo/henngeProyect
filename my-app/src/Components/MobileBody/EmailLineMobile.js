import React, { useState } from 'react';
import mailIcon from '../../Assets/icons/icon_mail_sp.svg'
import EmailBodyMobile from './EmailBodyMobile'
import clipIcon from '../../Assets/icons/icon_clip.svg'
import EmailLineMobileStyles from '../../Assets/Styles/MobileBodyStyles/EmailLineMobileStyles'

function EmailLineMobile(props) {
    const classes = EmailLineMobileStyles();
    const [deployed, changeDeployed] = useState(false);

    const handleClick =(evt) => {
        changeDeployed(!deployed)
    }

    const renderClip = () => {
        if (props.clipped) {
            return (
                <img src={clipIcon} className={classes.clipIcon} alt="Clip Icon"/>
            )
        }
    }

    const emailThread = () => {
        if (props.thread) {
            const extra = props.thread.length
            return extra
        } else {
            return null
        }
    }

    const renderThreadMail = () => {
        if(props.thread) {
            return props.thread.map(() => 
                <>
                    
                    <EmailBodyMobile 
                        key={props.id} 
                        from={props.from} 
                        to={props.to} 
                        subject={props.subject} 
                        date={props.date}
                        extraNum={props.extraNum}
                        clipped={props.clipped}
                    />
                </>
            )
        } else {
            return null
        }
    }

    const renderEmailContent = (isThread) => (
        <div className={classes.mail}>
            <div className={classes.emailAndIconContainer}>
                <div className={classes.secondContainer}>
                    <img 
                        className={classes.mailIcon} 
                        src={mailIcon} 
                        alt="Mail Icon" 
                    />
                    <div className={classes.emailContainer}>
                        <div className={classes.fromEmail}>
                            {props.from}
                        </div>
                        <div className={classes.toEmail}>
                            {props.to}
                        </div>
                    </div>
                </div>
                <div className={classes.dateAndThreadContainer}>
                    <div className={classes.date}>
                        {renderClip()}{props.date}
                    </div>
                    {isThread ? <p className={classes.subThreads}>{emailThread() ? `+${emailThread()}` : ""}</p>: null}
                </div>
            </div>
            <div className={classes.subject}>
                {props.subject}
            </div>
        </div>
    )

    const renderEmailBody = () => (
        <EmailBodyMobile 
            key={props.id} 
            from={props.from} 
            to={props.to} 
            subject={props.subject} 
            date={props.date}
            extraNum={props.extraNum}
            clipped={props.clipped}
        />
    )

    if (deployed && props.thread) {
        return (
            <div onClick={handleClick} className={classes.container}>
                {renderEmailContent()}
                {renderThreadMail()}

            </div> 
        )
    } else if (deployed) {
        return (
            <div onClick={handleClick} className={classes.container}>
                {renderEmailContent()}
                {renderEmailBody()}
            </div> 
        )
    } else {
        return (
            <div onClick={handleClick} className={classes.container}>
                {renderEmailContent(true)}
            </div>
        )
    }
}

export default EmailLineMobile