import React from 'react';
import Header from './Components/Header/Header'
import EmailList from './Components/Body/EmailList.js'
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
      thread_id: 345,
      from: 'aaa@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "0:20",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1235,
      thread_id: 345,
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
      thread_id: 346,
      from: 'ddd.ddd@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "Jan 01",
      extraNum: 0,
      clipped: true
  },
  {
      id: 1238,
      thread_id: 346,
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
      thread_id: 346,
      from: 'aaa@example.com', 
      to: "zzz.zzz@example.com", 
      subject: "[HR-888] Notice of official announcement",
      date: "2019/12/31",
      extraNum: 3,
      clipped: true
  }
]

const useStyles = makeStyles(() => ({
  mobile: {
    margin: "0rem"
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
  },
  app: {
    margin: "3rem"
  }
}));

let results = mails.length;
function App() {
  const classes = useStyles()
      return (
            <ResponsiveLayout
              renderDesktop={() => 
                <div className={classes.app}> 
                  <Header />
                  <ResultNumber results={results}/>
                  
                  <ResultsTable results={results}/>
                  
                  <EmailList mails={mails} results={results}/>
                </div>
              }
              renderMobile={() => 
                <div className={classes.mobile}>
                  <Header/>
                  <ResultNumber results={results}/>                  
                  <ResultsTableMobile results={results}/>                
                  <EmailListMobile mails={mails} results={results}/>
                </div>
              }
            />
      )
} 

export default App;
