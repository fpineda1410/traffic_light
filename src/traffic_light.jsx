//import Light from "./light";
// import { useTrafficLight } from "react-hooks-helper";
import React, { useState } from "react";


const Light = ({ color, active }) => (
    <div
      className="light"
      style={{ backgroundColor: color, opacity: (active) ? 1 : 0.4,boxShadow:(active)? "#f8ffcc 8px 8px 50px 20px": "transparent" }}
    />
  );
  
const TrafficLight = () => {
    const [redlight_switch, setRedLightswitch] = useState();
    const [yellowlight_switch, setYellowLightswitch] = useState();
    const [greenlight_switch, setGreenLightswitch] = useState();

  return (
    <div className="traffic-light">
      <div onClick={()=>{setRedLightswitch(1); setYellowLightswitch(0);setGreenLightswitch(0)}}><Light color="#f00" active={redlight_switch} /></div>
      <div onClick={()=>{setRedLightswitch(0); setYellowLightswitch(1);setGreenLightswitch(0)}}><Light color="#ff0" active={yellowlight_switch} /></div>
      <div onClick={()=>{setRedLightswitch(0); setYellowLightswitch(0);setGreenLightswitch(1)}}><Light color="#0c0" active={greenlight_switch} /></div>
    </div>
  );
};

export default TrafficLight;