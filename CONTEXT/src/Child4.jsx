import React, {useContext} from 'react'
import {newdata} from "./Child2"

const Child4=()=>{
    let {naam,age} = useContext(newdata)
    return(
        <>
        {/* <div>
            Child4
            <newdata.Consumer>
                {
                    ({naam,age})=>{
                        return( 
                            <h1>my name is {naam} and im {age} old</h1>
                        )
                    }
                }
            </newdata.Consumer>
        </div> */}


        <h1>my name is {naam} {age} </h1>

        </>
    )
}
export default Child4