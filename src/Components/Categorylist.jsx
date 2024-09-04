import React from 'react'
import { useState,useEffect } from 'react';
import { deleteCategories, getCategories,updateCategory } from '../Services/allApi';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import Videocard from './Videocard';

function Categorylist({refreshList}) {
  const [categoryList,setCategoryList] = useState([])
  useEffect(()=>{
    getData()
  },[refreshList])


  const handleDelete = async(id) => {
    const result = await deleteCategories(id)
    console.log(result);
    if(result.status == 200){
      getData()
    }
  }

  const getData = async() => {
    const res = await getCategories()
    console.log(res);
    if(res.status == 200){
      setCategoryList(res.data)
    }
  }

  const dropHandler = async(e,category)=>{
    console.log("drop");
    const vid = (JSON.parse(e.dataTransfer.getData("video")));
    category.videos.push(vid)
    console.log(category);
    const res = await updateCategory(category.id,category)
    console.log(res);
    if(res.status == 200){
      toast.success(`${vid.title} added to category ${category.title}`)
      getData()
    }
    else{
      toast.error("Failed")
    }
  }

  const onDragOverHandler=(e)=>{
    console.log("ondragged");
    e.preventDefault()
  }

  return (
    <>
    {
      categoryList.length>0?
      <div>
        {
          categoryList.map(item => (
            <div className='border m-2 p-2'>
            <div className='m-2 p-3 mb-3 d-flex justify-content-between' onDragOver={(e)=>{onDragOverHandler(e)}}
             onDrop={(e)=>{dropHandler(e,item)}}>
              <h3 className='text-center'>{item.title}</h3>
              <Button variant="btn" onClick={()=>{handleDelete(item.id)}}><i className="fa-solid fa-trash" 
              style={{color: "red"}} /></Button>
            </div>
            <div className='border border-light'>
              {
                item?.videos?.length>0 &&
                <>
                {
                  item?.videos?.map(vid=>(
                    <Videocard cat={true} video={vid}/>
                  ))
                }
                </>
              }
            </div>
            </div>
          ))
        }
      </div>
      :
        <h5>No Categories Available</h5>
    }
    </>
  )
}

export default Categorylist
