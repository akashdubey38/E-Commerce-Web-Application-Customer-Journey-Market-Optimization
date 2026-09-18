 import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ p }) {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const productId = p.id || p._id;
  const isWishlisted = wishlist.some((item) => (item.id || item._id) === productId);

  return (
    <div style={{ background: "white", borderRadius: "12px", padding: "15px", border: "1px solid #eee", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <Link to={`/product/${productId}`} state={p}>
        <img src={p.image} alt={p.name} style={{ width: "100%", height: "200px", objectFit: "contain", background: "#f9f9f9", borderRadius: "8px" }} />
      </Link>
      <h3 style={{ margin: "10px 0 5px", fontSize: "16px" }}>{p.name}</h3>
      <p style={{ margin: "0" }}><span style={{ color: "green", fontWeight: "bold", fontSize: "16px" }}>₹{p.price}</span></p>
      <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>⚡ Only {Math.floor(Math.random() * 5) + 1} left! 🔥 Trending</p>

      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        <button onClick={() => { addToCart(p); localStorage.setItem("cartTime", Date.now()); }} style={{ flex: 1, background: "black", color: "white", border: "none", padding: "10px", borderRadius: "8px", cursor: "pointer" }}>
          Add to Cart
        </button>
        <button onClick={() => toggleWishlist(p)} style={{ background: isWishlisted? "#ff3b30" : "#f1f1f1", border: "none", padding: "10px 12px", borderRadius: "8px", cursor: "pointer", fontSize: "18px" }}>
          {isWishlisted? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;