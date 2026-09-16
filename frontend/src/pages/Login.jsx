 import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const handleLogin = async (e)=>{
    e.preventDefault()
    const res = await fetch("http://localhost:5000/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({email,password})
    })
    const data = await res.json()
    if(data.token){
      localStorage.setItem("token", data.token)
      alert("Login Success!")
      navigate("/")
    } else {
      alert(data.error)
    }
  }

  return(
    <div style={{maxWidth:"400px", margin:"50px auto"}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input style={{width:"100%", padding:"10px", margin:"10px 0"}} placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input style={{width:"100%", padding:"10px", margin:"10px 0"}} type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button style={{width:"100%", padding:"10px", background:"#2874f0", color:"white", border:"none"}}>Login</button>
      </form>
    </div>
  )
}
export default Login