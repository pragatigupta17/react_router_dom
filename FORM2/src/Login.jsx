import React, { useEffect, useState } from "react"
const Login = ()=>{
    let[inputname,setInput]=useState({
           username:"",
           
           password:"",
        
           
       })
let[Udata,setUdata]=useState(null)
       const hinput = (e) => {
           const { name, value } = e.target;
            console.log(e.target.value)
           setInput({
             ...inputname,
             [name]: value
           })
           
       }
       const handlesubmit = (e) => {
           e.preventDefault();
           console.log(inputname);
           alert("successful login");
           }
   useEffect(()=>{
    let logindata=JSON.parse(localStorage.getItem('userdata'))
    setUdata(logindata)

   },[])
       return(
           <>
           <h1>LOGIN PAGE</h1>
           <form onSubmit={handlesubmit}>
               <label htmlFor="">Name</label>
               <input type="text" name="username" value={inputname.username} 
               onChange={hinput}/><br/><br/>
              
               <label htmlFor="">Password</label>
               <input type="text" name="password"value={inputname.password} 
               onChange={hinput}/><br/><br/>
               
   
           </form>
           </>
       )
   }
   export default Login