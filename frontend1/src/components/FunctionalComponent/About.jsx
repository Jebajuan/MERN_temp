import React, { useState } from 'react'

function About() {
  var initial=0
  // var [num,setNum]=useState(initial)
  var [num,setNum]=useState(0)
  function handleDecrement(){
    setNum(num-1)
  }
  return (
    <div>
      <h1>About Page</h1>
      <h2>State Initial Value is:{initial}</h2>
      <button onClick={()=>setNum(num+1)}>+</button>
      <button onClick={handleDecrement}>-</button>
      <h3>Updating state : {num}</h3>
      
      <button onClick={()=>setNum(initial)}>RESET</button>
    </div>
  )
}

export default About