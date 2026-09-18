 import React from 'react';

const Checkout = () => {

  const handlePayment = async () => {
    // 1. Backend se order banao
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1 }) // 1 Rupee test payment
    });

    const data = await res.json();
    console.log(data);

    // 2. Razorpay options
    const options = {
      key: "rzp_test_TdUrNgXplmKkia", // Tera Test Key
      amount: data.amount,
      currency: "INR",
      name: "Akash Store",
      description: "Test Transaction",
      order_id: data.id,

      // YE FIX HAI - Isse mobile number ka error nahi aayega
      prefill: {
        name: "Akash",
        email: "akash@gmail.com",
        contact: "9876543210"
      },

      handler: function (response) {
        alert("Payment Success! Payment ID: " + response.razorpay_payment_id);
        console.log(response);
      },
      
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Cart Total: ₹1</h2>
      <button 
        onClick={handlePayment}
        style={{ padding: '15px 30px', background: 'black', color: 'white', fontSize: '18px', cursor: 'pointer', borderRadius: '8px' }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;