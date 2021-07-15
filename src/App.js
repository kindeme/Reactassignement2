import React, { useState } from "react";

const App = () => {
  let [score, setScore] = useState(0);

  return (
    <div>
      <h1 className="title">Hey this is my Counter application </h1>
      <div className="container">
        <h3 className="section-title"> The value of score is {score}</h3>
        <button
          className="btn"
          onClick={() => (score < 25 ? setScore(score + 1) : "")}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={() => (score > 0 ? setScore(score - 1) : "")}
        >
          Decrement
        </button>
        <button
          className="btn"
          onClick={() => {
            setScore(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
