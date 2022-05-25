import React, { useState, useRef } from "react";
import road from "../images/road.jpg";
import Cars from "./Cars";
import Game from "./Game";
import Score from "./Score";

export default function Play() {
  const lane1 = useRef(0-90-Math.floor(Math.random()*500));
  const lane2 = useRef(0-90-Math.floor(Math.random()*500));
  const lane3 = useRef(0-90-Math.floor(Math.random()*500));
  const style = {
    background: `url(${road})`,
    backgroundRepeat: "no-repeat",
    display: "inlineBlock",
  };
  const [carPos, setCarPos] = useState(1);
  const handleCarPos = (n) => {
    setCarPos(n);
    carPos1.current = n;
  };
  const [score, setscore]= useState(0)

  let run = true;
  const carPos1 = useRef(carPos);

  const increase = (n) => {
    if (run) {
      if (n === 1) {
        lane1.current += 1;
        if (lane1.current > 285 ) {
          if (carPos1.current === 0 ) {
            run = false;
            alert("Game over!");
            return 0;
          }else{
            lane1.current= 0-90-Math.floor(Math.random()*500);
            setscore(prescore=> prescore+1)
          }
        }
      } else if (n === 2) {
        if (lane2.current > 285 ) {
          if (carPos1.current === 1 ) {
            run = false;
            alert("Game over!");
            return 0;
          }else{
            lane2.current= 0-90-Math.floor(Math.random()*500);
            setscore(prescore=> prescore+1)
          }
        }
        lane2.current += 1;
      } else if (n === 3) {
        if (lane3.current > 285 ) {
          if (carPos1.current === 2 ) {
            run = false;
            alert("Game over!");
            return 0;
          }else{
            lane3.current= 0-90-Math.floor(Math.random()*500);
            setscore(prescore=> prescore+1)
          }
        }
        lane3.current += 1;
      } else {
        console.error("should not be executed of the increse lane pos");
      }
    }
  };
  return (
    <div>
      <Score score={score} />
    <div style={style}>
      <Game lane1={lane1} lane2={lane2} lane3={lane3} increase={increase} />
      <Cars carPos={carPos} handleCarPos={handleCarPos} />
    </div>
    </div>
  );
}
