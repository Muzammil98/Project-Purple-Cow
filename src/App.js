// * Libraries
import { useEffect, useState } from "react";
import countapi from "countapi-js";
import CountUp from "react-countup";

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

  const CountAnimated = () => {
    return (
      <CountUp
        end={currentCount}
        duration={1}
        separator=","
        decimal=","
        delay={0}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>
          Count : <code> <CountAnimated /></code>
        </h1>
       
        <button onClick={() => hitCounter()} className="App-link">
          Hit me !
        </button>
      </header>
    </div>
  );
}

export default App;
