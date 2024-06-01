import './App.css';
import React from 'react';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity= "Barcelona"/>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Joanafgg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joana Garcia{" "}
          </a>{" "}
          and is open-sourced
          <a
            href="https://github.com/Joanafgg/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""} on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
