import { useState } from "react"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

function Signup() {
  const navigate =useNavigate();
  const [firstName,setFN]=useState("");
 const [lastName,setLN]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [phoneNumber,setPhone]=useState(0);
 const handleSignup=async (event)=>{
  event.preventDefault()
  const req= await axios.post("http://localhost:3001/signup",{
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password,
    phoneNumber:phoneNumber
  })
  const message =req.data.message
  const isSignup=req.data.isSignup
  if(isSignup){
    alert(message)
    navigate("/login")
  }else{
    alert(message)
  }
  
 }
  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
          <label htmlFor="firstName">FirstName:</label> 
          <input type="text" id="firstName" value={firstName} onChange={(e)=> setFN (e.target.value)} required />
          <br />
          <label htmlFor="lastName">LastName:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e)=> setLN (e.target.value)} required />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={e=> setEmail ((e).target.value)} required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e)=> setPassword (e.target.value)} required />
          <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="number" id="phoneNumber" value={phoneNumber} onChange={(e)=> setPhone (e.target.value)} required />
          <br />
          <button type="submit">SignUp</button>
      </form>
      <p>Already have an account? <Link to='/login'>Login</Link> </p>
    </div>
  )
}

export default Signup