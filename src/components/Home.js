import logo from "../logo.svg";
import "../App.css";
import { faro } from "@grafana/faro-react";
import { useState } from "react";

function Home() {
  const [array, setArray] = useState(["Click button to simulate error"]);

  const handleClickError = () => {
    setArray(undefined)
    // try {
    //   throw new Error("ERROR");
    // } catch (error) {
    //   faro.api.pushError("MY CUSTOM ERROR" + error);
    // }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {array.map((item) => (
          <div key={item}>{item}</div>
        ))}
        <button onClick={handleClickError}>Button</button>
      </header>
    </div>
  );
}

export default Home;
