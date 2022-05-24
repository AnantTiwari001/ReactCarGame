import React, { useRef } from 'react'
import Lane from './Lane'

export default function Game() {
  const lane1= useRef(0)
  const lane2= useRef(0)
  const lane3= useRef(0)

  let run= true

  const increase=(n)=>{
    if (run) {
      if (lane1.current>285 || lane2.current>285 || lane3.current>285) {
        run= false
        alert('Game over bitch')
        return 0;
      }
      if (n===1) {
        lane1.current+=1;
      }else if(n===2){
        lane2.current+=1;
      }else if(n===3){
        lane3.current+=1;
      }else{
        console.error('should not be executed of the increse lane pos')
      }
    }
  }
  return (
    <div className='w-56 h-96'>
      <Lane pos={lane1} handleIncrease={()=> increase(1)} />
      <Lane pos={lane2} handleIncrease={()=> increase(2)} />
      <Lane pos={lane3} handleIncrease={()=> increase(3)} />
    </div>
  )
}
