 import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 119900, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500" },
  { id: 2, name: "Sony Headphones", price: 24990, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 3, name: "MacBook Air M2", price: 99900, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500" },
  { id: 4, name: "Nike Air Shoes", price: 7999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
  { id: 5, name: "Apple Watch", price: 41900, image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=500" },
  { id: 6, name: "Canon Camera", price: 55990, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500" },
];

function Home(){
  const { addToCart } = useCart();
  return(
    <div style={{padding:"20px", background:"#f1f3f6", minHeight:"100vh"}}>
      <h2 style={{textAlign:"center", margin:"20px 0"}}>🔥 Trending Products - Akash Store</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"20px", maxWidth:"1200px", margin:"auto"}}>
        {products.map(p => (
          <div key={p.id} style={{background:"white", borderRadius:"12px", padding:"15px", boxShadow:"0 4px 12px rgba(0,0,0,0.08)", transition:"0.3s", textAlign:"center"}}>
            <Link to={`/product/${p.id}`} state={p}>
              <img src={p.image} style={{width:"100%", height:"200px", objectFit:"contain", borderRadius:"8px"}}/>
            </Link>
            <h3 style={{margin:"10px 0 5px", fontSize:"16px"}}>{p.name}</h3>
            <p style={{color:"green", fontWeight:"bold", fontSize:"18px"}}>₹{p.price.toLocaleString("en-IN")}</p>
            <button onClick={() => addToCart(p)} style={{width:"100%", padding:"10px", background:"#ff9f00", border:"none", borderRadius:"6px", fontWeight:"bold", cursor:"pointer", marginTop:"8px"}}>
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home;