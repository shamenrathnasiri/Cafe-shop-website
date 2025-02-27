import React from 'react';
import icecoffee1 from '../menu page images/Ice coffe1.jpg';
import icecoffee2 from '../menu page images/Ice coffe2.jpg';
import icecoffee3 from '../menu page images/Ice coffe3.jpg';
import icecoffee4 from '../menu page images/Ice coffe4.jpg';
import icecoffee5 from '../menu page images/Ice coffe5.jpg';
import icecoffee6 from '../menu page images/Ice coffe6.jpg';

function Icecoffee() {
  
  const coffeeItems = [
    { img: icecoffee1, name: "Vietnamese iced", desc: "for be healthy.", price: "Rs.800.00" },
    { img: icecoffee2, name: "Nitro Cold", desc: "to be fresh with extra ice.", price: "Rs.700.00" },
    { img: icecoffee3, name: "Frappe", desc: "to be a conventional frappe", price: "Rs.850.00" },
    { img: icecoffee4, name: "Iced latte", desc: "to be honey.", price: "Rs.900.00" },
    { img: icecoffee5, name: "Cold Brew", desc: "for be cool Coffee with more ice.", price: "Rs.750.00" },
    { img: icecoffee6, name: "Cold Black", desc: "for be super with extra coffee", price: "Rs.950.00" }
  ];

  return (
    <div className="bg-[#E5D6AB] flex flex-col items-center justify-center w-[1200px] h-auto rounded-lg mt-4 mx-auto p-8">
      <p className='font-bold text-black text-[25px] mb-6'>Ice Coffee</p>

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
