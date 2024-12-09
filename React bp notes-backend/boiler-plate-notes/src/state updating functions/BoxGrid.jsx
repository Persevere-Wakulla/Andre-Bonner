import { useState } from 'react';
// Create a box that can toggle from 2 colors

// BOX click it changes colors red to black
function Box({isActive, toggle}) {
  // on or off
//   const [color, setColor] = useState(false);
  // on = green off = purple
  return (
    // 100 by 100
    // false => true true => false
    <div
        onClick={toggle}
      style={{
        width: 100,
        height: 100,
        backgroundColor: isActive ? 'purple' : 'green',
      }}
    >
      {/* // condition ? 'doSomething' : 'doSomethingElse' */}
    </div>
  );
}

export default function BoxGrid({ numberOfBoxes }) {
  // empty array of numberOfBoxes all to be set to false?
  // Shortcut to create an array of any size
  // new Array(amountOfItems).fill(replace)
  // so we can create x amount of boxes
  // Lift our state from our Boxes into our BoxGrid
  const [boxes, setBoxes] = useState(new Array(numberOfBoxes).fill(true));

  // Map loop
  // How can I PASS the data so I know how many to map?
  //prop

// ! I want to be able to click on the individual boxes but I want the color to change
// ! effect my state?

// create a function that can switch the state of one item in our box
// since our box contains the prop true/false


function reset(){
    // reset my state
    // do I care about previous?
    // return an arr 
    setBoxes(boxes.map(item => false))
}

function switchItem(index){
    // pass an index into my function 
    // then I want to loop through an array
    // does the value or our current state matter?
    setBoxes(currentState => currentState.map((item,i) => {
        // check IF the index(para) matches the index of the loop/
        if (index === i){
            // flip current item
            return !item
        }
        // we keep the current
        return item
    }))
    //  and flip the value if it matches the index 
    // being looked at 
}




  return (
    <>
      <button onClick={reset}>Reset</button>
      {boxes.map((value, index) => (
        <Box key={index} isActive={value} toggle={() => switchItem(index)}/>
      ))}
    </>
  );
}

// export default function Box() {
//   const [obj, setObj] = useState({
//     id: crypto.randomUUID(),
//     isActive: false,
//     count: 0,
//   });
//   return (
//     <div
//       onClick={() =>
//         setObj((current) => {
//           return {
//             ...current,
//             isActive: !current.isActive,
//             count: current.count + 1,
//           };
//         })
//       }
//       style={{
//         width: 100,
//         height: 100,
//         backgroundColor: obj.isActive ? 'red' : 'purple',
//       }}
//     >
//       {obj.count}
//     </div>
//   );
// }

// export default function BoxGrid({ numberOfBoxes }) {
//   const [boxes, setBoxes] = useState(new Array(numberOfBoxes).fill(false));

//   function reset(){
//     setBoxes(boxes.map(box => true))
//   }

//   function toggleBox(id) {
//     setBoxes((currentState) => {
//       return currentState.map((item, index) => {
//         if (index === id) {
//           return !item;
//         }
//         return item;
//       });
//     });
//   }

//   return (
//     <>
//       <button onClick={reset}>Reset</button>
//       {boxes.map((box, index) => (
//         <Box isActive={box} toggle={() => toggleBox(index)} key={index} />
//       ))}
//     </>
//   );
// }
