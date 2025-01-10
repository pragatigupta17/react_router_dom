import React, { useEffect,useState } from "react";
import axios from 'axios';

const Fet =()=>{
    let [jsondata,setData]=useState([]);
    let [frminp,setFrminp]=useState({
        name:"",
        age:"",
        contact:"",
        city:"",
    })
    const Changeinp =(e)=>{
        let {name,value}=e.target;
        setFrminp({...frminp,[name]:value})
    }
    const submitform =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/student',frminp)
        .then(r=>alert("inserted"))
    }
    const mydel=(id)=>{
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(re=>alert("deleted")) 
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/student')
        .then(res=> {
            console.log(res.data);
            setData(res.data)
            })

    },[mydel])
    return(
        <>
        <table border="">
            <thead>

                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>CONTACT</th>
                <th>CITY</th>
                <th>DELETE</th>
                
            </thead>
            <tbody>
                {
                    jsondata.map((e)=>(
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.contact}</td>
                            <td>{e.city}</td>
                            <td><button onClick={()=>mydel(e.id)}>DELETE</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <form onSubmit={submitform}>
            <label htmlFor="">Name</label>            
            <input type="text" value={frminp.name} name="name" placeholder="name" onChange={Changeinp}/><br />
            <label htmlFor="">Age</label>      
            <input type="text" value={frminp.age} name="age" placeholder="age" onChange={Changeinp}/><br />
            <label htmlFor="">Contact</label>      
            <input type="text" value={frminp.contact} name="contact" placeholder="contact" onChange={Changeinp}/><br />
            <label htmlFor="">City</label>      
            <input type="text" value={frminp.city} name="city" placeholder="city" onChange={Changeinp}/><br />
            <button type="submit">SUBMIT</button>
        </form>
        </>
    )
}
export default Fet