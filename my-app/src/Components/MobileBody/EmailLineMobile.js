import React, { useState } from 'react';
import mailIcon from '../../Assets/icons/icon_mail_sp.svg'
import { makeStyles } from '@material-ui/core/styles';
import EmailBodyMobile from './EmailBodyMobile'
import clipIcon from '../../Assets/icons/icon_clip.svg'

const useStyles = makeStyles(() => ({
    container: {
        marginLeft: ".5rem",
        marginRight: ".5rem"
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

function EmailLineMobile(props) {
    const classes = useStyles();
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
                    <hr/>
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

        if (deployed && props.thread) {
            return (
                <div onClick={handleClick} className={classes.container}>
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
                            </div>
                        </div>
                        <div className={classes.subject}>
                            {props.subject}
                        </div>
                    </div>
                    {renderThreadMail()}

                </div> 
            )
        } else if (deployed) {
            return (
                <div onClick={handleClick} className={classes.container}>
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
                                <p className={classes.subThreads}>{emailThread() ? `+${emailThread()}` : ""}</p>
                            </div>
                        </div>
                        <div className={classes.subject}>
                            {props.subject}
                        </div>
                    </div>
                    <EmailBodyMobile 
                        key={props.id} 
                        from={props.from} 
                        to={props.to} 
                        subject={props.subject} 
                        date={props.date}
                        extraNum={props.extraNum}
                        clipped={props.clipped}
                    />
                    
                </div> 
            )
        } else {
            return (
                <div onClick={handleClick} className={classes.container}>
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
                                <p className={classes.subThreads}>{emailThread() ? `+${emailThread()}` : ""}</p>
                            </div>
                        </div>
                        <div className={classes.subject}>
                            {props.subject}
                        </div>
                    </div>
                </div>
            )
        }
}

export default EmailLineMobile