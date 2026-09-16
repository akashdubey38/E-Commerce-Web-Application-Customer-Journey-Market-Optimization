 import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const handleRegister = async (e)=>{
    e.preventDefault()
    const res = await fetch("http://localhost:5000/api/auth/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({name,email,password})
    })
    const data = await res.json()
    if(data.message){
      alert("Registered! Ab Login karo")
      navigate("/login")
    } else {
      alert(data.error)
    }
  }

  return(
    <div style={{maxWidth:"400px", margin:"50px auto"}}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input style={{width:"100%", padding:"10px", margin:"10px 0"}} placeholder="Name" onChange={e=>setName(e.target.value)} />
        <input style={{width:"100%", padding:"10px", margin:"10px 0"}} placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input style={{width:"100%", padding:"10px", margin:"10px 0"}} type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button style={{width:"100%", padding:"10px", background:"green", color:"white", border:"none"}}>Register</button>
      </form>
    </div>
  )
}
export default Register