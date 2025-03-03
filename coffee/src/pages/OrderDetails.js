import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import orderbg from '../order page images/order bg2.jpg';

function OrderDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { img, name, desc1, weight, price } = location.state || {};

  if (!name) {
    navigate("/"); 
    return null;
  }

  return (
    <div>
        <div className="flex justify-center">
            
        </div>
   
    <div className="flex justify-center items-center min-h-screen bg-[#F3E5AB]">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <img src={img} alt={name} className="w-40 h-40 mx-auto -ml-0 rounded-lg shadow-m" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">{name}</h2>
        <p className="text-gray-600 ">{desc1}</p>
        <p className="font-semibold ext-gray-700 r">{weight}</p>
        <p className="text-lg font-bold text-red-600 t">{price}</p>
        
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded-lg" required />
          <input type="text" placeholder="Address" className="w-full p-2 border rounded-lg" required />
          <input type="number" placeholder="Quantity" className="w-full p-2 border rounded-lg" required />
          <input type="text" placeholder="Shipping Code" className="w-full p-2 border rounded-lg" required />
          <input type="text" placeholder="Country" className="w-full p-2 border rounded-lg" required />
          <button type="submit" className="w-full py-2 font-bold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600">Order Now</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default OrderDetails;
