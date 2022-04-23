// * Libraries
import { useEffect, useState } from "react";
import countapi from "countapi-js";

// * Assets
import logo from "./assets/code-venture-icon.svg";
import "./App.css";

function App() {
  const [currentCount, setcurrentCount] = useState(0);

  useEffect(() => {
    getCurrentCount();
  }, []);

  const getCurrentCount = async () => {
    await countapi
      .get("codeventure", "1ccb732e-b55a-4404-ad3f-0f99c02fe44e")
      .then((result) => {
        // console.log("COUNT", count);
        setcurrentCount(result.value.toString());
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {currentCount}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
