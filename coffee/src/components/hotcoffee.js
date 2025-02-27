import React from 'react';
import hc1 from '../menu page images/hc1.jpg';
import hc2 from '../menu page images/hc2.jpg';
import hc3 from '../menu page images/hc3.jpg';
import hc4 from '../menu page images/hc4.jpg';
import hc5 from '../menu page images/hc5.jpg';
import hc6 from '../menu page images/hc6.jpg';

function Icecoffee() {
  
  const coffeeItems = [
    { img: hc1, name: "Sunny", desc: "coffee with suger.", price: "Rs.500.00" },
    { img: hc2, name: "Creamy", desc: "for creamy.", price: "Rs.550.00" },
    { img: hc3, name: "Dark", desc: "suger with more coffee.", price: "Rs.600.00" },
    { img: hc4, name: "Choco", desc: "coffee with chocolate.", price: "Rs.650.00" },
    { img: hc5, name: "Brown", desc: "for fresh life..", price: "Rs.550.00" },
    { img: hc6, name: "Health", desc: "with healthy cinnamon.", price: "Rs.650.00" }
  ];

  return (
    <div className="bg-[#E5D6AB] flex flex-col items-center justify-center w-[1200px] h-auto rounded-lg mt-4 mx-auto p-8">
      <p className='font-bold text-black text-[25px] mb-6'>Hot Coffee</p>

      <div className="grid grid-cols-3 gap-10">
        {coffeeItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img src={item.img} alt={item.name} className="h-[100px] w-[100px] rounded-md shadow-md" />
            <div>
              <p className="font-bold text-[18px]">{item.name}</p>
              <p className="text-[14px] text-[#000]">{item.desc}</p>
              <p className="font-bold text-[16px] text-[#744000]">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Icecoffee;
