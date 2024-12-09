
import { useState, useEffect } from "react";

const Form1 = () => {
    // The initial value of the name state variable defaults to an empty string:
    //todo: const [name, setName] = useState("");
    
    // todo: useEffect(() => {
        // We can also use the useEffect React Hook to perform side effects, such as storing data in the browser storage. This makes this Hook a perfect place to call the setItem method.
        // storing input name
        //todo: localStorage.setItem("name", JSON.stringify(name));
        // Here, we’ve assigned a key, "name", and a dynamic value from the state variable, which is name.
        // Using JSON.stringify in the setItem is optional when saving string data to the storage:
        //? localStorage.setItem("name", JSON.stringify(name));
        // However, JSON.stringify is required if the value is a different data type, like an object or array. Now, save the file and test the project; we should see the following render:
//! GO TO APPLICATION IN DEVTOOLS
        //* http://localhost:5173
//* http://localhost:5173
//* key	value	
//* name	"andre BONNER"	


        // On every keystroke, the input value is saved in the local storage because the useEffect Hook holding the setItem storage method runs on the first component render and after every state change.

// However, on a page reload, the value in the storage returns to an empty string. This is happening because we’ve assigned a default empty string to the state variable, name. Hence, React uses the empty value on the initial render.
    //todo:   }, [name]);
// ***************************************************
    //! Now, instead of assigning an empty string, we must get the updated state value at every point from the storage and assign it as the default state value.
    //todo: Reading data from localStorage
    //* On an initial page load, instead of assigning an empty string to the name state variable, we must assign a function that accesses the local storage, retrieves the saved value, and uses that value as the default.
    //todo: Using the getItem() method
    // Update the useState Hook in the components/Form1.js file:
    const [name, setName] = useState(()=> {
        // getting stored value
        const saved = localStorage.getItem("name");
        // Here, we use the getItem() storage method to retrieve data from the local storage.
        const initialValue = JSON.parse(saved);
        // The JSON.parse() used in the code deserializes the returned JSON string from the storage. Both JSON.stringify and JSON.parse are optional when working with string values, as seen in our case. However, other data types, like objects and arrays, require them.
        return initialValue || "";
    });
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);
    console.log(name) 
    return (
        <form>
            <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            aria-label="fullname"
            className="border-black p-2 outline m-5 rounded-md"
            /> <br />
            <input 
            type="submit" 
            value="Submit"
            className="border-black p-2 bg-black text-white m-5 rounded-md"
             />
        </form>
    )
}
export default Form1;