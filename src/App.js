import Button from "./components/Button.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button  
      onClick={() => setShow((show) => !show)}>
        {show ? "Gizle" : "Göster"}
      </button>
      {show && (
        <Button
          size={"medium"}
          disable={false}
          innerText={"disable"}
          color={"danger"}
        />
      )}
      {show && (
        <Button
          size={"xLarge"}
          disable={false}
          innerText={"disable"}
          color={"success"}
        />
      )}

      {show && (
        <Button
          size={"large"}
          disable={false}
          innerText={"disable"}
          color={"success"}
        />
      )}
    </div>
  );
}

export default App;
