import logo from './logo.svg';
import './App.css';
import DisplayPanel from './DisplayPanel.js';
import CalcPanel from './CalcPanel.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SPLI
        <br />TTER</h1>
      </header>

      <div className="Calculator">
        <CalcPanel />
        <DisplayPanel />
      </div>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
