import { useEffect, useState } from 'react'
import Color from './Color'


function App() {
  let [count,setCount]=useState(0)

 let[counter,setcounter]=useState(false)


 useEffect(()=>{alert("right....!!")},[count,counter])
  return (
    <>
      {count}
      <button onClick={()=>setCount(count+1)}>Increment</button>
    
      <button onClick={()=>setcounter(!counter)}>Change</button>
    <Color/>
    </>
  )
}

export default App
