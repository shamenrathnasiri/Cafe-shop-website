import React from 'react';
import Bgimage from '../order page images/coffee order bg.jpg';
import order1 from '../order page images/order1.jpg';
import order2 from '../order page images/order2.jpg';
import order3 from '../order page images/order3.jpg';
import order4 from '../order page images/order4.jpg';
import order5 from '../order page images/order5.jpg';
import order6 from '../order page images/order6.jpg';

function Order() {
  const orderItems = [
    { img: order1, name: "English Breakfast", desc1: "For fresh wake up.", weight: "1kg", price: "Rs.4300.00" },
    { img: order2, name: "Chai Herbal", desc1: "For a healthy mind.", weight: "1kg", price: "Rs.5000.00" },
    { img: order3, name: "Black Forest", desc1: "For a black experience.", weight: "1kg", price: "Rs.5200.00" },
    { img: order4, name: "Night Movie", desc1: "For freshness at night.", weight: "1kg", price: "Rs.5500.00" },
    { img: order5, name: "Fresh Cup", desc1: "For a fresh mind.", weight: "1kg", price: "Rs.6000.00" },
    { img: order6, name: "Hey Welcome", desc1: "For functions & events.", weight: "1kg", price: "Rs.6500.00" }
  ];

  return (
    <>
      <div className="w-full min-h-full bg-gradient-to-b from-[#FFFFFF] to-[#A0FF9D]">
        {/* Background Section with Text Overlay */}
        <div className="relative flex w-full h-[100vh]">
          {/* Background Image */}
          <img
            src={Bgimage}
            alt="Background"
            className="absolute z-0 object-cover w-full h-full brightness-50"
          />
          
          {/* Text Overlay on image */}
          <div className="absolute z-10 px-6 mt-16 text-left text-white">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
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
      </div>
      
      <div className="flex justify-center py-10">
        <div className="grid max-w-6xl grid-cols-1 gap-20 px-6 sm:grid-cols-2 md:grid-cols-2">
          {orderItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={item.img} alt={item.name} className="w-[150px] h-[150px] rounded-xl shadow-md" />
              <div className="mt-2">
                <p className="text-lg font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.desc1}</p>
                <p className="font-semibold text-gray-800 text-md">{item.weight}</p>
                <p className="font-bold text-red-600">{item.price}</p>
                <button className="px-3 py-1 mt-2 font-bold text-black bg-green-500 rounded-lg shadow-md hover:bg-yellow-300">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Order;
