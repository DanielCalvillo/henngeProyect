import React from 'react';
import arrowLogo from '../../Assets/icons/icon_arrow01.svg';
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
        padding: ".2rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #9c9c9c",
        borderTop: "1px solid #9c9c9c",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        backgroundColor: "#e8e8e8"
    },
    from: {
        width: "23%",
        marginLeft: ".6rem"
    },
    subject: {
        width: "20%"
    },
    to: {
        width: "11%",
        marginRight: "0"
    },
    date: {
        fontWeight: 600,
        width: "10%",
        marginRight: ".6rem"
    }
}));

function ResultsTableMobile(props) {
    const classes = useStyles();
    if (props.results) {
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
    } else {
        return null
    }
}

export default ResultsTableMobile


