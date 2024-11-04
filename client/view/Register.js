'use client'
import React, { useState } from 'react'
import UserForm from '../components/UserForm'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Register = () => {
    const [users, setUsers] = useState([])
    const router = useRouter()
    const create = user =>{
        axios.post('http://127.0.0.1:5000/register', user)
        .then((res) => {
            const user_id = res.data.useId 
            setUsers([...users, res.data])
            router.push(`/users/${user_id}`)
        })
        .catch((err) =>{
          if(err.response && err.response.status == 409)
            alert(err.response.data.error)
          else{
            console.log("an Error occured:", err)
            }

        })
    }
    
  return (
    <div>
      <UserForm onSubmitProp={create}/>
    </div>
  )
}

export default Register
