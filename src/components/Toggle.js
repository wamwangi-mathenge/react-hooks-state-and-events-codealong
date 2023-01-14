import React, { useState } from "react";



function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    // DO NOT Update state directly
    // ie. isOn = !isOn;
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";



  return <button onClick={handleClick} style={{ background: color}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
