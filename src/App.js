// * Libraries
import { useEffect, useState } from "react";
import countapi from "countapi-js";

// * Components
import Button from "./components/Button";
import Counter from "./components/Counter";

// * Assets
import logo from "./logo.svg";
import "./App.css";

const NAMESPACE = "codeventure";
const KEY = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";

function App() {
  const [currentCount, setcurrentCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);

  useEffect(() => {
    getCurrentCount();
  }, []);

  const getCurrentCount = async () => {
    await countapi.get(NAMESPACE, KEY).then((result) => {
      setcurrentCount(result.value.toString());
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter currentCount={currentCount} previousCount={previousCount} />

        <Button
          setcurrentCount={setcurrentCount}
          currentCount={currentCount}
          setPreviousCount={setPreviousCount}
        />
      </header>
    </div>
  );
}

export default App;
