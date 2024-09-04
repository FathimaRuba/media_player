import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      {/* <h1 className='bg-info'>Media-Player</h1> */}
      {/* <button className="btn btn-success">Click Me</button> */}
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/his' element={<History/>}/>
        <Route path='/reg' element={<Signup/>}/>
        <Route path='/log' element={<Login/>} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
