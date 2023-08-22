import { useState } from 'react'

function child2(props)
{
    let [child1Data, setchild1Data ]=useState('child1')
    return(
        <div>
            <h1>Child-2 Component</h1>
            <div className="text-black display-5">
                {props.username}
            </div>
            <div className="btn btn-danger" onClick={()=>props.getDataChild(child1Data)} >
                Send to Parent 
            </div>
        </div>
    )
}
export default child2