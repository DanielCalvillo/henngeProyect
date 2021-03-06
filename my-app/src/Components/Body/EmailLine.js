import React, { useState } from 'react';
import EmailBody from './EmailBody'
import clipIcon from '../../Assets/icons/icon_clip.svg'
import EmailLineStyles from '../../Assets/Styles/BodyStyles/EmailLineStyles'

function EmailLine(props) {
    const classes = EmailLineStyles()
    const [deployed, changeDeployed] = useState(false);

    const renderClip = () => {
        if (props.clipped) {
            return (
                <img src={clipIcon} className={classes.clipIcon} alt="Clip Icon"/>
            )
        }
    }
    const handleClick =(evt) => {
        changeDeployed(!deployed)
    }

    const emailThread = () => {
        if (props.thread) {
            const extra = props.thread.length
            return extra
        } else {
            return null
        }
    }

    const renderThreadMails = () => {
        if (props.thread) {
            return props.thread.map((threadMail) => 
                <>
                    <hr />
                    <EmailBody
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
            <div className={classes.mailContent}>
                {props.from}
            </div>
            <div className={classes.to}>
                {props.to}
            </div>
            {isThread ? <p className={classes.subThreads}>{emailThread() ? `+${emailThread()}` : ""}</p> : null}
            <div className={classes.subject}>
                {props.subject}
            </div>
            <div className={classes.date}>
                {renderClip()}{props.date}
            </div>
        </div>
    )

    const renderEmailBody = () => (
        <EmailBody 
            key={props.id} 
            from={props.from} 
            to={props.to} 
            subject={props.subject} 
            date={props.date}
            extraNum={props.extraNum}
            clipped={props.clipped}
        />
    )

    if (deployed && props.thread){
        return (
            <div onClick={handleClick} className={classes.container}>
                {renderEmailContent()}
                {renderThreadMails()}
            </div>
        )
    } else if (deployed) {
        return (
            <div onClick={handleClick} className={classes.container}>
                {renderEmailContent()}
                {renderEmailBody()}
                {renderThreadMails()}
            </div>
        )
    }
    else {
        return (
            <div onClick={handleClick} className={classes.container}>
                {renderEmailContent(true)}
            </div>
        )
    }
}

export default EmailLine