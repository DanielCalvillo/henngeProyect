import React from 'react';
import ResultNumberStyles from '../../../Assets/Styles/HeaderStyles/ResultNumberStyles'

function ResultNumber(props) {
    const classes = ResultNumberStyles()
    return (
        <div className={classes.results}>
            Results: {props.results} mail(s)
        </div>
    )
}

export default ResultNumber;