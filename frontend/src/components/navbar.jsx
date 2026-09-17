 import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar(){
  const { cart } = useCart();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return(
    <div style={{display:"flex", justifyContent:"space-between", padding:"12px 30px", background:"#007bff", alignItems:"center"}}>
      <Link to="/" style={{color:"white", textDecoration:"none", fontWeight:"bold", fontSize:"18px"}}>Akash Store</Link>
      <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
        <Link to="/" style={{color:"white", textDecoration:"none"}}>Home</Link>
        {!token ? (
          <>
            <Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link>
            <Link to="/register" style={{color:"white", textDecoration:"none"}}>Register</Link>
          </>
        ) : (
          <span onClick={handleLogout} style={{color:"white", cursor:"pointer"}}>Logout</span>
        )}
        <Link to="/cart" style={{background:"white", color:"#007bff", padding:"6px 14px", borderRadius:"20px", textDecoration:"none", fontWeight:"bold"}}>
          Cart ({cart.length})
        </Link>
      </div>
    </div>
  )
}

export default Navbar;