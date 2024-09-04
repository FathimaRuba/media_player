import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-light py-2 container-fluid'>
      <Row className='p-5'>
        <Col sm={12} md={5}>
          <h3>Media Player</h3>
          <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ipsam debitis possimus expedita quaerat esse veritatis modi autem, sequi fugiat ullam! Dolor, sint eius saepe et odit error maiores officiis.</p>
        </Col>
        <Col sm={12} md={2}>
          <h4>Links</h4>
          <div className='d-flex flex-column'>
          <Link to={'/'} className='text-white'>Landing</Link>
          <Link to={'/home'} className='text-white'>Home</Link>
          <Link to={'/his'} className='text-white'>Watch History</Link>
          </div>
        </Col>
        <Col sm={12} md={5}>
          <h3>Feedback Form</h3>
          <textarea name="" id="" className='form-control'></textarea>
          <button className='btn btn-danger my-2'>Submit</button>
        </Col>
      </Row>
      <h6 className='text-center'>MediaPlayer 2024 &copy; All Rights Reserved.</h6>
    </div>
  )
}

export default Footer