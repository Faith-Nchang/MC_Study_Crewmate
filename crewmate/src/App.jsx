
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  const img_url = 'https://www.montgomerycollege.edu/_images/global/mc_horiz_rgb.svg';
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={img_url} alt="Crew Mate Logo" className="logo" />
        <h1>Crew Mate</h1>
        <p>Your platform to form study groups and connect with classmates.</p>
        <div className="button-container">
          <Link to="/home">
            <button className="cta-button">Home</button>  
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
