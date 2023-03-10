import { Tabs } from "antd";
import "./App.css";
import { Buttons, Interval } from "./pages";

function App() {
  const items = [
    {
      key: "1",
      label: `Button`,
      children: <Buttons />,
    },
    {
      key: "2",
      label: `Interval`,
      children: <Interval />,
    },
  ];
  return (
    <div>
      <img className="logo" src="https://media.licdn.com/dms/image/D4D0BAQHmXkRET-1d3A/company-logo_200_200/0/1664579496508?e=1686787200&v=beta&t=2846NHpWiKM18qqwL_QdOvjsXSGm-SyM5afvvAF_UoY" alt="logo"  />
      <Tabs className="tabs" defaultActiveKey="1" items={items} />
    </div>
  );
}

export default App;
