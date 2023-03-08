import { Tabs } from "antd";
import "./App.css";
import { Buttons, Interval } from "./pages";


function App() {
  
  const items= [
    {
      key: '1',
      label: `Button`,
      children: <Buttons/>,
    },
    {
      key: '2',
      label: `Interval`,
      children: <Interval/>,
    },
    

  ];
  return (
    <Tabs defaultActiveKey="1" items={items}  />
  );
}

export default App;
