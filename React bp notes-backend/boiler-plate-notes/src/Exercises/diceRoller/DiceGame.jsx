import { useState, useEffect } from 'react';
import Dice from './components/Dice';

export default function DiceGame() {
  // Create a array of dice(numbers) state
  const [roll, setRoll] = useState([1, 1, 1]);
  const [score, setScore] = useState(0);
  // Managing State as an array
  // React no MUTATING if possible!
  // When change a state such an arr, obj make sure its attach to some sort of event, function that cause to prevent inifinite Loop
  //? Function approach
  // copy the current state as well as add an additional item
  // roll all the dice

  //   One way to do this is to copy the array, shift from the copy and set the state
  // based on the new copy
  function removeFirstItem(arr) {
    const copy = [...arr];
    copy.shift();
    setRoll(copy);
    return copy;
  }

  // If I want to change ALL of the items in an arr?
  // Map does something to every item in the arr and then returns it
  function reRoll() {
    setRoll((prev) => prev.map((item) => Math.floor(Math.random() * 6) + 1));
  }

  // TODO
  // Think of a way to add logic for a win
  // dice adds up to 7? all the same? all different numbers?
  useEffect(() => {
    const total = roll.reduce((a, c) => a + c, 0);
    const pair = roll[0] === roll [1] 
    if (total === 7) {
      setScore((prev) => (prev += 1));
    }
    if (pair) {
      setScore((prev) => (prev += 1));
    }
  }, [roll]);

  return (
    <div>
      <h1>{score}</h1>
      <Dice dices={roll} />
      <h2>Add One Item</h2>
      <button onClick={() => setRoll((prev) => [...prev, 1])}>Click</button>
      <h2>Remove First Item</h2>
      <button onClick={() => removeFirstItem(roll)}>Click</button>
      <h2>Reroll</h2>
      <button onClick={reRoll}>Click</button>
    </div>
  );
}
