import React from 'react';
import arrowLogo from '../../../Assets/icons/icon_arrow01.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        // backgroundColor: "#ededed",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        fontWeight: "100",
        padding: ".2rem",
        height: "3vh",
      },
    arrowLogo: {
        marginLeft: ".3vh",
        marginBottom: ".2vh",
        height: ".6vh"
    },
    dateContainer : {
        textAlign: "left",
        fontWeight: 600
    }
}));

function ResultsTable() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className="mail-text email first">
                From
            </div>
            
            <div className="mail-text email">
                To
            </div>
            <div className="mail-text subject" >
                Subject
            </div>
            <div className="mail-text date" style={{width:"100px"}}>
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