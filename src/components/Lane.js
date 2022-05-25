import React, { useEffect, useRef, useState } from 'react'
import car from '../images/car.png'


export default function Lane({pos, handleIncrease}) {
    const [carDis, setCarDis]= useState(0);
    const background = {
        background: `url(${car})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center ${carDis}px`,
        backgroundSize: '70%'
    };

    const preDis= pos
    const increaseDis=()=>{
        //to set the state for the car pos

        // preDis.current+=1
        handleIncrease()
        setCarDis(preDis.current)
        // console.log(preDis.current)
    }

    const move= useRef()
    const once= useRef(true)
    useEffect(()=>{
        if (once.current) {
            move.current= setInterval(() => {
                increaseDis()
            }, 1000/30);
            once.current=false;
        }
    },[move.current])
  return (
    <>
      <div style={background} className="inline-block w-1/3 h-full text-center"> car</div>
    </>
  )
}
