import React from 'react';
import Header from './Components/Header/Header'
import EmailList from './Components/Body/EmailList.js'
import './App.css'
import ResultsTable from './Components/Header/ResultsTable/ResultsTable';

function App() {
  return (
    <div className="App">
        <Header />
        <hr/>
        <ResultsTable />
        <hr />
        <EmailList />
    </div>
  );
}

export default App;
