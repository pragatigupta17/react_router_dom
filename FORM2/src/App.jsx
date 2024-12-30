import Form from './form';
import Form2 from './Form2';
import Login from './Login.jsx'
import React, { useState } from "react"
function App() {
//   let arr=[1,2,3,4,5,6,7,8,9,10]
//   let ar = ["PRAGATI GUPTA" , 24, 'farrukhabad']
//   let ar_obj=[{
//     id:1,
//     name:"pragati",
//     age:24,
//     location:"farrukhabad"
//   },
//   {
//     id:2,
//     name:"aditi",
//     age:23,
//     location:"multai"
//   },
//   {
//     id:3,
//     name:"manya",
//     age:22,
//     location:"bhopal"
//   }
//   ,
//   {
//     id:4,
//     name:"neha",
//     age:25,
//     location:"nagpur"
//   }
// ]

// let fil = arr.filter((i)=>{return i>3})
// console.log(fil);
// let ar_ob = ar_obj.map((e)=>{return<h1 key={e.id}>{e.name}-{e.age}-{e.location}</h1>})
// let ara =ar.map((e,index)=>{return <li key={index}>{e}</li>})
let [inp,setInput]=useState({
  username:'',
  password:''
})
let [status,setstatus]=useState(false)
const hinput=(e)=>{
  const{name,value}=e.target
  setInput({
    ...inp,
    [name]:value
  })
}
const handlesubmit=(e)=>{
  e.preventDefault()
  if(inp.username==""||inp.password==""){
    alert("both fields are required")
  }
  else{
    localStorage.setItem('userdata',JSON.stringify(inp))
  }
}
if(status){
  return<Login/>
}
  return (
    <>
    {/* {ar.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
    <ul>
      <li>{ara}</li>
    </ul>
    <p> {ar_ob}</p>
    <ul>
      {
        fil.map((i,index)=>{return<li key={index}>{i}</li>})
      }
    </ul>
        
      
    
    
    
     <Form/>  */}
     <form onSubmit={handlesubmit}>
      <lable htmlFor="">username</lable>
      <input type="text" name="username" value={inp.username}
      onChange={hinput}/><br/><br/>

      <lable htmlFor="">password</lable>
      <input type="text" name="password" value={inp.password}
      onChange={hinput}/><br/><br/>
      <input type="submit"/>
     </form>

     
    </>
  )
}

export default App
