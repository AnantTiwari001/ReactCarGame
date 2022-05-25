import React, { useState } from "react";
// import road from '../images/road.jpg'
import car0 from "../images/car0s.png";

export default function Cars({carPos, handleCarPos}) {
  
  const background = {
    background: `url(${car0})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: '70%'
  };
  return (
    <div className=" w-56 h-32">
      <div
        style={carPos === 0 ? background : {}}
        onClick={() => handleCarPos(0)}
        className="inline-block w-1/3 h-full "
      >
        
      </div>
      <div
        style={carPos === 1 ? background : {}}
        onClick={() => handleCarPos(1)}
        className="inline-block w-1/3 h-full "
      >
      
      </div>
      <div
        style={carPos === 2 ? background : {}}
        onClick={() => handleCarPos(2)}
        className="inline-block w-1/3 h-full "
      >
        
      </div>
    </div>
  );
}
