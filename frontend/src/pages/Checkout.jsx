 import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems } = useCart();
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Placed:", address, cartItems);
    alert("Order Placed Successfully!");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", marginTop: "5px" }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", marginTop: "5px" }}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter your full address, City, State, Pincode"
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", marginTop: "5px" }}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
            style={{ width: "50%", padding: "10px", marginBottom: "15px" }}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
            required
            style={{ width: "50%", padding: "10px", marginBottom: "15px" }}
          />
        </div>
        <button
          type="submit"
          style={{ width: "100%", padding: "12px", background: "black", color: "white", cursor: "pointer", border: "none", borderRadius: "5px" }}
        >
          Pay Now & Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;