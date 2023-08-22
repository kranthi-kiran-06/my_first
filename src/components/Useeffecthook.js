import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function Useeffecthook()
{
    let [ users ,setUsers ] = useState([])
    let [ err, setError ] = useState('')

    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res=>res.json())
        // .then(apiData=>setUsers(apiData))
        // .catch(err => console.log(err) )

        axios.get('https://jsonplaceholder.typicode.com/poss')
        .then(res => setUsers(res.data))
        .catch(err => setError(err.message))
    })
    return (
        <div className="container">
            {/* if error is there */}
        { err != '' && <p className='h2 text-primary'>{err}</p>}
        { users.length == 0 && <p className='text-danger h3'>No data Found</p>}
        { users.length !=0 && 
                <div className="table text-center">
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((userObj)=> <tr key={userObj.id}>
                            <td>{userObj.userId}</td>
                            <td>{userObj.id}</td>
                            <td>{userObj.title}</td>
                            </tr>)
                        }
                    </tbody>
                </div>
            
        }
        </div>
    )

}
 
export default Useeffecthook;