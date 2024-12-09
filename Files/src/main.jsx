import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './boilerPlate/App.jsx';
import './boilerPlate/index.css';
import PackingList from './conditional rendering/components/PackList.jsx';
import DiceCollection from './conditional rendering/components/DiceCollection.jsx';
import Weather from './Exercises/weather/Weather.jsx';
import Menu from './Exercises/recipe/Menu.jsx';
import Counter from './state/Components/counter.jsx';
import DiceGame from './Exercises/diceRoller/DiceGame.jsx';
// import Box from './state updating functions/BoxGrid.jsx';
import BoxGrid from './state updating functions/BoxGrid.jsx';
import Objects from './objects and state/components/Objects.jsx';
import Chatroom from './useEffect/UseEffect.jsx';
import UserPost from './useEffect/exercises/UserPost.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
     */}
    {/* <PackingList /> */}
    {/* <DiceCollection /> */}
    {/* <Weather/> */}
    {/* <Menu  /> */}
    {/* <Counter/> */}
    {/* <DiceGame /> */}
    {/* <Box /> */}
    {/* <BoxGrid numberOfBoxes={5} /> */}
    {/* <Objects /> */}
    {/* <Chatroom /> */}

    < UserPost />
  </React.StrictMode>
);
