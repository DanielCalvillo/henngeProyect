import React, { useState } from 'react';
import './EmailLine.css';
import { makeStyles } from '@material-ui/core/styles';
import EmailBody from './EmailBody'
import clipIcon from '../../Assets/icons/icon_clip.svg'

const useStyles = makeStyles(() => ({
    container: {
        '&:hover': {
            cursor: "pointer"
        }
    },
    clipIcon: {
        height: "3vh",
        marginRight: "1vh"
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

    const deployEmail = () => {
        if (deployed) {
            return (
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
        } else {
            return (
                <div className="mail">
                    <div className="mail-text email first">
                        {props.from}
                    </div>

                    <div className="mail-text email">
                        {props.to}
                    </div>
                    <div className="mail-text subject">
                        {props.subject}
                    </div>
                    <div className="mail-text date">
                        {renderClip()}{props.date}
                    </div>
                </div>
            )
        }
    }

    const handleClick =(evt) => {
        changeDeployed(!deployed)
    }

        const classes = useStyles()
        return (
            <div onClick={handleClick} className={classes.container}>
                {deployEmail()}
            </div>
        )
}

export default EmailLine