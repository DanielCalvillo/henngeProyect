import { makeStyles } from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
import iconCalendar from '../../Assets/icons/icon_calender.svg';
import iconSearch from '../../Assets/icons/icon_search.svg';
import { ValidatorForm } from "react-material-ui-form-validator";
// import useInputState from "../../hooks/useInputState"
import Container from '@material-ui/core/Container';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        width: "310px",
        paddingRight:"1vh",
        marginLeft: "0",
        marginTop: "6vh",
        marginBottom: "4vh"
    },
    datepickerAndCalendarLogo: {
        display: "flex",
        borderStyle: "solid",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderColor: "#9c9c9c",
        borderWidth: "thin" 
    },
    datepickerContainer: {
        marginTop: "1.3vh",
        width: "200px"
    },
    dateSelectorOne: {
        width: "70px",
        height: "4vh",
        border: "none",
        paddingLeft: "3vh"

    },
    dateSelector: {
        width: "80px",
        height: "4vh",
        border: "none",
        paddingLeft: "1vh"
    },
    searchButton: {
        height: "7vh",
        borderColor: "#737373",
        borderRadius: "0",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px"
    },
    searchLogo: {
        height: "1.5rem"
    },
    calendarLogo: {
        marginTop: "1rem",
        marginLeft: "1rem",
        height: "2rem"
    }
}));

function Header() {
    const classes = useStyles();

    // const [value, handleChange, reset] = useInputState("")

    useEffect( () => {
        console.log("entrando al efecto")
        ValidatorForm.addValidationRule("isColorNameUnique", value => 
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !==  value.toLowerCase()
            )
        );
    })

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
                <ValidatorForm instantValidate={false} className={classes.root} >
                        <div className={classes.datePicker}>
                            <DatePicker
                                selected={startDate}
                                className={classes.dateSelectorOne}
                                onChange={date => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                            />
                            -
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
                </ValidatorForm>
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


