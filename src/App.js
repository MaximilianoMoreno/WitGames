import React from 'react';
import logo from './logo.svg';
import { Router, Link } from "@reach/router";
import './App.css';
import TicTacToe from './tic-tac-toe/index';
import FourInLine from './four-in-line/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <p>
          <nav>
            <Link to="/">Home</Link>
            <Link to="tic-tac-toe">Tic Tac Toe</Link>
            <Link to="four-in-line">4 In Line</Link>
          </nav>
          
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <Router>
        <Home path="/" />
        <TicTacToe path="tic-tac-toe" />
        <FourInLine path="four-in-line" />
      </Router>
    </div>
    
  );
}

const Logo = () => (
  <img src={logo} className="App-logo" alt="logo" />  
)


const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

export default App;
