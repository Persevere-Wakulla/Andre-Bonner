Using Local Storage with React Hooks 
!1. The code above is the simplest implementation of the form inputs in React. By using the useState React Hook to control the component, we keep the input state up to date on every keystroke, as seen above.But, once we trigger a page refresh, the input data clears, which is expected. To persist the input data so it’s available on a page reload or on subsequent revisits, we must save the data in localStorage.
    ! 2.Saving the Form input data in localStorage
    !To store the form input data in the browser storage, we must invoke the setItem() storage method by using the following syntax:
    ? localStorage.setItem("key", "value")
    
    The browser storage only accepts data-type strings. So, for values of different data types like the object or array, we must convert it to a JSON string using JSON.stringify().
    ! 3.Using the useEffect hook to perform side-effects...We can also use the useEffect React Hook to perform side effects, such as storing data in the browser storage. This makes this Hook a perfect place to call the setItem method.Open the components/Form1.js file and add the following code above the return statement:

//? useEffect(() => {
   storing input name
?   localStorage.setItem("name", JSON.stringify(name));
? }, [name]);
 Make sure to import the useEffect from React like so:
? import { useState, useEffect } from "react";

 Here, we’ve assigned a key, "name", and a dynamic value from the state variable, which is name. The initial value of the name state variable defaults to an empty string:
//? const [name, setName] = useState("");

 Using JSON.stringify in the setItem is optional when saving string data to the storage:

//? localStorage.setItem("name", JSON.stringify(name));

 However, JSON.stringify is required if the value is a different data type, like an object or array. Now, save the file and test the project

 On every keystroke, the input value is saved in the local storage because the useEffect Hook holding the setItem storage method runs on the first component render and after every state change.However, on a page reload, the value in the storage returns to an empty string. This is happening because we’ve assigned a default empty string to the state variable, name. Hence, React uses the empty value on the initial render.

! 4.Now, instead of assigning an empty string, we must get the updated state value at every point from the storage and assign it as the default state value.

*Reading data from localStorage
! 5.On an initial page load, instead of assigning an empty string to the name state variable, we must assign a function that accesses the local storage, retrieves the saved value, and uses that value as the default.

Using the getItem() method
Update the useState Hook in the components/Form1.js file:

? const [name, setName] = useState(() => {
getting stored value
?   const saved = localStorage.getItem("name");
?   const initialValue = JSON.parse(saved);
?   return initialValue || "";
? });
 Here, we use the getItem() storage method to retrieve data from the local storage. The JSON.parse() used in the code deserializes the returned JSON string from the storage. Both JSON.stringify and JSON.parse are optional when working with string values, as seen in our case. However, other data types, like objects and arrays, require them.

 Save the file and test the project. The input data should be available in the form field on a page reload or a later page visit: