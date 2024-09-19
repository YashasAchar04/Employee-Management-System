import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { deleteEmployee, getEmployee, listEmployees } from '../service/EmployeeService';
import { NavLink, useNavigate  } from 'react-router-dom';

const ListofEmployees = () => {
  const [employees, setemployees] = useState([])
  useEffect(() => {
    listEmployees().then((res)=>{
      setemployees(res.data);
    }).catch((err)=>{console.error(err)})
  }, [])

  const navigator = useNavigate();

  const handleDelete = (id) => {
    deleteEmployee(id)
        .then((res) => {
            console.log(res);
            setemployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
        })
        .catch((err) => {
            console.error(err);
            alert("Failed to delete employee. Please try again.");
        });
};
const handleUpdate = (id) =>{
  navigator(`/update/${id}`)
  getEmployee(id)
  .then((res)=>{
    console.log(res);
    
  })
}


  
  return (
    <div className="flex gap-6 justify-center py-10 bg-blue-100 flex-wrap">
      {employees.map((e)=>(
        <ul className="border-2 bg-blue-200 cursor-pointer rounded-2xl flex justify-center items-center p-8" key={e.id}>
          <img className="h-28" src="src\assets\employee.png" alt="employee pic" />
          <div>
          <div className="font-bold min-w-72 max-w-72 min-h-40 max-h-40 text-lg">
          <li>Employee ID : {e.id}</li>
          <li>First name : {e.firstName}</li>
          <li>Last name : {e.lastName}</li>
          <li>mail id : {e.email}</li>
          </div>
          <div className='flex justify-around'>
            <button onClick={()=>{handleDelete(e.id)}} className='text-lg font-semibold text-white bg-red-600 px-4 py-1 rounded-lg'>delete</button>
            <button onClick={()=>{handleUpdate(e.id)}} className='text-lg font-semibold text-white bg-amber-500 px-4 py-1 rounded-lg'>update</button>
          </div>
          </div>
        </ul>
      ))}
    </div>
   
  )
}

export default ListofEmployees
