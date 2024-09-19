import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../service/EmployeeService';
import { useNavigate , useParams } from 'react-router-dom';


const AddEmployees = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const navigator = useNavigate();
    const {id} = useParams();
    useEffect(() => {
      if(id){
        getEmployee(id).then((res)=>{
          setfirstName(res.data.firstName)
          setlastName(res.data.lastName)
          setemail(res.data.email)
        }).catch((err)=>{
          console.error(err)
        })
      }
    }, [id])
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      const employeeObj = { firstName, lastName, email };
  
      try {
          let res;
          if (id) {
              res = await updateEmployee(id, employeeObj);
          } else {
              res = await createEmployee(employeeObj);
          }
          console.log("Response:", res); 
          console.log(res.data); 
          navigator('/');
      } catch (err) {
          console.error(err);
      }
  };
  
  
    const pageTitle = () =>{
      if(id){
        return <h1 className='text-3xl font-mono font-extrabold text-blue-900'>Update Employee</h1>
      }
      else{
       return <h1 className='text-3xl font-mono font-extrabold text-blue-900'>Add Employee</h1>
      }
    }
  return (
    <div className='flex justify-center items-center h-3/4'>
      <form onSubmit={handleSubmit} className='flex gap-8 items-center border-2 px-4 py-4 rounded-lg border-blue-900 h-3/4 flex-col w-1/3' action="/">
        {pageTitle()}
        <div className='w-3/4'>
        <label className='text-blue-900 text-lg font-semibold' htmlFor="firstName">First Name : </label>
        <input className='min-w-full bg-blue-100 outline-none border-b-2 border-blue-900 max-w-full' type="text" name='firstName' value={firstName} onChange={(e)=>{
            e.preventDefault()
            setfirstName(e.target.value)}} required />
            </div>
            <div className='w-3/4'>
        <label className='text-blue-900 text-lg font-semibold' htmlFor="lastName">Last Name : </label>
        <input className='min-w-full bg-blue-100 outline-none border-b-2 border-blue-900 max-w-full' type="text" name='lastname' value={lastName} onChange={(e)=>{
            e.preventDefault()
            setlastName(e.target.value)}} required/>
        </div>
        <div className='w-3/4'>
        <label className='text-blue-900 text-lg font-semibold' htmlFor="email">Email : </label>
        <input className='min-w-full bg-blue-100 outline-none border-b-2 border-blue-900 max-w-full' type="text" name='email' value={email} onChange={(e)=>{
            e.preventDefault()
            setemail(e.target.value)}} required/>
            </div>
        <button type='submit' className='bg-green-700 tracking-wider text-white text-lg font-mono font-semibold px-4 py-2 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default AddEmployees
