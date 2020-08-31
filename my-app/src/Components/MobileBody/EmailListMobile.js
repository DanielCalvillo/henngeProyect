import React from 'react'
import EmailLineMobile from './EmailLineMobile';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../Assets/icons/logo.png'
const useStyles = makeStyles(() => ({
    noResults: {
        display: "flex",
        width: "100%",
        height: "800px",
        justifyContent: "center",
        alignItems: "center",
        margin: "0"
    },
    logo: {
        height: "10rem"
    }
}));

function EmailListMobile(props) {

    const classes = useStyles();
    if (props.results) {
        return(
            <div className={classes.emailListContainer}>
                    {props.mails.map( m => (
                        <>
                            <EmailLineMobile 
                                key={m.id} 
                                from={m.from} 
                                to={m.to} 
                                subject={m.subject} 
                                date={m.date}
                                extraNum={m.extraNum}
                                clipped={m.clipped}
                            />
                            <hr />
                        </>
                    ))}
            </div>
        )
    } else {
        return (
            <div className={classes.noResults}>
                <img src={logo} className={classes.logo} alt="logo"/>
            </div>
        )
    }
}
export default EmailListMobile