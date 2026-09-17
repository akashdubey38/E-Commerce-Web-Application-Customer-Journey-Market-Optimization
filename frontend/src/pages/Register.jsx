 import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

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
    if(res.ok){
      alert("Registered Successfully!")
      navigate("/login")
    } else {
      alert(data.error || "Failed")
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Akash Store</h2>
        <p className="text-center text-gray-500 mb-6">Create your account</p>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} required />
          <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition-all duration-200 mt-2">Register</button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  )
}
export default Register