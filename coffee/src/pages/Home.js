import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Bgimage1 from '../home page images/back1.jpg';
import Logo1 from '../home page images/logo.png';
import coffeeb from '../home page images/coffee beans.jpg';
import icon from '../home page images/icon coffee.png';
import Icecoffee from '../home page images/Icecoffee.jpg';
import Hotcoffee from '../home page images/Hotcoffee.jpg';
import Buns from '../home page images/Buns.jpg';
import Cappuccino from '../home page images/Cappuccino.jpg';
import swiper1 from '../home page images/swiper1.jpg';
import swiper2 from '../home page images/swiper2.jpg';
import swiper3 from '../home page images/swiper3.jpg';
import swiper4 from '../home page images/swiper4.jpg';

function Home() {
  return (
    <div>
      {/* Background Image Section */}
      <div className="relative flex flex-col">
        <img className="w-full h-[500px] md:h-[700px] object-cover" src={Bgimage1} alt="Background" />

        {/* Logo and Heading Section */}
        <div className="absolute flex flex-col items-center px-4 mt-10 text-center md:items-start md:text-left md:mt-16 md:px-28">
          <img className="h-[150px] w-[200px] md:h-[300px] md:w-[350px]" src={Logo1} alt="Logo" />
          <h2 className="text-[30px] md:text-[60px] font-bold text-white -mt-2 md:-mt-4">Cozy Bean Cafe</h2>
          <p className="text-white text-[18px] md:text-[35px] -mt-1 md:-mt-2">COFFEE FOR LIFE</p>
          <button className="bg-[#9A6900] w-[100px] h-[40px] md:h-[50px] mt-2 rounded-lg text-white shadow-lg">About Us</button>
        </div>
      </div>

      {/* Coffee Beans Image and Text Section */}
      <div className="flex flex-col items-center justify-center px-4 mt-8 md:flex-row md:px-28">
        <img src={coffeeb} alt="Coffee Beans" className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-xl md:ml-64" />
        <div className="flex flex-col mt-4 text-center text-black md:ml-12 md:text-left">
          <div className="flex items-center justify-center space-x-4 md:justify-start">
            <img src={icon} alt="Icon" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
            <p className="text-black font-bold text-[30px] md:text-[40px]">What is Coffee?</p>
          </div>
          <p className="text-xs font-bold md:text-lg">
            Coffee is one of the world's most beloved beverages, enjoyed by millions <br className="hidden md:inline"/> 
            every day for its rich aroma, deep flavor, and energizing effects.<br className="hidden md:inline"/>
            It is made from roasted coffee beans, the seeds of the Coffee plant.<br className="hidden md:inline"/><br/>
            Coffee is more than a morning ritual—it's a culture, a craft, and a way to connect.<br className="hidden md:inline"/>
            Whether you enjoy it bold and black, creamy and sweet, or infused with unique flavors,<br className="hidden md:inline"/>
            every cup tells a story of tradition, passion, and craftsmanship.
          </p>
        </div>
      </div>

      {/* Our Items Section */}
      <div className="flex flex-col items-center justify-center bg-[#FBE5B2] w-full h-auto py-12 mt-8">
        <div className="flex items-center space-x-4">
          <img src={icon} alt="Icon" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
          <p className="text-black font-bold text-[30px] md:text-[40px]">OUR ITEMS...</p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-4 md:gap-12">
          <img src={Icecoffee} alt="Ice Coffee" className="w-[110px] h-[120px] md:w-[135px] md:h-[150px] rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110" />
          <img src={Hotcoffee} alt="Hot Coffee" className="w-[110px] h-[120px] md:w-[135px] md:h-[150px] rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110" />
          <img src={Cappuccino} alt="Cappuccino" className="w-[110px] h-[120px] md:w-[135px] md:h-[150px] rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110" />
          <img src={Buns} alt="Buns" className="w-[110px] h-[120px] md:w-[135px] md:h-[150px] rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110" />
        </div>
      </div>

      {/* Swiper Carousel Section */}
      <div className="px-4 mt-8">
        <Swiper
          spaceBetween={10} 
          slidesPerView={1} 
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
          loop={true} 
          modules={[Autoplay]}
          className="w-full max-w-xs mx-auto rounded-lg shadow-2xl md:max-w-3xl "
        >
          <SwiperSlide>
            <img src={swiper1} alt="Swiper 1" className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper2} alt="Swiper 2" className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper3} alt="Swiper 3" className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper4} alt="Swiper 4" className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mt-8'></div>
    </div>
  );
}

export default Home;
