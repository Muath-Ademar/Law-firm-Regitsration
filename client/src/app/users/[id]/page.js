'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Middle from '../../../../components/Middle';



const User = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    useEffect(() => {
        console.log("captured id: " + id)
        if(id) {

            axios.get(`http://127.0.0.1:5000/user/${id}`)
            .then(res =>{
                console.log(id)
                setUser(res.data)
            }).catch(err => console.log(err))
        }
    }, [id]);
    if (!user) return <p>Loading...</p>
  return (
    <div style={{backgroundColor:'white'}}>
      
      <Middle user={user}/>
      
    </div>
  )
}

export default User
