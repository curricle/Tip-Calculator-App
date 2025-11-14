import logo from './logo.svg';
import './App.css';
import DisplayPanel from './DisplayPanel.js';
import CalcPanel from './CalcPanel.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SPLITTER</h1>
      </header>

      <CalcPanel />
      <DisplayPanel />
    </div>
  );
}

export default App;
