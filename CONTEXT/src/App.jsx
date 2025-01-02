// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createContext } from "react"
import Child1 from "./Child1"
 let cdata=createContext();
  let data=" NEW YEAR"
function App() {
  
  return (
    <>
    <cdata.Provider value={data}>
      <Child1/>
    </cdata.Provider>
      
    </>
  )
}

export default App
export{cdata}