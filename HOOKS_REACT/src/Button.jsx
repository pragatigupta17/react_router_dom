// import Button from 'Button.jsx'
import { useState } from 'react'
function Button(){
    let [col,setCol]=useState('lightblue')
    function color(){
      setCol('grey')
    }
 

    return(
        <>
        <h1>THIS IS USESTATE BUTTON COLOR CHANGE</h1><hr></hr>
        <div style={{height:"100vh",width:"100vw",backgroundColor:col}}>
        <button onClick={color}>CHANGE</button>
        </div>
        </>
    )

}
export default Button