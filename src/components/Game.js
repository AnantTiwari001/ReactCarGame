import React from 'react'
import Lane from './Lane'

export default function Game({lane1, lane2, lane3, increase}) {

  return (
    <div className='w-56 h-96'>
      <Lane pos={lane1} handleIncrease={()=> increase(1)} />
      <Lane pos={lane2} handleIncrease={()=> increase(2)} />
      <Lane pos={lane3} handleIncrease={()=> increase(3)} />
    </div>
  )
}
