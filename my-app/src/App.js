import React from 'react';
import Header from './Components/Header/Header'
import EmailList from './Components/Body/EmailList.js'
import './App.css'
import ResultsTable from './Components/Header/ResultsTable/ResultsTable';
import ResultNumber from './Components/Header/ResultNumber/ResultNumber';
import ResultsTableMobile from './Components/MobileBody/ResultsTableMobile';
import ResponsiveLayout from './Components/MobileBody/ResponsiveLayout';
import EmailListMobile from './Components/MobileBody/EmailListMobile';
import logo from './Assets/icons/logo.png'
import { makeStyles } from '@material-ui/core/styles';

const result = 10

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    width: "1000px",
    height: "800px",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    height: "30vh",
  }
}));

function App() {
  const classes = useStyles()
  const renderEmails = (results) => {
    if(!results) {
      return (
        <div className="App">
          <Header />
          <ResultNumber results={result}/>
          <hr/>
          <div className={classes.container}>
            <img src={logo} className={classes.logo} alt="logo"/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
            <Header />
            <ResultNumber results={result}/>
            <ResponsiveLayout
              renderDesktop={() => 
                <div> 
                  <hr/>
                  <ResultsTable />
                  <hr />
                  <EmailList />
                </div>
              }
              renderMobile={() => 
                <div>
                  <hr/>
                  <ResultsTableMobile />
                  <hr />
                  <EmailListMobile />
                </div>
              }
            />
        </div>
      )
    }
  } 

  return (
    <div>
    {/* if the Results variable is 0, represents no results on the search of emails */}
      {renderEmails(result)}
    </div>
  );
}

export default App;
