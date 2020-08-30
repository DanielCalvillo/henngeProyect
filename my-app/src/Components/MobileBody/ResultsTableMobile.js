import React from 'react';
import arrowLogo from '../../Assets/icons/icon_arrow01.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        // backgroundColor: "#ededed",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        fontWeight: "100",
        padding: ".2rem",
        height: "3vh",
      },
      arrowLogo: {
        marginLeft: "1vh",
        marginBottom: ".2vh",
        height: "1vh"
    },
    date: {
        marginRight: "6vh",
    },
    from: {
        fontWeight: 600
    }
}));

function ResultsTable() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.from}>
                From
                <img 
                    className={classes.arrowLogo} 
                    src={arrowLogo} 
                    alt="Calendar Logo" 
                />
            </div>
                |
            
            <div className={classes.to}>
                To
            </div>
                |
            
            <div className={classes.subject} >
                Subject
            </div>
                |
            
            <div className={classes.date}>
                Date
            </div>
        </div>
    )
}

export default ResultsTable



