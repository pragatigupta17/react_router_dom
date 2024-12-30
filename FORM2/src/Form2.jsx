import React, { useState } from "react"
const Form2 = ()=>{
    let[inputname,setInput]=useState({
           username:"",
           age:"",
           email:"",
           address:"",
           gender:"",
       })
       const hinput = (event) => {
           const { name, value } = event.target;
            console.log(event.target.value)
           setInput({
             ...inputname,
             [name]: value
           })
           
       }
       const finalsubmit = (event) => {
           event.preventDefault();
           console.log(inputname);
           alert("Form submitted");
           }
   
       return(
           <>

           <form onSubmit={finalsubmit}>
               <label htmlFor="">Name</label>
               <input type="text" name="username" value={inputname.username} onChange={hinput}/><br/><br/>
               <label htmlFor="">Age</label>
               <input type="text" name="age"value={inputname.age} onChange={hinput}/><br/><br/>
               <label htmlFor="">Email</label>
               <input type="text" name="email"value={inputname.email} onChange={hinput}/><br/><br/>
               <label htmlFor="">Address</label>
               <input type="text" name="address"value={inputname.address} onChange={hinput}/><br/><br/>
               <label htmlFor="">Gender</label>
               <input type="text" name="gender"value={inputname.gender} onChange={hinput}/><br/><br/>
               <input type="submit"/>
   
           </form>
           </>
       )
   }
   export default Form2