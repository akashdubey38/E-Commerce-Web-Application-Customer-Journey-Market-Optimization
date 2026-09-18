 import { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");

  // Tere saare products - backend se aayenge to yahi rahega
  const [products] = useState([
  { id: "1", name: "Samsung Galaxy S24 Ultra", price: 129999, image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500" },
  { id: "2", name: "Adidas Running Shoes", price: 5999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
  { id: "3", name: "Fossil Smartwatch", price: 14999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: "4", name: "Sony WH-1000XM5 Headphones", price: 24999, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500" },
  { id: "5", name: "Apple MacBook Air M2", price: 114900, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500" },
  { id: "6", name: "Nike Air Jordan 1", price: 8999, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500" },
  { id: "7", name: "Canon EOS 1500D Camera", price: 45999, image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500" },
  { id: "8", name: "Levi's Denim Jacket", price: 3999, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500" },
  { id: "9", name: "iPhone 15 Pro Max", price: 159900, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500" },
  { id: "10", name: "Puma Backpack", price: 2499, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
  { id: "11", name: "Boat Wave Smartwatch", price: 2999, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
  { id: "12", name: "JBL Flip 6 Speaker", price: 7999, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
  { id: "13", name: "HP Gaming Laptop Victus", price: 67999, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500" },
  { id: "14", name: "Ray-Ban Aviator Sunglasses", price: 7990, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },
  { id: "15", name: "Apple AirPods Pro 2", price: 26900, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500" },
  { id: "16", name: "Fastrack Analog Watch", price: 3495, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500" },
  { id: "17", name: "The North Face T-Shirt", price: 1999, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
  { id: "18", name: "Samsung 4K Smart TV 55 inch", price: 52999, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500" },
  { id: "19", name: "LG Double Door Refrigerator", price: 38990, image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500" },
  { id: "20", name: "OnePlus Nord Buds 2", price: 2999, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500" },
]);
  

  const startVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Voice search not supported in this browser");
    const rec = new SpeechRecognition();
    rec.lang = "en-IN";
    rec.onresult = (e) => setSearch(e.results[0][0].transcript);
    rec.start();
  };

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: "20px", background: "#f1f3f6", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>🔥 Trending Products - Akash Store</h2>

      {/* Voice Search + Text Search */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search iPhone, Shoes..." style={{ padding: "10px 15px", borderRadius: "25px", border: "1px solid #ccc", width: "320px" }} />
        <button onClick={startVoice} style={{ padding: "10px 15px", borderRadius: "25px", border: "none", background: "black", color: "white", cursor: "pointer" }}>🎤</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;