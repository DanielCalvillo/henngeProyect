import { makeStyles } from '@material-ui/core/styles';

const ResultsTableStyles = makeStyles(() => ({
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
        marginTop: "1rem",
        borderBottom: "1px solid #9c9c9c",
        borderTop: "1px solid #9c9c9c",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        backgroundColor: "#f5f5f5",
        paddingLeft: "1rem"
    },
    from: {
        width: "20%",
    },
    subject: {
        width: "30%",
        marginLeft: "11rem",
        paddingLeft: "1.5rem"
    },
    to: {
        width: "20%",
        marginLeft: "-1rem",
        paddingLeft:"1.5rem"
    },
    date: {
        fontWeight: "bold",
        width: "5%",
        textAlign: "left",
        paddingLeft: "10rem",
    }
}));

export default ResultsTableStyles