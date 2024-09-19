import React from 'react'
import { NavLink } from 'react-router-dom'

const header = () => {
  return (
    <header className='flex sticky top-0 bg-blue-900 px-4 py-4'>
      <nav className='flex justify-between w-full'>
        <h2 className='text-4xl font-mono font-extrabold text-white'>Yashas M Achar</h2>
        <ul className='flex text-white font-bold text-xl gap-10'>
            <NavLink className={(e)=>e.isActive?"text-blue-400":"text-white"} to="/">employees</NavLink>
            <NavLink className={(e)=>e.isActive?"text-blue-400":"text-white"} to="/add">add employees</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default header
