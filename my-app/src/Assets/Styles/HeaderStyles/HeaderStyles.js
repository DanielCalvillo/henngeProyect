import { makeStyles } from '@material-ui/core/styles';

const HeaderStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        marginLeft: "0",
        marginTop: "2rem",
        marginBottom: "2rem",
        padding: "0"
    },
    datepickerAndCalendarLogo: {
        display: "flex",
        borderStyle: "solid",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderColor: "#9c9c9c",
        borderWidth: "thin",
        padding: "0.25rem 0 0.25rem 1rem"
    },
    datepickerContainer: {
        marginTop: "1.3vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
    },
    dateSelectorOne: {
        width: "70px",
        height: "rem",
        border: "none",
        paddingLeft: "1rem",

    },
    dateSelector: {
        width: "80px",
        height: "2rem",
        border: "none",
        paddingLeft: ".5rem",
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
        width: "1.75rem"
    },
    datePicker: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "nowrap",
        justifyContent: "centre",
        '&:focus':{
            outline: "none"
        }
    }
}));

export default HeaderStyles