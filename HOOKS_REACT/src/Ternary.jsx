import { useState } from 'react'
function Ternary(){
    let [h,setH]=useState(false)
    let p=''
    
        if(h){
            p=<h1>THE TIME IS NOW</h1>
        }
        else{
            p=''
    }
return(
    <>
    <button onClick={()=>setH(!h)}>CLICK</button>
    {/* <button onClick={()=>setH(false)}>HIDE</button> */}
    {p}
    </>
)
}
export default Ternary