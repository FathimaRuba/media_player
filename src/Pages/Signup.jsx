import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { checkEmail, registerApi } from '../Services/allApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const nav = useNavigate()

    const [user,setUser] = useState({
        username:"", email:"", password:""
    })

    const handleReg = async() => {
        console.log(user);
        const {username,password,email} = user
        if(!username || !password || !email){
            toast.warning("Please enter all the inputs!!")
        }
        else{
            const result = await checkEmail(email)
            console.log(result);
            if(result.data.length>0){
                toast.warning("Email Id Already Exists !!")
            }
            else{
                const res = await registerApi(user)
                console.log(res);
                toast.success("Registeration Successfull")
                if(res.status == 201){
                    setUser({
                        username:"",email:"",password:""
                    })
                    nav('/log')
                }
                else{
                    toast.error("Registeration Failed !!")
                    console.log(res);
                }
            }
        }
    }
  return (
    <>    
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
        <div className='w-75 rounded shadow bg-light p-5'>
            <h3 className='text-center mb-4'>Register</h3>
            <input type="text" onChange={(e)=>{setUser({...user,email:e.target.value})}} className='form-control mb-3' placeholder='Enter Email-Id'/>
            <input type="text" onChange={(e)=>{setUser({...user,username:e.target.value})}}  className='form-control mb-3' placeholder='Enter User Name'/>
            <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}}  className='form-control mb-3' placeholder='Enter Password'/>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-primary' onClick={handleReg}>Register</button>
                <Link to='/log' className='btn '>Already a User? Login</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup