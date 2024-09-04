import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { useState,useEffect } from 'react'
import { getVideos } from '../Services/allApi'

function Videos({add}) {

  const [videos,setVideos] = useState([])
  const [delResponse,setDelResponse] = useState("")

  useEffect(()=>{
    getData()
  },[add,delResponse])

  const getData = async() =>{
    const res = await getVideos()
    console.log(res);
    if(res.status == 200){
      setVideos(res.data);
      console.log(res.data);
    }
    else{
      console.log(res);
    }    
  }

  return (
    <>
        <div className='border border-3 shadow mb-3'>
          {
            videos.length>0?
            <Row>
              {
                videos.map(item=>(
                  <Col><Videocard video = {item} response = {setDelResponse}/></Col>
                ))
              }
              
            </Row>
            :
            <h2 className='text-center text-danger'>No Videos Available</h2>
          }
          
        </div>
    </>
  )
}

export default Videos