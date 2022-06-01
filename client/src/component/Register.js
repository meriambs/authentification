import React,{useState} from 'react'
import { Form ,Button} from 'react-bootstrap';
import { postContact } from '../api/userApi';
import { useNavigate } from 'react-router';
const Register = () => {
  let navigate = useNavigate();
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=async(value)=>{
    await postContact(value)
    // console.log('addingContact',handleSubmit),
     navigate('/sigin')
    
      }
  return (


    <div><Form>
       <Form.Group className="mb-3" controlId="formGroupName" >
      <Form.Label>NAme</Form.Label>
      <Form.Control type="name" placeholder="Enter name"   value={name}
          onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"     value={email}
          onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>


    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"   value={password}
          onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
    <Button  onClick={()=>handleSubmit({name,email,password})}>enter</Button>
  </Form></div>
  )
}

export default Register