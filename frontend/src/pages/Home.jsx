 import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useState } from "react"

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 134900, category: "mobile", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", oldPrice: 139900 },
  { id: 2, name: "Sony Headphones WH-1000XM5", price: 24990, category: "audio", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500", oldPrice: 29990 },
  { id: 3, name: "MacBook Air M2", price: 99900, category: "laptop", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", oldPrice: 119900 },
  { id: 4, name: "Nike Air Shoes", price: 7999, category: "shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", oldPrice: 9999 },
  { id: 5, name: "Apple Watch Series 9", price: 41900, category: "watch", image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=500", oldPrice: 45900 },
  { id: 6, name: "Canon Camera EOS R50", price: 55990, category: "camera", image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500", oldPrice: 62990 },
  { id: 7, name: "Samsung Galaxy S24 Ultra", price: 129999, category: "mobile", image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500", oldPrice: 139999 },
  { id: 8, name: "JBL Bluetooth Speaker", price: 3999, category: "audio", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500", oldPrice: 5999 },
  { id: 9, name: "Puma T-Shirt", price: 1299, category: "fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", oldPrice: 1999 },
  { id: 10, name: "Levi's Jeans", price: 3499, category: "fashion", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", oldPrice: 4999 },
  { id: 11, name: "HP Gaming Laptop", price: 74990, category: "laptop", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500", oldPrice: 89990 },
  { id: 12, name: "Adidas Running Shoes", price: 5999, category: "shoes", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500", oldPrice: 7999 },
  { id: 13, name: "Fossil Smartwatch", price: 18999, category: "watch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", oldPrice: 22999 },
  { id: 14, name: "GoPro Hero 11", price: 45990, category: "camera", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500", oldPrice: 52990 },
  { id: 15, name: "OnePlus Buds Pro 2", price: 11999, category: "audio", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", oldPrice: 13999 },
  { id: 16, name: "Zara Hoodie", price: 2499, category: "fashion", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", oldPrice: 3999 },
  { id: 17, name: "Dell Monitor 27 inch", price: 18999, category: "laptop", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", oldPrice: 23999 },
  { id: 18, name: "Skechers Sneakers", price: 4999, category: "shoes", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500", oldPrice: 6999 },
  { id: 19, name: "Boat Rockerz 550", price: 1999, category: "audio", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500", oldPrice: 2999 },
  { id: 20, name: "iPad Air M1", price: 59900, category: "laptop", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", oldPrice: 69900 },
]

function Home(){
  const { addToCart } = useCart()
  const [search, setSearch] = useState("")

  const startVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if(!SpeechRecognition) return alert("Voice search not supported in this browser")
    const rec = new SpeechRecognition()
    rec.lang = "en-IN"
    rec.onresult = (e) => setSearch(e.results[0][0].transcript)
    rec.start()
  }

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  return(
    <div style={{padding:"20px", background:"#f1f3f6", minHeight:"100vh"}}>
      <h2 style={{textAlign:"center", margin:"20px 0"}}>🔥 Trending Products - Akash Store</h2>

      {/* Voice Search + Text Search */}
      <div style={{display:"flex", justifyContent:"center", gap:"10px", marginBottom:"20px"}}>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search iPhone, Shoes, Watch..." style={{padding:"12px", width:"350px", borderRadius:"25px", border:"1px solid #ccc"}}/>
        <button onClick={startVoice} style={{padding:"10px 15px", borderRadius:"25px", border:"none", background:"black", color:"white", cursor:"pointer"}}>🎤</button>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"20px"}}>
        {filtered.map((p)=>(
          <div key={p.id} style={{background:"white", borderRadius:"12px", padding:"15px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
            <Link to={`/product/${p.id}`} state={p}>
              <img src={p.image} style={{width:"100%", height:"200px", objectFit:"contain", borderRadius:"8px"}}/>
            </Link>
            <h3 style={{margin:"10px 0 5px", fontSize:"16px"}}>{p.name}</h3>
            <p style={{margin:0}}><span style={{color:"green", fontWeight:"bold", fontSize:"18px"}}>₹{p.price.toLocaleString()}</span> <span style={{textDecoration:"line-through", color:"gray", fontSize:"14px"}}>₹{p.oldPrice.toLocaleString()}</span> <span style={{color:"red", fontSize:"13px"}}>({Math.round((p.oldPrice-p.price)/p.oldPrice*100)}% OFF)</span></p>
            <p style={{color:"red", fontSize:"12px", margin:"5px 0"}}>⚡ Only {Math.floor(Math.random()*4)+1} left | {Math.floor(Math.random()*50)+10} people viewing</p>
            <button onClick={()=> { addToCart(p); localStorage.setItem("cartTime", Date.now()) }} style={{width:"100%", padding:"10px", background:"#ff9f00", border:"none", borderRadius:"6px", fontWeight:"bold", cursor:"pointer", marginTop:"8px"}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home