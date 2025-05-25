"use client";

import { useEffect, useState } from "react";

function ViewPaymentInfo() {
  const [amount, setAmount] = useState<string>("");

  // Load Razorpay script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const options = {
      key: "rzp_test_7nJ38usEhj4vMd", // 🔁 Replace with your Razorpay Test Key
      amount: parsedAmount * 100, // Convert to paise
      currency: "INR",
      name: "HealthCare Booking",
      description: "Custom Payment",
      image: "/logo.png",
      handler: function (response: any) {
        alert("Payment successful!");
        console.log("Razorpay Payment ID:", response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
      },
      theme: {
        color: "#00B4D8",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="m-4">
      <p className="font-semibold mb-4">Enter the amount to pay:</p>

      <input
        type="number"
        placeholder="Enter amount in ₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border rounded px-3 py-2 mb-4 w-full md:w-64"
        min="1"
      />

      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Pay Now ₹{amount || "0"}
      </button>
    </div>
  );
}

export default ViewPaymentInfo;
