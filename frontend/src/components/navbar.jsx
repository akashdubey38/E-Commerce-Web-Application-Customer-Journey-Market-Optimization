 import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      background: darkMode? "#1f1f1f" : "white",
      color: darkMode? "white" : "black",
      borderBottom: darkMode? "1px solid #333" : "1px solid #eee",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
    }}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit", fontWeight: "bold", fontSize: "20px" }}>
        🛒 Akash Store
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
        
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit", position: "relative" }}>
          Cart 🛒
          {cart.length > 0 && (
            <span style={{
              background: "red", color: "white", borderRadius: "50%",
              padding: "2px 6px", fontSize: "11px", marginLeft: "4px"
            }}>
              {cart.length}
            </span>
          )}
        </Link>

        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          Wishlist ❤️ {wishlist.length > 0 && `(${wishlist.length})`}
        </Link>

        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link>

        <button onClick={toggleTheme} style={{
          background: darkMode? "#333" : "#f1f1f1",
          color: darkMode? "white" : "black",
          border: "1px solid",
          padding: "6px 14px",
          borderRadius: "20px",
          cursor: "pointer",
          fontSize: "14px"
        }}>
          {darkMode? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;