import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const About =()=>{
   let {name,age}= useParams()
   console.log(name);
    let nav = useNavigate()
    function contactpage(){
        nav('/contact')

    }
    return(
        <div>
            <h1>ABOUT PAGE</h1>
            <h1>MY NAME IS {name} AND MY AGE IS {age}</h1>
            <button onClick={contactpage}>Contact us</button>
        </div>
    )
}
export default About
