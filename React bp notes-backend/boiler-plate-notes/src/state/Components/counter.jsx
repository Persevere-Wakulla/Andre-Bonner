//1 import react
import { useState } from 'react';
// import react from 'react';
// 2 create component
export default function Counter() {
  // 3 setup our useState
  // [varName, setVarName] = react.useSate(initialStateValue)
  // Numbers and Booleans
  // const [count, setCount] = react.useState(0)
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Interview NERD STUFF!
  const arr = ['I', 'Am', 'Some', 'Words']; //stores in memoray 1456
  const newArr = arr; // hey this is still memory 1456
  const copiedArr = [...arr]; // This is a new arr pointing to a different memory! 1489
  console.log(arr);
  newArr.push('123');
  console.log(newArr);
  console.log(arr === copiedArr); // true?
  console.log(newArr);

  function handleDarkMode() {
    // highorder method
    // false => true / true => false
    // !false === true !true === false
    setDarkMode((currentState) => !currentState);
    console.log(darkMode);
  }

  //   if I am in light it say light/ dark it say dark
  const lightOrDarkMode = darkMode ? 'Dark' : 'Light';

  function handleClick() {
    // We want to call the setter/updater function
    //? okay way
    // Mutating = EVIL!
    setCount(count + 1); //change the same memoray 5 times
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    //? best practice
    // our setter functional
    // When you care about the previous state
    // try our best to not mutate our state and use functional practices
    setCount((currentState) => currentState + 1); // 0 + 1 returning new memory address
    setCount((currentState) => currentState + 1); // 1 + 1
    setCount((currentState) => currentState + 1); // 1 + 1
  }

  //   darkMode background black text should be white
  //   lightMode background white text should be black
  const darkModeStyle = darkMode
    ? { backgroundColor: 'black', color: 'white', height: '100vh' }
    : { backgroundColor: 'white', color: 'black', height: '100vh' };
  const style = darkModeStyle;

  function AmIOn() {
    return (
      <div>
        <h1>IT BURNS!</h1>
      </div>
    );
  }

  return (
    <div style={darkModeStyle}>
      <p>{count}</p>
      {/* events in React */}
      <button onClick={handleClick}>Count + 1</button>
      <button onClick={handleDarkMode}>{lightOrDarkMode} Mode</button>
      {/* I want this component to be rendered or not */}
      {!darkMode && <AmIOn />}
    </div>
  );
}
