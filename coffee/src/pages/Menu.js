import React, { useRef } from 'react';
import icecoffee from '../menu page images/Icecoffee.jpg';
import hotcoffee from '../menu page images/Hotcoffee.jpg';
import cappuccino from '../menu page images/Cappuccino.jpg';
import buns from '../menu page images/Buns.jpg';
import Icecoffee from '../components/Icecoffee';
import Cappuccino from '../components/cappuccino';
import Hotcoffee from '../components/hotcoffee';
import Buns from '../components/buns';

function Menu() {
  // references for each section
  const icecoffeeRef = useRef(null);
  const cappuccinoRef = useRef(null);
  const hotcoffeeRef = useRef(null);
  const bunsRef = useRef(null);

  // Function to scroll to the specific component
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <><div>
      <div className='text-center text-[#744000] font-bold text-[45px]'>
        <h1>Cozy Bean Cafe : Menu</h1>
      </div>

      <div className="flex items-center justify-center h-screen -mt-56">
        <div className="bg-[#9A6900] flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 w-full h-[240px]">
          <img
            src={icecoffee}
            alt="Ice Coffee"
            className="w-[120px] h-[180px] rounded-full transition-transform duration-300 hover:scale-110 shadow-md cursor-pointer sm:w-[130px] sm:h-[180px] md:w-[150px] md:h-[200px]"
            onClick={() => scrollToSection(icecoffeeRef)} />
          <img
            src={cappuccino}
            alt="Cappuccino"
            className="w-[120px] h-[180px] rounded-full transition-transform duration-300 hover:scale-110 shadow-md cursor-pointer sm:w-[130px] sm:h-[180px] md:w-[150px] md:h-[200px]"
            onClick={() => scrollToSection(cappuccinoRef)} />
          <img
            src={hotcoffee}
            alt="Hot Coffee"
            className="w-[120px] h-[180px] rounded-full transition-transform duration-300 hover:scale-110 shadow-md cursor-pointer sm:w-[130px] sm:h-[180px] md:w-[150px] md:h-[200px]"
            onClick={() => scrollToSection(hotcoffeeRef)} />
          <img
            src={buns}
            alt="Buns"
            className="w-[120px] h-[180px] rounded-full transition-transform duration-300 hover:scale-110 shadow-md cursor-pointer sm:w-[130px] sm:h-[180px] md:w-[150px] md:h-[200px]"
            onClick={() => scrollToSection(bunsRef)} />
        </div>
      </div>

      <div className="w-full h-[5px] bg-[#744000] -mt-56"></div>

      <div ref={icecoffeeRef}>
        <Icecoffee />
      </div>

      <div className="w-full h-[5px] bg-[#744000] mt-4"></div>

      <div ref={cappuccinoRef}>
        <Cappuccino />
      </div>

      <div className="w-full h-[5px] bg-[#744000] mt-4"></div>

      <div ref={hotcoffeeRef}>
        <Hotcoffee />
      </div>

      <div className="w-full h-[5px] bg-[#744000] mt-4"></div>

      <div ref={bunsRef}>
        <Buns />
      </div>

    </div><div className='mt-8'> </div></>
  );
}

export default Menu;
