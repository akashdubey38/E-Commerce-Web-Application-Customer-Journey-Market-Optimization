 import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Cart(){
  const { cart, removeFromCart } = useCart()
  const navigate = useNavigate()
  const [showOffer, setShowOffer] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  useEffect(()=>{
    if(cart.length > 0){
      const timer = setTimeout(()=> setShowOffer(true), 3000) // 3 sec baad offer
      return ()=> clearTimeout(timer)
    }
  },[cart])

  useEffect(()=>{
    if(!showOffer) return
    const interval = setInterval(()=> setTimeLeft(p => p>0? p-1 : 0), 1000)
    return ()=> clearInterval(interval)
  },[showOffer])

  if(cart.length === 0) return <h2 style={{textAlign:"center", marginTop:"50px"}}>Cart is Empty</h2>

  const finalTotal = showOffer? total * 0.9 : total

  return(
    <div style={{maxWidth:"600px", margin:"auto", padding:"20px"}}>
      <h2>Your Cart - {cart.length} items</h2>

      {/* FEATURE 1: Abandoned Cart Offer */}
      {showOffer && (
        <div style={{background:"#fff3cd", border:"2px dashed #ffc107", padding:"15px", borderRadius:"10px", marginBottom:"15px", textAlign:"center"}}>
          <h3 style={{margin:0}}>🔥 Your Cart is Waiting!</h3>
          <p>Checkout in {Math.floor(timeLeft/60)}:{(timeLeft%60).toString().padStart(2,'0')} & get 10% OFF</p>
          <b style={{background:"black", color:"white", padding:"6px 12px", borderRadius:"5px"}}>AKASH10</b>
        </div>
      )}

      {cart.map((item, index) => (
        <div key={index} style={{display:"flex", gap:"15px", border:"1px solid #ddd", padding:"10px", marginBottom:"10px", borderRadius:"8px"}}>
          <img src={item.image} width="80" style={{borderRadius:"6px"}}/>
          <div style={{flex:1}}>
            <h4 style={{margin:0}}>{item.name}</h4>
            <p>₹{item.price}</p>
            {/* FEATURE 3: Urgency */}
            <p style={{color:"red", fontSize:"12px", margin:0}}>⚡ Only {Math.floor(Math.random()*3)+1} left! | 🔥 12 people viewing</p>
          </div>
          <button onClick={()=> removeFromCart(index)} style={{background:"red", color:"white", border:"none", height:"30px", padding:"0 10px", borderRadius:"5px"}}>X</button>
        </div>
      ))}

      {/* Yahi wo button hai jo Resume wala point pura karega */}
      <div style={{marginTop:"20px", borderTop:"2px solid black", paddingTop:"15px"}}>
        <h2>Total: ₹{total} {showOffer && <span style={{color:"green"}}>→ ₹{finalTotal.toFixed(0)}</span>}</h2>
        <p style={{color:"green", fontWeight:"bold"}}>🔒 100% Secure Checkout | Free Delivery</p>
        <button onClick={()=> navigate("/checkout")} style={{width:"100%", padding:"12px", background:"#007bff", color:"white", border:"none", borderRadius:"8px", fontSize:"16px", cursor:"pointer"}}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart