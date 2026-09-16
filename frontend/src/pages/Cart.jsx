 import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart(){
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  if(cart.length === 0) return <h2 style={{textAlign:"center", marginTop:"50px"}}>Cart is Empty 🛒</h2>

  return(
    <div style={{maxWidth:"600px", margin:"auto", padding:"20px"}}>
      <h2>Your Cart - {cart.length} items</h2>
      {cart.map((item, index) => (
        <div key={index} style={{display:"flex", gap:"15px", border:"1px solid #ddd", padding:"10px", marginBottom:"10px", borderRadius:"8px"}}>
          <img src={item.image} width="80" style={{borderRadius:"6px"}}/>
          <div style={{flex:1}}>
            <h4 style={{margin:0}}>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
          <button onClick={() => removeFromCart(index)} style={{background:"red", color:"white", border:"none", padding:"5px 10px", height:"30px", borderRadius:"5px", cursor:"pointer"}}>Remove</button>
        </div>
      ))}

      {/* Yahi wo button hai jo Resume wala point pura karega */}
      <div style={{marginTop:"20px", borderTop:"2px solid black", paddingTop:"15px"}}>
        <h2>Total: ₹{total}</h2>
        <p style={{color:"green", fontWeight:"bold"}}>🔒 100% Secure Checkout | Free Delivery</p>
        
        <button onClick={() => navigate("/checkout")} 
        style={{width:"100%", padding:"12px", background:"black", color:"white", fontSize:"18px", borderRadius:"8px", cursor:"pointer"}}>
          Proceed to Checkout
        </button>
      </div>

    </div>
  )
}
export default Cart;