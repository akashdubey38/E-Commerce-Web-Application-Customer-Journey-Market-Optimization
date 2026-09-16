 import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar(){
  const { cart } = useCart();
  return(
    <div style={{display:"flex", justifyContent:"space-between", padding:"12px 30px", background:"#2874f0", color:"white", alignItems:"center", position:"sticky", top:0, zIndex:10}}>
      <Link to="/" style={{color:"white", textDecoration:"none", fontWeight:"bold", fontSize:"20px"}}>Akash Store 🛍️</Link>
      <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
        <Link to="/" style={{color:"white", textDecoration:"none"}}>Home</Link>
        <Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link>
        <Link to="/register" style={{color:"white", textDecoration:"none"}}>Register</Link>
        <Link to="/cart" style={{background:"white", color:"#2874f0", padding:"6px 14px", borderRadius:"20px", textDecoration:"none", fontWeight:"bold"}}>
          Cart ({cart.length})
        </Link>
      </div>
    </div>
  )
}
export default Navbar; 