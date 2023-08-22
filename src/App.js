// import {useState} from 'react'
// import Child1 from './components/child1'
// import Child2 from './components/child2'

import Useeffecthook from './components/Useeffecthook'
function App() {

  // let arr = [ 20, 30, 40, 50, 60, 40]
  // let users=
  // [
  //   {
  //     name:'ravi',
  //     id:1,
  //     city:"hyd"
  //   },
  //   {
  //     name:'suma',
  //     id:2,
  //     city:"hyd"
  //   },
  //   {
  //     name:'kiran',
  //     id:3,
  //     city:"hyd"
  //   }
  // ]


  // non parameterized

  // const handleEvent2 =()=>
  // {
  //   console.log("NOn-parameterized");
  // }

  // //parameterized
  // const handleEvent =(a)=>
  // {
  //   console.log("Button Clicked! and a is ",a);
  // }

  //usestate
  // let [name,setName]=useState(
  //   {
  //     name:'rajesh',
  //     city:'hyd'
  //   }
  // )

  // const changeName = ()=>
  // {
  //   setName({...name,name:'karthik'})
  // }


  // Counter Example 
  // let[count,setCounter]=useState(0)
  // const inc =()=>
  // {
  //   setCounter(count++);
  // }
  // const dec=()=>
  // {
  //   setCounter(count--);
  // }

  //Data Transfer from Parent to Child and Child to parent 
  // let [username, setUsername] = useState('vinnu')
  // let [ data , setData] = useState('')


  // //function to get data from child

  // const getDataChild= (data) => {
  //   setData(data)
  // }

  return (
    <div className='text-center container ' >
      {/* {
        // arr.map((element,index)=> <h1 key={index}>{element}</h1>)
        <table className='table text-center'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>city</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((userObj) => <tr key={userObj.id}>
                <td>{userObj.id}</td>
                <td>{userObj.name}</td>
                <td>{userObj.city}</td>
              </tr>)
            }
          </tbody>
        </table>
      } */}

      {/* <button className = "btn btn-success " onClick={()=>handleEvent(100)}>Click</button>
      <button className = "btn btn-success " onClick={handleEvent2}>Click</button> */}

      {/* //Use state */}
      {/* <h1>{name.name}</h1>
      
      <h1>{name.city}</h1>
      <button className="btn btn-secondary" onClick={changeName}>Change Name</button> */}

      {/* COunter Example */}
      {/* <h1 className='text-center'>{count}</h1>
      <button className='btn btn-secondary' onClick={inc}>+</button>
      
      <button className='btn btn-secondary' onClick={dec}>-</button> */}
      {/* -----------Counter example------- */}

      {/* Nesting Components */}
      
      {/* Data Transfer */}
      {/* <p>Root Component</p>
        <h1>{data}</h1>
        <div className="row ">
            <div className="col-sm-6 bg-info">
              <Child1 username = {username}/>
            </div>

            <div className="col-sm-6 bg-success">
              <Child2 username={username} getDataChild={getDataChild} />
            </div>

        </div> */}

          <div className=" container text-center  mt-5">
            {/* Use Effect Demo */}
            < Useeffecthook/>
          </div>
    </div>
  );
}

export default App;
