import axios from "axios"
import { Children, useEffect } from "react"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Layout from "./components/Layout"
import ListofEmployees from "./components/ListofEmployees";
import { createBrowserRouter, Route, NavLink, BrowserRouter, Routes, RouterProvider } from "react-router-dom"
import AddEmployees from "./components/AddEmployees"

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Layout><ListofEmployees/></Layout> },
    {path : '/add', element: <Layout><AddEmployees/></Layout> },
    {path:'/update/:id', element:<Layout><AddEmployees/></Layout>}
  ])


  return (
    <div className="bg-blue-100 h-[100vh]">
        <RouterProvider router={router}/>
    </div>
    
  )
}

export default App
