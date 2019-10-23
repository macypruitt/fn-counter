import React, { useState } from 'react';
import './App.css';

import presentbox from './images/presentbox.png';
import velo from './images/velo.png';

////random number generating function makes magicNumber
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const magicNumber = getRandomInt(10);

function App() {

  ////state tracks count
  const [count, setCount] = useState(0);

  ////this box will change into velociraptor when count meets magicNumber
  let box = presentbox;
  if( count >= magicNumber ){
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
