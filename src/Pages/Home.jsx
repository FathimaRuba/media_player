import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideo from '../Components/Addvideo'
import Videos from '../Components/Videos'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const[addResponse,setAddResponse] = useState("")

  const [username,setUsername] = useState("")
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('userData'))
    setUsername(user?.username)
  },[])
  return (
    <>
    <h5 className='m-3'>Welcome {username}</h5>
    <div className='d-flex justify-content-between my-2 p-2'>
      
      <h1>Videos</h1>
      <Link to='/his' className='btn btn-outline-primary text-center h-50'>Watch History</Link>
    </div>
      
      <div className='container-fluid'>
        <Row>
          <Col sm={12} md={1}><Addvideo response = {setAddResponse}/></Col>
          <Col sm={12} md={8}><Videos add = {addResponse}/></Col>
          <Col sm={12} md={3}><Category/></Col>
        </Row>
      </div>
    </>
  )
}

export default Home