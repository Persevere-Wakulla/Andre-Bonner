import { useLocalStorage } from "../../useLocalStorage"

const Form1b = () => {
    const [name, setName] = useLocalStorage("name", "");

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
export default Form1b;