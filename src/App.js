import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Electron React App</h1>
        <p>
          This is a React app running inside Electron!
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://www.electronjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{marginLeft: '20px'}}
        >
          Learn Electron
        </a>
      </header>
    </div>
  );
}

export default App;
