import React,{useState} from 'react'

function Score({score}) {
  const handleClick = event => {
    console.log(event);
  }
  return (
    < >
     <h1 className='text-lg text-center'>Score:  {score}</h1> 
     <h3 className='text-center' onClick={handleClick}>hello world</h3>
    </>
  )
}

export default Score
