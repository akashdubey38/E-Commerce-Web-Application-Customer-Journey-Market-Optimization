 import { useParams, useLocation, Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const allProducts = [
  { id: 1, name: "iPhone 15 Pro", price: 134900, category: "mobile", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", desc: "A17 Pro chip, Titanium design, Best camera ever." },
  { id: 2, name: "Sony Headphones WH-1000XM5", price: 24990, category: "audio", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500", desc: "Industry leading noise cancellation." },
  { id: 3, name: "MacBook Air M2", price: 99900, category: "laptop", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", desc: "Supercharged by M2, 13.6 inch Liquid Retina." },
  { id: 4, name: "Nike Air Shoes", price: 7999, category: "shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", desc: "Comfort and style for daily run." },
  { id: 7, name: "Samsung S24 Ultra", price: 129999, category: "mobile", image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500", desc: "200MP Camera, S Pen included." },
  { id: 8, name: "JBL Speaker", price: 3999, category: "audio", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500", desc: "Bold sound, 12 Hours battery." },
]

function ProductDetail() {
  const { id } = useParams()
  const { state } = useLocation()
  const { addToCart } = useCart()
  
  // Home se aaya hai to state lega, nahi to list se dhundega
  const product = state || allProducts.find(p => p.id == id)

  if (!product) return <h2 style={{textAlign:"center", marginTop:"50px"}}>Product not found</h2>

  const similar = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0,4)

  return (
    <div style={{maxWidth:"1000px", margin:"auto", padding:"20px", background:"#f1f3f6", minHeight:"100vh"}}>
      <div style={{display:"flex", gap:"40px", background:"white", padding:"30px", borderRadius:"12px"}}>
        <img src={product.image} alt={product.name} style={{width:"400px", borderRadius:"10px"}}/>
        <div>
          <h1>{product.name}</h1>
          <h2 style={{color:"green"}}>₹{product.price.toLocaleString()}</h2>
          <p style={{margin:"20px 0", color:"#555"}}>{product.desc}</p>
          
          <p style={{color:"red", fontWeight:"bold"}}>⚡ Only 2 left! | 🔥 42 people viewed today</p>
          <p style={{color:"green"}}>✓ Free Delivery Tomorrow | ✓ 7 Days Return</p>
          
          <button onClick={() => { addToCart(product); localStorage.setItem("cartTime", Date.now().toString()) }} style={{padding:"12px 24px", background:"#ff9f00", border:"none", borderRadius:"8px", fontWeight:"bold", cursor:"pointer", marginRight:"10px"}}>Add to Cart</button>
          <Link to="/cart"><button style={{padding:"12px 24px", background:"#fb641b", color:"white", border:"none", borderRadius:"8px", fontWeight:"bold"}}>Go to Cart</button></Link>
        </div>
      </div>

      <div style={{marginTop:"30px", background:"white", padding:"20px", borderRadius:"12px"}}>
        <h2>👥 Customers Who Viewed This Also Bought</h2>
        <div style={{display:"flex", gap:"15px", overflowX:"auto"}}>
          {similar.length > 0 ? similar.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} state={p} style={{minWidth:"180px", border:"1px solid #ddd", padding:"10px", borderRadius:"8px", textDecoration:"none", color:"black", textAlign:"center"}}>
              <img src={p.image} style={{width:"100%", height:"120px", objectFit:"contain"}}/>
              <p style={{fontSize:"14px", margin:"8px 0"}}>{p.name}</p>
              <b>₹{p.price.toLocaleString()}</b>
            </Link>
          )) : <p>No similar products</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail