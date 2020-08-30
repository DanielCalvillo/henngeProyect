import React from 'react';
import Header from './Components/Header/Header'
import EmailList from './Components/Body/EmailList.js'
import './App.css'
import ResultsTable from './Components/Header/ResultsTable/ResultsTable';
import ResultNumber from './Components/Header/ResultNumber/ResultNumber';
import ResultsTableMobile from './Components/MobileBody/ResultsTableMobile';
import ResponsiveLayout from './Components/MobileBody/ResponsiveLayout';
import EmailListMobile from './Components/MobileBody/EmailListMobile';

function App() {
  return (
    <div className="App">
        <Header />
        <ResponsiveLayout
          renderDesktop={() => 
            <div> 
              <ResultNumber results={10}/>
              <hr/>
              <ResultsTable />
              <hr />
              <EmailList />
            </div>
          }
          renderMobile={() => 
            <div>
              <ResultNumber results={10}/>
              <hr/>
              <ResultsTableMobile />
              <hr />
              <EmailListMobile />
            </div>
          }
        />
    </div>
  );
}

export default App;
