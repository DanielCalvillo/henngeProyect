import React from 'react';
import arrowLogo from '../../../Assets/icons/icon_arrow01.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    arrowLogo: {
        height: ".4rem",
        marginRight: "1rem",
        marginLeft: ".5rem"
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        fontWeight: "100",
        marginTop: "1rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #9c9c9c",
        borderTop: "1px solid #9c9c9c",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        backgroundColor: "#e8e8e8"
    },
    from: {
        width: "20%",
    },
    subject: {
        width: "30%",
        marginLeft: "3rem"
    },
    to: {
        width: "20%",
        marginLeft: "2.5rem"
    },
    date: {
        fontWeight: 600,
        width: "20%",
        textAlign: "right"
    }
}));

function ResultsTable(props) {
    const classes = useStyles();
    if (props.results) {
        return (
            <div className={classes.container}>
            
                <div className={classes.from}>
                    From
                </div>
                <div className={classes.to}>
                    To
                </div>
                <div className={classes.subject} >
                    Subject
                </div>
                <div className={classes.date}>
                    Date
                    <img 
                        className={classes.arrowLogo} 
                        src={arrowLogo} 
                        alt="Calendar Logo" 
                    />
                </div>
                <hr />
            </div>
        )
    } else {
        return null
    }
}

export default ResultsTable