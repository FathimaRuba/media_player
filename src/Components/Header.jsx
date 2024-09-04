import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate()

  const lgout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }
  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-music fa-bounce" bounce style={{color: "#ff0000",}} />{' '}
            Media Player
          </Navbar.Brand>
        </Container>
        <button onClick={lgout} className='btn btn-outline-danger p-2 m-2'>Log Out</button>
      </Navbar>
    </>
  )
}

export default Header