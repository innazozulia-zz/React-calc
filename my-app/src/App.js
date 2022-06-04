import React from "react";
import "./App.css";

function App() {
  const [valueOne, setValueOne] = React.useState(0);
  const [valueTwo, setValueTwo] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [operator, setOperator] = React.useState("");
  // const [clear, setClear] = React.useState(false);

  const add = () => {
    setResult(Number(valueOne) + Number(valueTwo));
    setOperator("+");
  };
  const minus = () => {
    setResult(Number(valueOne) - Number(valueTwo));
    setOperator("-");
  };
  const multiple = () => {
    setResult(Number(valueOne) * Number(valueTwo));
    setOperator("*");
  };
  const devide = () => {
    setResult(Number(valueOne) / Number(valueTwo));
    setOperator("/");
  };
  // const close = () => {
  //   setClear(true);
  //   // result = "";
  //   // valueOne = "";
  //   // valueTwo = "";
  // };

  return (
    <div className="App">
      <h1>React calculator</h1>
      <div className="result">
        <h3>result : {result}</h3>
        <button>Clear</button>
      </div>
      <div className="container">
        <div className="value__one">
          <p className="result__one">{valueOne}</p>
          <input
            value={valueOne}
            onChange={(event) => setValueOne(event.target.value)}
          />
          <svg
            onClick={() => setValueOne("")}
            className="delete__input"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Layer 2">
              <g data-name="close">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />
                <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
              </g>
            </g>
          </svg>
        </div>
        <div className="operator">{operator}</div>
        <div className="value__two">
          <p>{valueTwo}</p>
          <input
            value={valueTwo}
            onChange={(event) => setValueTwo(event.target.value)}
          />
          <svg
            onClick={() => setValueTwo("")}
            className="delete__input"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Layer 2">
              <g data-name="close">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />
                <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
              </g>
            </g>
          </svg>
        </div>

        <div className="operations">
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
          <button onClick={multiple}>multiple</button>
          <button onClick={devide}>devide</button>
        </div>
      </div>
    </div>
  );
}

export default App;
