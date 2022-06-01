import React from 'react'
import { Navbar,Container,Nav,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router';

const PrivateRoute = () => {
    const navigate = useNavigate()
    const logout=(token)=>{
        localStorage.removeItem("token")
        navigate('/')
    }
    const token=localStorage.getItem('token')
    console.log('token',token)
  return (
    <div>{ token? ( <div>
          <Button onClick={()=>logout()} >Logout</Button>
       
  <div><h1>hello</h1></div>
  </div>) : (<h2>heyyy no</h2>)}
    </div>
  )
}

export default PrivateRoute