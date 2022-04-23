// * Libraries
import React from "react";
import countapi from "countapi-js";

// * Assets
import "../App.css";

const NAMESPACE = "codeventure";
const KEY = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";

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
