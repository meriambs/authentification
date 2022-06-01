import React ,{useState} from 'react'
import { Form ,Button} from 'react-bootstrap';
// import {postLogin} from '../api/userApi'
import { useNavigate } from 'react-router';
import axios from 'axios'
const Login = () => {
  let navigate = useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const onSubmit=async (values) => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/login`, values);
    await localStorage.setItem('token', res.data.token);
    setTimeout(()=>{
      navigate('/app/Profile')
    }, 500)
  }
  return (
    <div><Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  value={email}
          onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"value={password}
          onChange={(e)=>setPassword(e.target.value)}  />
    </Form.Group>
    <Button  onClick={()=>onSubmit({email,password})}  >enter</Button>
  </Form></div>
  )
}

export default Login