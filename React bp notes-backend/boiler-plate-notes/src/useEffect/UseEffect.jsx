import { useState, useEffect } from 'react';
//TODO https://react.dev/learn/synchronizing-with-effects
// https://daveceddia.com/useeffect-hook-examples/
// What is a side effect?

// ChatRoom example
//Consider a ChatRoom component that must connect to the chat server whenever it’s visible on the screen.
//Connecting to a server is not a pure calculation (it’s a side effect) so it can’t happen during rendering.
//However, there is no single particular event like a click that causes ChatRoom to be displayed.

// Component Life cycle
// Mount - When this component is loaded
// DidMount/Update - When you change your state, check the difference/ commit/render the app
// UnMount - the component is removed, either during a update, or from switch a new component


// ? Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.
// Sending a message in the chat is an event because it is directly caused by the user clicking a specific button.
// However, setting up a server connection is an Effect because it should happen no matter which interaction caused the component to appear.
// Effects run at the end of a commit after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).
export default function Chatroom() {
  const [user, setUser] = useState('Guest');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const [numberMessage, setMessageState] = useState('even')
  const [data, setData] = useState(null)

  //!1. NO ARRAY Fire every time our component rerenders
  // useEffect(() => {
  //   // Don't want to update the state your listening inside
  //   // setCount(prev => prev + 1)
  //   // Mount
  //   console.log(`Your Count is ${count}`)

  //   // Updates?
  //   if (count % 2 === 0){
  //     console.log('EVEN')
  //     setMessageState('even')
  //   }
  //   else {
  //     console.log('ODD')
  //     setMessageState('odd')
  //   }

  //   // UnMount
  //   return () => {
  //     console.log('I am dying!')
  //   }
  // });
  //!2. EMPTY ARRAY Fires once
  useEffect(() => {
    console.log("I have fired!, but not any more!")
    let ignore = false;
    async function fetchData(){
      const res = await fetch('https://dummyjson.com/recipes');
      const resData = await res.json()
      // console.log(resData)
      setData(resData)
    }

    if (!ignore){
      fetchData()
    }

    // fetch data
    // connect = false
    // fetch data -> connect true
    // do stuff
    return () => {
      ignore = true
    }
  }, []);
  //!3. whenever the dependency changes
  // useEffect(() => {
  //   console.log(`You count is changing! ${count}`)

  //   return () => {
  //     console.log(`Bye Bye ${count}`)
  //   }
  // }, [count]);
  // dependency primitive data, number, string, boolean
  // arr 
// const arr = [1,2,3]
// if you want to check, user arr.length











  useEffect(() => {
    // Mount/Updating
    let status = 200;
    setMessage('Connecting...');
    let messageTimer;

    if (status === 200) {
      // async code
    messageTimer = setTimeout(() => {
        // console.log('CONNECTED!');
        // console.log(`You are connected as ${user}`);
        setMessage(`welcome ${user}`);
      }, 2000);
    } else {
    messageTimer = setTimeout(() => {
        // console.log('Error');
        setMessage('Error Connecting to the chat room');
      }, 2000);
    }
    // Unmount
    return () => {
      // console.log('Logging out!');
      // console.log(`Good Bye ${user}`);
      clearTimeout(messageTimer)
    };
  }, [user]);

    useEffect(() => {
      //Do something only if a real user logs in
      let interval;

      if (user !== 'Guest') {
        interval = setInterval(() => {
          setCount((count) => count + 1);
        }, 1000);
      }

      return () => {
        clearInterval(interval);
        setCount(0);
      };
    }, [user]);
  return (
    <div>
      {/*1 Create a button that 2/3 increases our count state */}
      {/* How do I create a button? */}
      {/* How do I increase count state with my button? */}
      <button onClick={() => setCount(prevValue => prevValue + 1)}>Click me {count}</button>
      <p>{numberMessage}</p>




      <p>{message}</p>
      {/* {user !== 'Guest' && <p>You've been logged in for {count} seconds</p>} */}
      {user === 'Guest' && (
        <button onClick={() => setUser('GrassFinn')}>Login as GrassFinn</button>
      )}
      {user !== 'Guest' && (
        <button onClick={() => setUser('Guest')}>Log Out</button>
      )}
    </div>
  );
}




// There is a bug. 
// what happens when I spam click login?
// Why is that happening?
// How can we fix this?