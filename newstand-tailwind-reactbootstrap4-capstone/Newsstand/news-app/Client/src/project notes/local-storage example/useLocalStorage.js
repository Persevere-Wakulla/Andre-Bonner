// Interacting with this form does not persist the state value in localStorage because we don’t have the logic yet. So, let’s define a single logic to manage all our form inputs.

//todo: Extracting the localStorage logic

// To begin extracting the localStorage logic, create a file called useLocalStorage.js in the src folder and add the following code:

import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(()=> {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

};

// Taking a closer look at the code above, we’ve only extracted the storage logic from the components/Form1.js file. We haven’t done anything special.
//! By creating a custom Hook called useLocalStorage, we maintain all the storage logic we have in the Form1 component. Note that you can name your custom Hook anything, but ensure you start with use.
//! The useLocalStorage Hook expects two arguments: the key and the defaultValue. This means we expect to pass these values when calling the Hook in our different components.

//todo: Using the useLocalStorage custom HookIn the components/Form1.js file, replace the logic above the return statement with the custom Hook so you have the following:

//? import { useLocalStorage } from "../useLocalStorage";

// const Form1 = () => {
//?   const [name, setName] = useLocalStorage("name", "");

//   return (
//     <form>
//       {/* ... */}
//     </form>
//   );
// };

// export default Form1;
//! After importing the custom Hook, we can use it and pass along the unique key and the default value, which, in this case, is an empty string.

//todo--> If we do the same for the Form2 component in the components/Form2js file, we should have the following:

//? import { useLocalStorage } from "../useLocalStorage";

// const Form2 = () => {
//?   const [name, setName] = useLocalStorage("name2", "");
// ?  const [checked, setChecked] = useLocalStorage("checked", false);

//   return (
//     <form>
//       {/* ... */}
//     </form>
//   );
// };

// export default Form2;