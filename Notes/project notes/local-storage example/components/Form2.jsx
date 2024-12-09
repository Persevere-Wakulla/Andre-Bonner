// Creating a custom React Hook to persist form inputs
// Sometimes we might want to render and persist more form inputs — such as a text input and a checkbox input — in a different component. While we could easily copy the logic from the one we’ve already created and use it in the new component, it’s not always practical, especially if we decide to create more of these inputs.
// Instead, React allows us to extract and share similar logic between components using custom Hooks. In this section, we will learn how to create a custom Hook to persist form inputs in multiple components.
 //todo-> Let’s start by creating another form. In the src/components folder, create a new file called Form2.js and add the following code:
 import { useState } from "react";

 const Form2 = () => {
    const [name, setName] = useState("");
    const [checked, setChecked] = useState(false);

    return (
        <form>
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            aria-label="fullname" 
            className="border-black p-2 outline m-5 rounded-md"
            />
            <label>
                <input 
                type="checkbox" 
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="border-black p-2 outline m-5 rounded-md"
                name="" 
                id="" />{"NOT a robot?"}
                
            </label>
            <input 
            type="submit" 
            value="Submit" 
            className="border-black p-2 bg-black text-white m-5 rounded-md"/>
        </form>
    );
 };

 export default Form2
//todo:  see completed version on Form2b...