import { makeStyles } from '@material-ui/core/styles';

const HeaderStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        marginLeft: "0",
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    datepickerAndCalendarLogo: {
        display: "flex",
        borderStyle: "solid",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderColor: "#9c9c9c",
        borderWidth: "thin",
        paddingBottom: ".5rem" 
    },
    datepickerContainer: {
        marginTop: "1.3vh",
        width: "200px"
    },
    dateSelectorOne: {
        width: "70px",
        height: "rem",
        border: "none",
        paddingLeft: "3vh"

    },
    dateSelector: {
        width: "80px",
        height: "2rem",
        border: "none",
        paddingLeft: ".5rem"
    },
    searchButton: {
        borderColor: "#737373",
        borderRadius: "0",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px"
    },
    searchLogo: {
        height: "1.5rem"
    },
    calendarLogo: {
        marginTop: ".8rem",
        marginLeft: "1rem",
        paddingBottom: "0rem",
        height: "2rem"
    },
    datePicker: {
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "centre"
    }
}));

export default HeaderStyles