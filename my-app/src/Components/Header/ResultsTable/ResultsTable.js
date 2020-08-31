import React from 'react';
import arrowLogo from '../../../Assets/icons/icon_arrow01.svg';
import ResultsTableStyles from '../../../Assets/Styles/HeaderStyles/ResultsTableStyles'

function ResultsTable(props) {
    const classes = ResultsTableStyles();
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