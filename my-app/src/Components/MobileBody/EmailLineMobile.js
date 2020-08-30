import React, { useState } from 'react';
import mailIcon from '../../Assets/icons/icon_mail_sp.svg'
import { makeStyles } from '@material-ui/core/styles';
import EmailBodyMobile from './EmailBodyMobile'
import clipIcon from '../../Assets/icons/icon_clip.svg'

const useStyles = makeStyles(() => ({
    mail: {
        display: "flex",
        flexDirection: "column"
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
        marginTop: "1vh",
        marginBottom: "2vh",
        marginLeft: "2vh"
    },
    mailIcon: {
        marginTop: "1.8vh",
        height: "6vh"
    },
    date: {
        justifyContent: "flex-end"
    },
    clipIcon: {
        height: "3vh",
        marginRight: "1vh"
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

    const deployEmail = () => {
        if (deployed) {
            return (
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
        } else {
            return (
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
                        <div>
                            <div className={classes.date}>
                                {renderClip()}{props.date}
                            </div>
                        </div>
                    </div>
                    <div className={classes.subject}>
                        {props.subject}
                    </div>
                </div>
            )
        }
    }
        return (
            <div onClick={handleClick} className={classes.container}>
                {deployEmail()}
            </div>        
        )
}

export default EmailLineMobile