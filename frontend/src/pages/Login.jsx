 import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Register(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const handleRegister = async (e)=>{
    e.preventDefault()
    const res = await fetch("https://e-commerce-backend-akash38.onrender.com/api/auth/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({name,email,password})
    })
    const data = await res.json()
    if(data.token || data.message){
      alert("Register Success! Please Login")
      navigate("/login")
    } else {
      alert(data.error || "Register failed")
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have account? <Link to="/login">Login</Link></p>
    </div>
  )
}
export default Register