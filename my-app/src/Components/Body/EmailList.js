import React from 'react'
import EmailLine from './EmailLine';
import logo from '../../Assets/icons/logo.png'
import { makeStyles } from '@material-ui/core/styles';

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

function EmailList(props) {
    const classes = useStyles()
    const rendered_threads = [];
    if (props.results) {
        return (
            <div className={classes.emailList}>
                    {props.mails.map( m => {
                        if (m.thread_id) {
                            if (rendered_threads.includes(m.thread_id)) return;
                            rendered_threads.push(m.thread_id);
                            const threads = props.mails.filter(_m => _m.thread_id === m.thread_id)
                            return (
                                <EmailLine 
                                    key={m.id} 
                                    from={m.from} 
                                    to={m.to} 
                                    subject={m.subject} 
                                    date={m.date}
                                    thread={threads}
                                    clipped={m.clipped}
                                />
                            )
                            
                        } else { 
                            return (
                                <EmailLine 
                                    key={m.id} 
                                    from={m.from} 
                                    to={m.to} 
                                    subject={m.subject} 
                                    date={m.date}
                                    extraNum={m.extraNum}
                                    clipped={m.clipped}
                                />
                            )
                        }
                    })}
            </div>
        )
    } else {
        return(
            <div className={classes.noResults}>
                <img src={logo} className={classes.logo} alt="logo"/>
            </div>
        )
    }
}
export default EmailList