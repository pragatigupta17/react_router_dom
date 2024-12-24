import React, { useState } from "react"
const Frm = ()=>{
    let [h,setH]=useState('')
    function hinput(event){
        console.log (event.target.value);
        setH(event.target.value)
    }
    let [i,setI]=useState('')
    function hinput(event){
        console.log (event.target.value);
        setI(event.target.value)
    }
    let [t,setT]=useState(true)
    function hinput(event){
        console.log (event.target.value);
        setT(event.target.value)
    }
    
    return(
        <>
        <h1>MY NAME {h}</h1>
        <input type="text" onChange={hinput} />
        <input type="text" onChange={hinput}/>
        <h1>MY age {i}</h1>
    
        <button onClick={() => useState(false)}>UPDATE</button>
        </>
    )
}
export default Frm;