import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        backgroundColor: "#ededed",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        fontWeight: "100",
        padding: ".2rem",
        height: "3vh",
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
            <div className="mail-text subject">
                Subject
            </div>
            <div className="mail-text date">
                Date
            </div>
        </div>
    )
}

export default ResultsTable