import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EffectExample from "./components/EffectExample";
import { Button } from "react-bootstrap";
// import StateExample from "./components/StateExample";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* <StateExample /> */}
        {toggle && <EffectExample />}

        <Button variant="info" onClick={() => setToggle(!toggle)}>
          Monta/smonta componente
        </Button>
      </header>
    </div>
  );
}

export default App;
