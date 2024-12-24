import {useState} from "react"
function Hide(){
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(true)}>UPDATE</button>
             <button onClick={() => setShow(!show)}>HIDE</button>
        {(show) ? <h1>SUCCESS</h1>:""}
            {/* /* {(show)?"hide":"display"}*/} 
        </>
    )
    }
    export default Hide