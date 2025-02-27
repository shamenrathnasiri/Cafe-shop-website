import React from 'react';
import bun1 from '../menu page images/bun1.jpg';
import bun2 from '../menu page images/bun2.jpg';
import bun3 from '../menu page images/bun3.jpg';
import bun4 from '../menu page images/bun4.jpg';
import bun5 from '../menu page images/bun5.jpg';
import bun6 from '../menu page images/bun6.jpg';

function Icecoffee() {
  
  const coffeeItems = [
    { img: bun1, name: "Vietnamese iced",  price: "Rs.150.00" },
    { img: bun2, name: "Nitro Cold",  price: "Rs.120.00" },
    { img: bun3, name: "Frappe", price: "Rs.200.00" },
    { img: bun4, name: "Iced latte",  price: "Rs.180.00" },
    { img: bun5, name: "Cold Brew",  price: "Rs.200.00" },
    { img: bun6, name: "Cold Black",  price: "Rs.200.00" }
  ];

  return (
    <div className="bg-[#E5D6AB] flex flex-col items-center justify-center w-[1200px] h-auto rounded-lg mt-4 mx-auto p-8">
      <p className='font-bold text-black text-[25px] mb-6'>Buns</p>

      <div className="grid grid-cols-3 gap-10">
        {coffeeItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img src={item.img} alt={item.name} className="h-[100px] w-[100px] rounded-md shadow-md" />
            <div>
              <p className="font-bold text-[18px]">{item.name}</p>
              
              <p className="font-bold text-[16px] text-[#744000]">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Icecoffee;
