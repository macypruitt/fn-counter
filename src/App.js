import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import presentbox from './images/presentbox.png';
import velo from './images/velo.png';
import particlesJS from 'particles.js';

function App() {

  const [count, setCount] = useState(0);

 

  let box = presentbox;

  if(count>3){
    box = velo;
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={box} className="present" alt="logo" />
        <p>
          I clicked {count} times
        </p>
        <button onClick={() => setCount(count + 1)}>Clicky</button>
      </header>
    </div>
  );
}

export default App;
