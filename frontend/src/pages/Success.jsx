 import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

function Success(){
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return(
    <div style={{textAlign:"center", marginTop:"80px"}}>
      <h1 style={{fontSize:"60px"}}>✅</h1>
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for shopping with Akash Store</p>
      <p>Your order will be delivered soon.</p>
      <Link to="/">
        <button style={{padding:"12px 24px", background:"black", color:"white", border:"none", borderRadius:"6px", cursor:"pointer", marginTop:"20px"}}>
          Continue Shopping
        </button>
      </Link>
    </div>
  )
}
export default Success;