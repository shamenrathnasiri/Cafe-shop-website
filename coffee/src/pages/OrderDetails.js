import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import orderbg from '../order page images/order bg2.jpg';

function OrderDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { img, name, desc1, weight, price } = location.state || {};

  // Correct the typo from fromData to formData
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    quantity: "",
    shipping_code: "",
    country: ""
  });

  // If no name, redirect to the home page
  if (!name) {
    navigate("/"); 
    return null;
  }

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      item_name: name,
      item_weight: weight,
      item_price: price
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/order", orderData);
      // Assuming you want to show a message or an alert here instead of AudioListener
      alert(response.data.message);
      navigate("/");  // Redirect after placing the order
    } catch (error) {
      console.error("Error Placing Order:", error);
      alert("Failed to place order!");  // Show an alert for failed order placement
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <img src={orderbg} alt="Order Background" className="flex w-full h-full brightness-50" />  
        <div className="absolute z-10 px-6 mt-16 text-center text-white ">
          <h1 className="text-5xl font-extrabold text-center drop-shadow-md">
            Cozy Bean Cafe - Your <br />
            Perfect Brew, Just a Click Away!
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed drop-shadow-md">
            Indulge in the rich aroma and flavors of handcrafted coffee with our seamless online <br />
            ordering experience. Whether you're craving a bold espresso, a creamy latte, or a<br />
            refreshing iced coffee, our beautifully designed order page makes it easy to customize<br />
            and order your favorite brew in seconds.
          </p>
          <h2 className="mt-6 text-2xl font-bold drop-shadow-md">Order In Here.</h2>
          <p className="text-sm font-semibold text-gray-300 drop-shadow-md">
            (You can order only one at a time...)
          </p>
        </div>
      </div>
   
      <div className="flex justify-center items-center min-h-screen bg-[#ffff] mt-4">
        <div className="w-full max-w-2xl p-6 bg-[#F3E5AB] rounded-lg shadow-lg">
          <img src={img} alt={name} className="w-40 h-40 mx-auto -ml-0 rounded-lg shadow-m" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-gray-600">{desc1}</p>
          <p className="font-semibold text-gray-700">{weight}</p>
          <p className="text-lg font-bold text-red-600">{price}</p>
        
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required 
            />
            <input 
              type="text" 
              placeholder="Address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required 
            />
            <input 
              type="number" 
              placeholder="Quantity" 
              name="quantity" 
              value={formData.quantity} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required 
            />
            <input 
              type="text" 
              placeholder="Shipping Code" 
              name="shipping_code" 
              value={formData.shipping_code} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required 
            />
            <input 
              type="text" 
              placeholder="Country" 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required 
            />
            <button 
              type="submit" 
              className="w-full py-2 font-bold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600"
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
