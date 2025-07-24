import { useEffect, useState } from "react";

const Ticker = () => {
  let [age, setAge] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    console.log(`Mounting and updating of every state `);
  }, [age]);

  useEffect(() => {
    console.log(`mounting and score updates`);
  }, [score]);

  return (
    <div className="ticker-component">
      <h3>Ticker</h3>
      <div>Age: {age}</div>
      <div>Score: {score}</div>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Increment Age
      </button>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        Increment Score
      </button>
    </div>
  );
};

const App = () => {
  let [show, setShow] = useState(false);
  let [counter, setCounter] = useState(0);

  function handleChange(e) {
    console.log(e.target);
    console.log(e.target.name);
    setShow(e.target.checked);
  }

  return (
    <>
      <div className="app">
        <label htmlFor="show-ticker">Show Ticker</label>
        <input
          type="checkbox"
          id="show-ticker"
          name="sophon"
          checked={show}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};
