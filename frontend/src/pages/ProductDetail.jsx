 import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: "1", name: "Wireless Headphones", price: 2999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", desc: "High quality wireless headphones with 40 hours battery backup and noise cancellation. Perfect for music lovers." },
  { id: "2", name: "Nike Running Shoes", price: 4999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", desc: "Comfortable Nike shoes for running and gym. Lightweight and durable with great grip." },
  { id: "3", name: "Smart Watch", price: 3999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", desc: "Track your fitness, heart rate, and notifications with this smart watch." },
  { id: "4", name: "DSLR Camera", price: 45999, image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500", desc: "Professional DSLR camera for stunning photos and 4K video recording." },
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) return <h2 style={{textAlign:"center", marginTop:"50px"}}>Product not found</h2>;

  return (
    <div style={{display:"flex", gap:"40px", padding:"40px", maxWidth:"900px", margin:"auto"}}>
      <img src={product.image} alt={product.name} style={{width:"400px", borderRadius:"10px"}}/>
      <div>
        <h1>{product.name}</h1>
        <h2>₹{product.price}</h2>
        <p style={{margin:"20px 0", color:"#555"}}>{product.desc}</p>
        <button onClick={() => addToCart(product)} style={{padding:"12px 24px", background:"black", color:"white", border:"none", borderRadius:"6px", cursor:"pointer"}}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductDetail;