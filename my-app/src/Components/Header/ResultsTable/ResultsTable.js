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
        padding: ".2rem"
    },
    from: {
        width: "10%",
    },
    subject: {
        width: "30%",
        marginLeft: "2rem"
    },
    to: {
        width: "11%",
        marginLeft: "2.5rem"
    },
    date: {
        fontWeight: 600,
        width: "10%",
        textAlign: "right"
    }
}));

function ResultsTable() {
    const classes = useStyles();

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
        </div>
    )
}

export default ResultsTable