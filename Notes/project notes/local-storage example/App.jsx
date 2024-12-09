import Form1b from "./components/extractingTheLocalStorageLogic/Form1b";
import Form2b from "./components/extractingTheLocalStorageLogic/Form2b";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
const App = () => {
    return (
        <div className="container">
            <h1>Local Storage with React Hooks Exercise</h1>
            <Form1 />
            <Form2 />
            <Form1b />
            <Form2b />
        </div>
    )
}
export default App;