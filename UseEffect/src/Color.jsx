import { useEffect ,useState } from 'react'


function Button(){
    let[Col,setCol]=useState('lightblue')
    
    
     useEffect(()=>{alert("right....!!")},[Col])

    function color(){
      setCol('grey')
    }
    function col(){
      setCol('green')
    }
    function blue(){
      setCol('peach')
    }
    function co(){
      setCol('purple')
    }
 

    return(
        <>
        <h1>THIS IS USESTATE BUTTON COLOR CHANGE</h1><hr></hr>
        <div style={{height:"100vh",width:"100vw",backgroundColor:col}}>
        <button onClick={color}>CHANGE</button>
        </div>
        <div style={{height:"100vh",width:"100vw",backgroundColor:col}}>
        <button onClick={col}>CHANGE</button>
        </div>
        <div style={{height:"100vh",width:"100vw",backgroundColor:col}}>
        <button onClick={blue}>CHANGE</button>
        </div>
        <div style={{height:"100vh",width:"100vw",backgroundColor:col}}>
        <button onClick={co}>CHANGE</button>
        </div>
        </>
    )

}
export default Button