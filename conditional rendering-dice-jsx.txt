import { useState } from 'react';

export default function Dice() {
  // Roll random 1-6

  const randomNumber = Math.floor(Math.random() * 6) + 1;
//   const [value, setValue] = useState(randomNumber);

  // if statement
  // you write the if then code has the return
  //   if (randomNumber === 1 || randomNumber === 6) {
  //     return <h1>Result {randomNumber} You WIN!</h1>;
  //   }
  // Ternary
  // You write the ternary in the return
  // You can store this in a variable!
  const isWinner =
    randomNumber === 1 || randomNumber === 6 ? (
      <h1>Result {randomNumber} You WIN!</h1>
    ) : null;
  //   return isWinner
  // return randomNumber === 1 || randomNumber === 6 ? <h1>Result {randomNumber} You WIN!</h1> : null

  //   &&
  const didWin = randomNumber === 6 || randomNumber === 1;
  const style = { color: didWin ? 'green' : 'red' };
  //   return didWin && <h1 style={style}>Result {randomNumber} You WIN!</h1>;

  function rollDie() {
    setValue(Math.floor(Math.random() * 6) + 1);
  }

  return (didWin && <h1 style={style}>Rolled: {randomNumber}</h1> );
//   const displayWinner = <div>
//       {value === 6 ? (
//         <div>
//           <h1>Rolled: Winner {value}</h1>
//           <button onClick={rollDie}>Reroll</button>
//         </div>
//       ) : null}
//     </div>

}
