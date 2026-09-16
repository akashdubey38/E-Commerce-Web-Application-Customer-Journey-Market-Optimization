 import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault();
    localStorage.removeItem("cart");
    navigate("/success");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2 style={{ textAlign: "center" }}>Checkout</h2>
      <p style={{ textAlign: "center" }}>Cart - Address - Payment</p>
      <p style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>100% Secure Payment | Free Delivery</p>
      
      <form onSubmit={handleOrder} style={{ marginTop: "20px" }}>
        <label>Full Address</label>
        <input 
          type="text" 
          placeholder="Jabalpur, MP 482001" 
          defaultValue="jabalpur, MP 482001"
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", marginTop: "5px" }}
        />
        <button 
          type="submit"
          style={{ width: "100%", padding: "12px", background: "black", color: "white", cursor: "pointer", fontWeight: "bold" }}
        >
          Pay Now & Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;