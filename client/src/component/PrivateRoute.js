import React, { useState, useEffect } from "react";import { Navbar,Container,Nav,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router';
import {fetchAccount} from '../api/userApi'
import {useDispatch,useSelector} from 'react-redux'
import {setAccount } from '../store/accountSlice'
const PrivateRoute = () => {
  const dispatch = useDispatch()
  const account = useSelector(state=>state.account)
  console.log('userof the private ',account)


const getAccount=async()=>{
  const data = await fetchAccount()
  console.log('datat',data)
  dispatch(setAccount(data))
 
}
useEffect(()=>{
  getAccount();
},[])

    const navigate = useNavigate()
    const logout=(token)=>{
        localStorage.removeItem("token")
        navigate('/')
    }
    const token=localStorage.getItem('token')
    console.log('token',token)
  return (
    <div>{ token? ( <div> 
          {/* <Button onClick={()=>logout()} >Logout</Button> */}
       
  <div><h1>hello and welcome {account.name} </h1></div>
  </div>) : (<h2>heyyy no</h2>)}
    </div>
  )
}

export default PrivateRoute