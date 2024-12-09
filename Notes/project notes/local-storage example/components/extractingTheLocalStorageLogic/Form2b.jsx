import { useLocalStorage } from "../../useLocalStorage";

const Form2b = () => {
    const [name, setName] = useLocalStorage("name2", "");
    const [checked, setChecked] = useLocalStorage("checked", false);

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
                    id="" />{" "}
                NOT a robot?
            </label>
            <input
                type="submit"
                value="Submit"
                className="border-black p-2 bg-black text-white m-5 rounded-md" />
        </form>
    );
};
export default Form2b;