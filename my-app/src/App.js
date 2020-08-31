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

let mails = [
  {
      id: 1234,
      from: 'aaa@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "0:20",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1235,
      from: 'bbb.bbb@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "0:10",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1236,
      from: 'ccc@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "0:00",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1237,
      from: 'ddd.ddd@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "Jan 01",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1238,
      from: 'hhh@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "Jan 01",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1239,
      from: 'aaa@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "Jan 01",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1244,
      from: 'aaa@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "Jan 01",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1334,
      from: 'aaa@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "Jan 01",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1254,
      from: 'aaa@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "2019/12/31",
      extraNum: 4,
      clipped: true
  },
  {
      id: 3234,
      from: 'aaa@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "2019/12/31",
      extraNum: 3,
      clipped: true
  }
]

const result = 10

const useStyles = makeStyles(() => ({
  mobile: {
    margin: "0"
  },
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
        <div className={classes.mobile}>
            <Header />
            <ResultNumber results={result}/>
            <ResponsiveLayout
              renderDesktop={() => 
                <div> 
                  <hr/>
                  <ResultsTable />
                  <hr />
                  <EmailList mails={mails}/>
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
      renderEmails(result)
    );
}

export default App;
