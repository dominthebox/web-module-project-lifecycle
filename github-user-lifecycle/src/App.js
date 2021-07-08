import React from 'react';
// import axios from 'axios';
import './App.css';
import Followers from './components/Followers';
import User from './components/User';


function App() {

  
  return(
      <div className="App">
        <h1>GitHub User Card</h1>
        <User />
        <Followers />
      </div>
    )
  
}

export default App