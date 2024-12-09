import { useState } from 'react';

export default function Objects() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@example.com',
    id: crypto.randomUUID(), //create a random Unique Id
    location: {
      city: 'valdosta',
      state: 'GA',
    },
  });
  // Simple Sign up form

  //? Treat all state in React as immutable.
  // mutate
  const arr = [1, 2, 3, 4]; // updating/adding original data/var
  arr.push(5);
  // to make our state Immutable we need to use immutable
  // to create a copy of the data
  const copy = [...arr]; //shallow copy

  //? When you store objects/arr in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
  //? Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.

  //? You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.

  //? Spread syntax is shallow: it only copies one level deep.

  // To update a nested object, you need to create copies all the way up from the place you’re updating.

  //   Event Listener
  // We need to listen to the event target(input) grab the value
  // setState of the value
  function handleFirstName(e) {
    console.log(e.target.value); // the input of the user
    // setState of our person
    // what property
    // While this one correct way, we are overridde our previous propertys
    //  setPerson({firstName: e.target.value})
    // copying our old obj, hey I want only first to be changed
    setPerson({ ...person, firstName: e.target.value });
    console.log(person);
  }
  function handleLastName(e) {
    setPerson({ ...person, lastName: e.target.value });
    console.log(person);
  }
  function handleEmail(e) {
    setPerson({ ...person, email: e.target.value });
    console.log(person);
  }
  function handleLocation(e) {
    // const changeLocation = { ...person.location, city: e.target.value };
    // const newObj = { ...person, location:changeLocation };
    setPerson({ ...person, location: { ...location, city: e.target.value } });
    console.log(person);
  }

  //   React and Forms/Input
  // eventListener setState
  // input value attribute, reflect the states current value
  function reset() {
    // delete state, keep the property
    // setPerson({
    //   firstName: '',
    //   lastName: '',
    //   id: person.id,
    //   email: '',
    //   location: { city: '', state: '' },
    // });
    // console.log(person);
    document.querySelectorAll('input').forEach(input => input.value = '')
    // console.log(person)
  }

  return (
    <div>
      <label htmlFor="fname">First Name:</label>
      <input
        type="text"
        id="fname"
        onChange={handleFirstName}
        value={person.firstName}
      />
      <label htmlFor="lname">Last Name:</label>
      <input
        type="text"
        id="lname"
        onChange={handleLastName}
        value={person.lastName}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        onChange={handleEmail}
        value={person.email}
      />
      <label htmlFor="location">Location: </label>
      <input
        type="text"
        id="location"
        onChange={handleLocation}
        value={person.location.city}
      />
      <p>
        {person.firstName} {person.lastName} {person.email}{' '}
        {person.location.city}
      </p>
      <button onClick={reset}>Reset All</button>
    </div>
  );
}
