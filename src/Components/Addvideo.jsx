import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../Services/allApi';
import { toast } from 'react-toastify';

function Addvideo({response}) {
    const [show, setShow] = useState(false);
    const [video,setVideo] = useState({
        videoid:"" , title:"" , imageurl:"" , videourl:""
    })
    // console.log(video);
    const handleUpload = async() => {
        console.log(video);
        const {videoid,title,imageurl,videourl} = video
        if(!videoid || !title || !imageurl || !videourl){
            // alert("please fill all the inputs")
            toast.warning("please fill all the inputs")
        }
        else{
          try{
            const vurl = videourl.split("v=")[1]
            console.log(vurl);
            const eurl = `https://www.youtube.com/embed/${vurl}?si=7WWrqBsOS00_ndUF&autoplay=1`
            console.log(eurl);
            video.videourl = eurl
            const res = await addVideos(video)
            console.log(res);
            if(res.status == 201){
              // alert("Upload Successfull")
              toast.success("Upload Successfull")
              handleClose()
              response(res)
            }
            else{
              // alert("Upload Failed")
              toast.error("Upload Failed")
            }
          }
          catch(err){
            console.log(err);
            // alert("Upload Failed")
            toast.error("Upload Failed")
          }
        }
    }
    
    const handleClose = () => {
      setShow(false);
      setVideo({
        videoid:"" , title:"" , imageurl:"" , videourl:""
    })
    }
    const handleShow = () => setShow(true);
  return (
    <>
        <div>
            <button className='btn fs-5' onClick={handleShow}><i className="fa-solid fa-square-plus" style={{color: "#fa0000",}} /></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3">
            <Form.Control type="number" placeholder="1" onChange={(e)=>{setVideo({...video,"videoid":e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="vtitle" label="Video Title" className='mb-3'>
            <Form.Control type="text" placeholder="title"  onChange={(e)=>{setVideo({...video,"title":e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="imgurl" label="Video Image URL" className='mb-3'>
            <Form.Control type="text" placeholder="url"  onChange={(e)=>{setVideo({...video,"imageurl":e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="vurl" label="Youtube Video URL" className='mb-3'>
            <Form.Control type="text" placeholder="url"  onChange={(e)=>{setVideo({...video,"videourl":e.target.value})}}/>
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
        </div>
    </>
  )
}

export default Addvideo