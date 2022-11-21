
import './App.css';
import {useState} from 'react'
//Axios is a library which allows request to a API
import Axios from 'axios';

function App() {
  const [name, setName]=useState('')
  const [age, setAge]=useState(0)
  const [country, setCountry]=useState('')
  const [position, setPosition]=useState('')
  const [wage, setWage]=useState(0)
  //map array for employee list
  const [employeelist, setEmployeelist]=useState('')

  const addEmployee=()=>{
    //endpoint created in the server, body object and add properties of that object
    Axios.post('https://localhostL3001/create', {name:name, age:age, country:country, 
    //passing the value to backend
    position:position,
  wage:wage}).then(()=>{
    //Promise: dont know when request is done so we want to add .then the whole function will stop until the request is done
    console.log('success')
  })
  }
  const display = ()=>{
    console.log(name)
  }
  //function to get employee list
  const getEmployee=()=>{
    Axios.get('https://localhostL3001/create').then((res)=>{
      setEmployeelist(res.data)
    })
    console.log(response)
  }
  return (
    <div className="App">
      <div className="information">
      <label>Name</label>
      <input onChange={(e)=>setName(e.target.value)} type="text"/>
      <label>Age</label>
      <input onChange={(e)=>setAge(e.target.value)} type="number"/>
      <label>Country</label>
      <input onChange={(e)=>setCountry(e.target.value)} type="text"/>
      <label>Position</label>
      <input onChange={(e)=>setPosition(e.target.value)} type="text"/>
      <label>Wage (year):</label>
      <input onChange={(e)=>setWage(e.target.value)} type="number"/>
      <button onClick={display}>Add Employee</button>
      </div>
      <hr/>
      ---------------
      <div>
        <button className='employees' onClick={getEmployee}>Show Employees</button>
        {employeelist.map((employee, key)=>{
          return(
            <div >{employee.name}</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
