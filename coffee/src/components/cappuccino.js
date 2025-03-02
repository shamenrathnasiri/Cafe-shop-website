import React from 'react';
import cap1 from '../menu page images/cap1.jpg';
import cap2 from '../menu page images/cap2.jpg';
import cap3 from '../menu page images/cap3.jpg';
import cap4 from '../menu page images/cap4.jpg';
import cap5 from '../menu page images/cap5.jpg';
import cap6 from '../menu page images/cap6.jpg';

function Icecoffee() {
  
  const coffeeItems = [
    { img: cap1, name: "Lover", desc: "for be lover.", price: "Rs.800.00" },
    { img: cap2, name: "Vegan", desc: "for creamy.", price: "Rs.700.00" },
    { img: cap3, name: "Honey", desc: " to honey person.", price: "Rs.850.00" },
    { img: cap4, name: "Heart Love", desc: "to be touch heart.", price: "Rs.900.00" },
    { img: cap5, name: "Freddo", desc: "for fresh life.", price: "Rs.750.00" },
    { img: cap6, name: "Milky fresh", desc: "for be supe with extra coffee.", price: "Rs.950.00" }
  ];

  return (
    <div className="bg-[#E5D6AB] flex flex-col items-center justify-center w-[1200px] h-auto rounded-lg mt-4 mx-auto p-8 shadow-md">
      <p className='font-bold text-black text-[25px] mb-6'>Cappuccino</p>

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
