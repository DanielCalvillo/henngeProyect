import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EmailBody from './EmailBody'
import clipIcon from '../../Assets/icons/icon_clip.svg'

const useStyles = makeStyles(() => ({
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
        height: "2vh",
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
function EmailLine(props) {
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

        const classes = useStyles()
        if (deployed && props.thread){
            return (
                <div onClick={handleClick} className={classes.container}>
                    <div className={classes.mail}>
                        <div className={classes.mailContent}>
                            {props.from}
                        </div>
                        <div className={classes.to}>
                            {props.to}
                        </div>
                        <div className={classes.subject}>
                            {props.subject}
                        </div>
                        <div className={classes.date}>
                            {renderClip()}{props.date}
                        </div>
                    </div>
                    {renderThreadMails()}
                    
                </div>
            )
        } else if (deployed) {
            return (
                <div onClick={handleClick} className={classes.container}>
                    <div className={classes.mail}>
                        <div className={classes.mailContent}>
                            {props.from}
                        </div>
                        <div className={classes.to}>
                            {props.to}
                        </div>
                        <div className={classes.subject}>
                            {props.subject}
                        </div>
                        <div className={classes.date}>
                            {renderClip()}{props.date}
                        </div>
                    </div>
                    <EmailBody 
                        key={props.id} 
                        from={props.from} 
                        to={props.to} 
                        subject={props.subject} 
                        date={props.date}
                        extraNum={props.extraNum}
                        clipped={props.clipped}
                    />
                    {renderThreadMails()}

                </div>
            )
        }
        else {
            return (
                <div onClick={handleClick} className={classes.container}>
                    <div className={classes.mail}>
                        <div className={classes.mailContent}>
                            {props.from}
                        </div>
                        <div className={classes.to}>
                            {props.to}
                        </div>
                        <p className={classes.subThreads}>{emailThread() ? `+${emailThread()}` : ""}</p>
                        <div className={classes.subject}>
                            {props.subject}
                        </div>
                        <div className={classes.date}>
                            {renderClip()}{props.date}
                        </div>
                    </div>
                </div>
            )
        }
}

export default EmailLine