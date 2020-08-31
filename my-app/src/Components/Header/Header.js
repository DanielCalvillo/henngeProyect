import React, { useState} from 'react';
import iconCalendar from '../../Assets/icons/icon_calender.svg';
import iconSearch from '../../Assets/icons/icon_search.svg';
import Container from '@material-ui/core/Container';
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';

//styles
import "react-datepicker/dist/react-datepicker.css";
import HeaderStyles from '../../Assets/Styles/HeaderStyles/HeaderStyles'

function Header() {
    const classes = HeaderStyles()

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`StartDate: ${startDate.toJSON() }\nEndDate: ${endDate.toJSON()}`)
        console.log("submited")
    }

    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));

    return ( 
    <Container maxWidth="sm" className={classes.container}>
        <div className={classes.datepickerAndCalendarLogo}>
            <img 
                className={classes.calendarLogo} 
                src={iconCalendar} 
                alt="Calendar Logo" 
            />
            <div className={classes.datepickerContainer}>
                        <div className={classes.datePicker}>
                            <DatePicker
                                selected={startDate}
                                className={classes.dateSelectorOne}
                                onChange={date => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                            />
                            <span>-</span>
                            <DatePicker
                                selected={endDate}
                                className={classes.dateSelector}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                        </div>
            </div>
        </div>
            <Button  
                variant="outlined"
                onClick={handleSubmit}
                color="primary" 
                className={classes.searchButton}
            >
                {<img 
                    className={classes.searchLogo} 
                    src={iconSearch} 
                    alt="Search Logo"
                />}
            </Button>
        
      </Container>
    );
}

export default Header;


