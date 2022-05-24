import React,{useState} from 'react'

function Score() {
  const [score, setScore]= useState(0)
  const increaseScore= ()=>{
    setScore(preScore=>preScore+1)
  }
  const handleClick = event => {
    console.log(event);
  }
  return (
    < >
     <h1 className='text-lg text-center' onClick={increaseScore}>Score:  {score}</h1> 
     <h3 className='text-center' onClick={handleClick}>hello world</h3>
    </>
  )
}

export default Score
