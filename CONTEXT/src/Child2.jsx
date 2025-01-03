import React,{createContext} from 'react'
import {cdata} from './App'
import Child3 from './Child3';
let newdata = createContext();
let naam="PRAGATI GUPTA"
let age= 25

const Child2=()=>{
  
    return(
        <>
        <cdata.Consumer>
            {
                (data)=>{
                    return(
                        <h1>HAPPY {data}</h1>
                    )
                }
            }
        </cdata.Consumer>
        {/* <newdata.Provider value={{naam,age}}>
            <Child3/>
        </newdata.Provider> */}


        </>
    )
}
export default Child2
export {newdata}
