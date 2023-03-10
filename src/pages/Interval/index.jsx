import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "../../components/Button";
import { message } from "antd";

export default function Interval() {
  const [seconds, setSeconds] = useState(0);
  const [munites, setMunites] = useState(0);

  let timer = useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMunites(munites + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const restart = () => {
    messageApi.open({
      type: 'success',
      content: 'restart ',
      duration: 10,
    })
    setMunites(0);
    setSeconds(0);
  };

  const stop = () => {
    clearInterval(timer);
  };
   
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };

  return (
    <div className="timer">
      <div className="container">
        <div className="timer-container">
          <h1>Timer</h1>
          <h1>
            {munites < 10 ? "0" + munites : munites} :
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <div className="btn-container">
          {contextHolder}
            <Button
              onClick={success}
              size="small"
              disable={false}
              innerText="Start"
              color="success"
            />
            <Button
              onClick={restart}
              size="small"
              disable={false}
              innerText="Restart"
              color="success"
            />
            <Button
              onClick={()=>stop()}
              size="small"
              disable={false}
              innerText="Stop"
              color="danger"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
