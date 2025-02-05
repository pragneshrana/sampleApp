import { useState } from "react";
import axios from "axios";

function App() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleAddition = async () => {
        try {
            const response = await axios.post("http://localhost:5000/add", {
                num1,
                num2,
            });
            setResult(response.data.result);
        } catch (error) {
            alert("Error: " + (error.response?.data?.error || "Something went wrong"));
        }
    };

    return (
        <div style={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh"
        }}>
            <h2>Simple Addition App</h2>
            <input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                style={{ margin: "10px", padding: "8px" }}
            />
            <input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                style={{ margin: "10px", padding: "80px" }}
            />
            <button onClick={handleAddition} style={{ padding: "10px 20px", margin: "10px" }}>Add</button>
            {result !== null && <h3>Result: {result}</h3>}
        </div>
    );
}

export default App;
