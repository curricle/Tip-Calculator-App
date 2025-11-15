import './App.css';
import logo from './images/logo.svg';
import DisplayPanel from './DisplayPanel.js';
import CalcPanel from './CalcPanel.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} alt="SPLITTER" /></h1>
      </header>

      <div className="Calculator">
        <CalcPanel />
        <DisplayPanel />
      </div>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/curricle">S. Jordan</a>.
      </div>
    </div>
  );
}

export default App;
