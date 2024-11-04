import { useState } from 'react';
import './App.css';

function App() {
  const img_url = 'https://www.montgomerycollege.edu/_images/global/mc_horiz_rgb.svg';

  return (
    <div className="App">
      <header className="App-header">
        <img src={img_url} alt="Crew Mate Logo" className="logo" />
        <h1>Crew Mate</h1>
        <p>Your platform to form study groups and connect with classmates.</p>
        <div className="button-container">
          <button className="cta-button">Get Started</button>
        </div>
      </header>
    </div>
  );
}

export default App;
