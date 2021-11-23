import React, { useState, useEffect } from "react";

import "./index.css";

function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Counter: ${counter}`
    }, [counter])

    return (
        <div className="App">
            <h3>Count: {counter}</h3>

            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    );
}

export default App;
