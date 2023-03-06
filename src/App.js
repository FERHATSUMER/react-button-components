import Button from "./components/Buttonn.jsx";
import "./App.css";
import  Button  from "bootstrap";

function App() {
  return <div className="App">
    <Button size={'small'}  disable={true} innerText={'disable'}/>
    <Button size={'large'}  disable={false} innerText={'disable'}/>
    <Button size={'large'}  disable={false} innerText={'disable'}/>
    <Button size={'large'}  disable={false} innerText={'disable'}/>
  </div>;
}

export default App;
