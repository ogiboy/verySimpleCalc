import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sum, setSum] = useState(0);

  const handleNumbers = (e, inputId) => {
    if (inputId === "first") {
      setFirstNumber(Number(e.target.value));
    } else if (inputId === "second") {
      setSecondNumber(Number(e.target.value));
    }
  };

  const handleButton = () => {
    const result = firstNumber + secondNumber;
    setSum(result);
  };

  return (
    <div className="App">
      <h1>İki Sayıyı Toplama</h1>

      <div className="number-inputs">
        <input
          onChange={(e) => handleNumbers(e, "first")}
          type="number"
          className="input is-large"
          placeholder="0"
        />
        <input
          onChange={(e) => handleNumbers(e, "second")}
          type="number"
          className="input is-large"
          placeholder="0"
        />
      </div>

      <button onClick={handleButton}>Topla!</button>

      <h2>{sum}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
