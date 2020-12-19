import React from 'react';


import Header from './Components/Header/';
import Dashboard from './Components/Dashboard/';

function App() {
    return (
      <div className="App">
      <Header
        text="The Timely Bizz"
      />
      <Dashboard />
    </div>
    )
}



export default App;
