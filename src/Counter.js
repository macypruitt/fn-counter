import React, { useState } from 'react';
import presentImg from './images/presentBox.png';
import velociraptorImg from './images/velo.png';

function generateRandomInt() {
    let num = (Math.floor(Math.random() * 10));
    return num > 0? num : generateRandomInt;
}

function Counter() {
     
    const [count, setCount] = useState(0);
    const [mysteryNumber, setMysteryNumber] = useState(generateRandomInt())

    let match = count === mysteryNumber;

    const handleButtonClick = () => setCount(!match? count + 1 : resetCount)
    const resetCount = () => {
      setCount(0) 
      setMysteryNumber(generateRandomInt)
    }

    return(
        <div>
            <img src={ match ? velociraptorImg : presentImg } className="present" alt="surprise" />

              <p>
                  Clicked {count} times
              </p>
              
              <button 
                onClick={handleButtonClick}>
                  {match ? 'Reset' : 'Click'}
              </button>
          </div>
        )

}

export default Counter;
