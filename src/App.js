import React, { useState } from 'react';
import './App.css';

import presentbox from './images/presentbox.png';
import velo from './images/velo.png';

////random number generating function makes magicNumber, takes in highest possible value
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const magicNumber = getRandomInt(10);

function App() {

  ////state tracks count
  const [count, setCount] = useState(0);

  let conditionalButton = <button onClick={() => setCount(count + 1)}>Clicky</button>;

  ////this box will change into a velociraptor when count equals magicNumber
  let box = presentbox;

  if( count >= magicNumber ){
    ////turn the box into  a velociraptor
    box = velo;

    conditionalButton = <button onClick={() => setCount(0)}>Reset</button>;
  
  }

 
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={box} className="present" alt="logo" />

        <p>
          I clicked {count} times
        </p>
       
        {conditionalButton}

      </header>
    </div>
  );
}

export default App;
