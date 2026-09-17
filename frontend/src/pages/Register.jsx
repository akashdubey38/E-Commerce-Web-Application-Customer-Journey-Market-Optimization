 import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const handleRegister = async (e)=>{
    e.preventDefault()
    const res = await fetch("https://e-commerce-web-application-0wdy.onrender.com/api/auth/register",{
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

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-2 border mb-3" required />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 border mb-3" required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 border mb-3" required />
        <button type="submit" className="w-full bg-black text-white p-2">Register</button>
      </form>
    </div>
  )
}

export default Register