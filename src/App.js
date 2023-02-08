import './App.css';
import React, { useState } from 'react';
import CountrySearch from './CountrySearch';
import Navbar from "./Navigation/Navbar.js";

function App() {
  const [countryName, setCountryName] = useState("");

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Lunch and Learn</h1>
        <p>Find Recipes by Country</p>
          <CountrySearch setCountryName={setCountryName}/>
      </header>
    </div>
  );
}

export default App;
