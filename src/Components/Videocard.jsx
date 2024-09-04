import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideos,addHistory } from '../Services/allApi';
import { toast } from 'react-toastify';

function Videocard({video,response,cat}) {
    const [show, setShow] = useState(false);

    const handleDelete = async() => {
      const res = await deleteVideos(video.id)
      console.log(res);
      response(res)
      if(res.status == 200){
        toast.success("Deleted")
      }
      else{
        toast.error("Deletion Failed")
      }
    }

    const dragHandler=(e)=>{
      console.log(e);
      console.log(video);
      e.dataTransfer.setData("video",JSON.stringify(video))
    }

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true)
      const currentdate = new Date()
      const datetime = currentdate.getDay() + "-" + currentdate.getMonth() 
      + "-" + currentdate.getFullYear() + " @ " 
      + currentdate.getHours() + ":" 
      + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      const data = {videoid:video.videoid,title:video.title,videourl:video.videourl,datetime:datetime}
      const result = await addHistory(data)
      console.log(result);
    }

  return (
    <>
        <Card style={{ width: '18rem' }} className='p-1 mb-3' onDragStart={(e)=>{dragHandler(e)}} draggable>
      <Card.Img  style={{cursor:'pointer'}} onClick={handleShow} variant="top"  src={video?.imageurl} />
      <Card.Body>
        <Card.Title>{video?.title}</Card.Title>
        {
          !cat &&
            <Button variant="btn" onClick={handleDelete}>
              <i className="fa-solid fa-trash" style={{color: "#004070",}} />
            </Button>
        }
        
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe style={{cursor:'pointer'}} width="470" height="315" src={video?.videourl} allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard