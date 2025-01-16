import Axios from "./Axios"
import Fet from "./Fet"
import { useEffect,useState } from "react"


function App() {
  let[data,setData]=useState([])
  let[frmvisible,setfrmvisible]=useState(false)
  let[editdata,setEditdata]=useState({})

  function hinput(e){
    let{name,value}=e.target;
    setEditdata({...editdata,[name]:value})
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/student")
    .then(res=>{
      setData(res.data)
    })
  },[])

  return (
    <>
     <Axios/>
     <Fet/>
<table border="">
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>city</th>
      <th>edit</th>
      <th>delete</th>
    </tr>
  </thead>

<tbody>
  {data.map((e)=>(
    <tr key={e.id}>
    <td>{e.id}</td>
    <td>{e.name}</td>
    <td>{e.age}</td>
    <td>{e.city}</td>
    <td><button onClick={()=>setfrmvisible(true)}>Edit </button></td>
    <td><button onClick={()=>mydel(e.id)}>Delete</button></td>
    </tr>
    ))}
    </tbody>
    </table>
  


  {frmvisible && (
    <div>
      <form>
        <label htmlFor="">Id</label>
        <input type="text" name="id" value={editdata.id} onChange={hinput}/><br/><br/>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={editdata.name} onChange={hinput}/><br/><br/>
        <label htmlFor="">Age</label>
        <input type="text" name="age" value={editdata.age} onChange={hinput}/><br/><br/>
        <label htmlFor="">City</label>
        <input type="text" name="city" value={editdata.city} onChange={hinput}/><br/><br/>
        <input type="submit"/>
      </form>
    </div>
  )}
  </>
  )}
  
export default App
