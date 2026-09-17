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
      alert("Login Success!")
      navigate("/")
    } else {
      alert(data.error || "Login failed")
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input className="border p-2 rounded" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required />
          <input className="border p-2 rounded" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required />
          <button className="bg-blue-600 text-white p-2 rounded" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
export default Login