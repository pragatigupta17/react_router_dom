import React from 'react'
import {cdata} from './App'
const Child3=()=>{
    return(
<>
<cdata.Consumer>
            {
                (data)=>{
                    return(
                        <h1> HAPPY {data} 2025</h1>
                    )
                }
            }
        </cdata.Consumer>
</>
    )
}
export default Child3
