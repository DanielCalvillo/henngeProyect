import React from 'react';

import './ResultNumber.css'

function ResultNumber(props) {

    return (
        <div className="results">
            Results: {props.results} mail(s)
        </div>
    )
}

export default ResultNumber;