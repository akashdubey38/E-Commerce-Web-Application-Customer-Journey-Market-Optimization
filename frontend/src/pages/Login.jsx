 import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const handleLogin = async (e)=>{
    e.preventDefault()
    const res = await fetch("https://e-commerce-web-application-0wdy.onrender.com/api/auth/login",{
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
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 border mb-3" required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 border mb-3" required />
        <button type="submit" className="w-full bg-black text-white p-2">Login</button>
      </form>
    </div>
  )
}

export default Login