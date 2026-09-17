 import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
    if(res.ok){
      alert("Registered Successfully!")
      navigate("/login")
    } else {
      alert(data.error || "Failed")
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input className="border p-2 rounded" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" required />
          <input className="border p-2 rounded" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required />
          <input className="border p-2 rounded" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required />
          <button className="bg-blue-600 text-white p-2 rounded" type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}
export default Register