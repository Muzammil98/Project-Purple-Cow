// * Libraries
import React from "react";
import countapi from "countapi-js";

// * Assets
import "../App.css";

const NAMESPACE = process.env.REACT_APP_NAMESPACE;
const KEY = process.env.REACT_APP_KEY;

const Button = ({ setcurrentCount, setPreviousCount, currentCount }) => {
  const hitCounter = async () => {
    setPreviousCount(currentCount);
    await countapi.hit(NAMESPACE, KEY).then((result) => {
      setcurrentCount(result.value.toString());
    });
  };
  return (
    <button onClick={() => hitCounter()} className="App-link">
      Hit !
    </button>
  );
};

export default Button;
