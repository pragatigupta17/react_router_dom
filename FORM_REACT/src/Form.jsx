import React, { useState } from "react"
const Frm = ()=>{
    // let [h,setH]=useState('')
    // function hinput(event){
    //     console.log (event.target.value);
    //     setH(event.target.value)
    // }
    // let [i,setI]=useState('')
    // function hinput(event){
    //     console.log (event.target.value);
    //     setI(event.target.value)
    // }
    // let [t,setT]=useState(true)
    // function hinput(event){
    //     console.log (event.target.value);
    //     setT(event.target.value)
    // }
    let[inputname,setInput]=useState({
        username:"",
        address:"",
        email:"",
        contact:"",
        age:"",
    })
    const hinput = (event) => {
        const { name, value } = event.target;
        // console.log(event.target.value)
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
        {/* <h1>MY NAME {h}</h1>
        <input type="text" onChange={hinput} />
        <input type="text" onChange={hinput}/>
        <h1>MY age {i}</h1>
    
        <button onClick={() => useState(false)}>UPDATE</button> */}
        <form onSubmit={finalsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={inputname.username} onChange={hinput}/><br/><br/>
            <label htmlFor="">Address</label>
            <input type="text" name="address"value={inputname.address} onChange={hinput}/><br/><br/>
            <label htmlFor="">Email</label>
            <input type="text" name="email"value={inputname.email} onChange={hinput}/><br/><br/>
            <label htmlFor="">Age</label>
            <input type="text" name="age"value={inputname.age} onChange={hinput}/><br/><br/>
            <label htmlFor="">Contact</label>
            <input type="text" name="contact"value={inputname.contact} onChange={hinput}/><br/><br/>
            <input type="submit"/>

        </form>
        </>
    )
}
export default Frm;