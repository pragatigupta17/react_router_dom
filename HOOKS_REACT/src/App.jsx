import { useState } from 'react'
import Button from './button'
import Ternary from './Ternary'

function App(){
  let [count,setCounter]=useState(0)
  function add(){
    setCounter(count+1)
  }

  function minus(){
     if(count>0){
      setCounter(count-1)
     }
  }
  
  return(
    <>
    <h1>{count}</h1>
  
  
    <button onClick={add}>Updated</button>
    <button onClick={minus}>Decriment</button>

    <Button />
    <Ternary/>
    </>
  )
}


export default App