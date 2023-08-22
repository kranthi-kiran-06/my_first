// import {useState} from 'react'

function child1(props)
{
    // console.log(data)
    
    return(
        <div>
                <h1>Child-1 Component</h1>
                <div className="text-white display-5">
                    {props.username}
                </div>
        </div>
    )
}
export default child1