import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { deleteHistory, getHistory } from '../Services/allApi'

function History() {
  const [history,setHistory] = useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData = async() => {
    const res = await getHistory()
    console.log(res);
    if(res.status == 200){
      setHistory(res.data)
    }
  }

  const handleDelete = async(id) => {
    const result = await deleteHistory(id)
    console.log(result);
    if(result.status == 200){
      getData()
    }
  }

  return (
    <>
      <div className="p-5">
        <h2>Watch History</h2>
          <div>            
                <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Video Id</th>
                    <th>Video Title</th>
                    <th>Video Url</th>
                    <th>Date & Time</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {
                history.map(item => (
                  <tr>
                    <td>{item.videoid}</td>
                    <td>{item.title}</td>
                    <td>{item.videourl}</td>
                    <td>{item.datetime}</td>
                    <td><Button variant="btn"  onClick={()=>{handleDelete(item.id)}}>
                          <i className="fa-solid fa-trash" style={{color: "red",}} />
                        </Button></td>
                  </tr>
                   ))
                  }
                </tbody>
              </table>
          </div>
      </div>
    </>
  )
}

export default History