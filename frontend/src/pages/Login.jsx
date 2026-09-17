 import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Login(){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const handleLogin = async (e)=>{
    e.preventDefault()
    const res = await fetch("https://e-commerce-backend-akash38.onrender.com/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({email,password})
    })
    const data = await res.json()
    if(data.token){
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user || {email}))
      alert("Login Success!")
      navigate("/")
      window.location.reload()
    } else {
      alert(data.error || data.message || "Login failed")
    }
  }

  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}>
      <form onSubmit={handleLogin} style={{display:"flex", flexDirection:"column", gap:"10px", width:"300px", padding:"20px", border:"1px solid #ccc", borderRadius:"8px"}}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit" style={{background:"blue", color:"white", padding:"10px", border:"none", borderRadius:"5px"}}>Login</button>
        <p>Account nahi hai? <Link to="/register">Register</Link></p>
      </form>
    </div>
  )
}

export default Login