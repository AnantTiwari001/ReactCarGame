import React from 'react';
import road from '../images/road.jpg';

export default function Play(props) {
    const style = {
        background: `url(${road})`,
        backgroundRepeat: "no-repeat",
        display:'inlineBlock'
      }
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
