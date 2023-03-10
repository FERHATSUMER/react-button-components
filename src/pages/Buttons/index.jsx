import React from "react";
import Button from "../../components/Button";
import "./style.scss";

const Buttons = () => {
  const handleStartInterval = () => {
    console.log("interval start");
  };

  return (
    <div className="btn-wrapper">
      <div>
        <Button
          onClick={handleStartInterval}
          size="xLarge"
          disable={false}
          innerText="x-Large"
          color="success"
        />
        <Button
          size="large"
          disable={false}
          innerText="Large"
          color="success"
        />
        <Button
          size="medium"
          disable={false}
          innerText="medium"
          color="success"
        />
        <Button
          size="small"
          disable={false}
          innerText="small"
          color="success"
        />
      </div>

      <div>
        <Button
          onClick={handleStartInterval}
          size="xLarge"
          disable={false}
          innerText="x-Large"
          color="danger"
        />
        <Button size="large" disable={false} innerText="Large" color="danger" />
        <Button size="small" disable={false} innerText="small" color="danger" />
      </div>

      <div>
        <Button
          onClick={handleStartInterval}
          size="xLarge"
          disable={false}
          innerText="x-Large"
          color="primary"
        />
        <Button
          size="large"
          disable={false}
          innerText="Large"
          color="primary"
        />
        <Button
          size="small"
          disable={false}
          innerText="small"
          color="dahed"
        />
      </div>
    </div>
  );
};

export default Buttons;
