import React, { useState } from 'react';
import './App.css';

import presentBox from './images/presentBox.png';
import velo from './images/velo.png';

////random number generating function makes magicNumber, takes in highest possible value
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const magicNumber = getRandomInt(10);

function App() {

  ////state tracks count
  const [count, setCount] = useState(0);

  let surpriseBox = presentBox;

  let conditionalButton = <button onClick={() => setCount(count + 1)}>Click</button>;

  if( count >= magicNumber ){
    ////turn image of box into a velociraptor
    surpriseBox = velo;

    ////make button say 'Reset' and set count to 0
    conditionalButton = <button onClick={() => setCount(0)}>Reset</button>;
  
  }

 
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={surpriseBox} className="present" alt="logo" />

        <p>
          I clicked {count} times
        </p>
       
        {conditionalButton}

      </header>
    </div>
  );
}

export default App;
