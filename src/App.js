// * Libraries
import { useEffect, useState } from "react";
import countapi from "countapi-js";

// * Assets
import logo from "./assets/code-venture-icon.svg";
import "./App.css";

const NAMESPACE = "codeventure";
const KEY = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";

function App() {
  const [currentCount, setcurrentCount] = useState(0);

  useEffect(() => {
    getCurrentCount();
  }, []);

  const getCurrentCount = async () => {
    await countapi.get(NAMESPACE, KEY).then((result) => {
      // console.log("COUNT", count);
      setcurrentCount(result.value.toString());
    });
  };

  const hitCounter = async () => {
    await countapi.hit(NAMESPACE, KEY).then((result) => {
      // console.log("hitCounter", result);
      setcurrentCount(result.value.toString());
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count : <code>{currentCount}</code>
        </p>
        <button onClick={() => hitCounter()} className="App-link">
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
