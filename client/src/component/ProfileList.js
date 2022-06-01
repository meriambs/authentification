import React, { useState, useEffect } from "react";
import Profil from './Profil'
import { fetchAccounts } from '../api/userApi'
import {useDispatch,useSelector} from 'react-redux'
import {setContacts } from '../store/userSlice'
const ProfileList = () => {
  const dispatch = useDispatch()
    const users = useSelector(state=>state.user)
    console.log('userof the list',users)


  const getAccount=async()=>{
    const data = await fetchAccounts()
    dispatch(setContacts(data.users))
    console.log('datat',data.users)
  }
  useEffect(()=>{
    getAccount();
  },[])

  return (
    <div style={{display:"flex",justifyContent:'space-around',flexWrap:'wrap'}}>
        {users.map((e)=>(<Profil usesr={e} getAccount={getAccount}/>))}
    </div>
  )
}

export default ProfileList