import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';
import Categorylist from './Categorylist';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategories } from '../Services/allApi';
import { toast } from 'react-toastify';

function Category() {
    const [refreshList, setRefreshList] = useState(false);
    const [show, setShow] = useState(false);
    const [category,setCategory] = useState({
      catId:"" , title:"" , videos:[]
    })

    const handleCategory = async() => {
      console.log(category);
      const {catId,title} = category
      if(!catId || !title){
        toast.warning("Please enter valid inputs")
      }
      else{
        const result = await addCategories(category)
        console.log(result);
        if(result.status == 201){
          toast.success("Category added")
          handleClose()
          setCategory({ catId:"" , title:"" , videos:[]})
          setRefreshList(!refreshList)
        }
        else{
          toast.error("Failed")
        }
      }
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <div className='d-grid'>
            <button className='btn btn-success' onClick={handleShow}>Add Category</button>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <FloatingLabel
        controlId="cid"
        label="Category Id"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="1"  onChange={(e)=>{setCategory({...category,catId:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="cname" label="Category Name">
        <Form.Control type="text" placeholder="Name" onChange={(e)=>{setCategory({...category,title:e.target.value})}}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleCategory}>Save</Button>
        </Modal.Footer>
      </Modal>
      <div className='border border-3 shadowp-5 my-3 p-2 '>
            <Row>
                <Col><Categorylist refreshList={refreshList}/></Col>
            </Row>
        </div>
        </div>
    </>
  )
}

export default Category