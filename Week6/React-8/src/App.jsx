import { useState } from "react";
import CurrencyConverter from "./Components/CurrencyConverter";

function App() {

  const [count, setCount] = useState(5);

  // Increment counter
  const increment = () => {
    setCount(count + 1);
  };

  // Say Hello
  const sayHello = () => {
    alert("Hello! Member1");
  };

  // Multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // Welcome button
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic Event
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "10px" }}>

      <h3>{count}</h3>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br /><br />

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        Click on me
      </button>

      <br /><br />

      <CurrencyConverter />

    </div>
  );
}

export default App;