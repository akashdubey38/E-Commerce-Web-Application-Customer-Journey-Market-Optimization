 import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

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
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Login to Akash Store</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition-all duration-200 mt-2">Login</button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? <Link to="/register" className="text-blue-600 font-semibold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  )
}
export default Login