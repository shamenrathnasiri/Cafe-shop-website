import React from 'react';
import bgimg from '../aboutus page images/about main .png';
import person1 from '../aboutus page images/person1.jpg'
import person2 from '../aboutus page images/person2.jpg'
import person3 from '../aboutus page images/person3.jpg'
import person4 from '../aboutus page images/person4.jpg'
import person5 from '../aboutus page images/person5.jpg'
import person6 from '../aboutus page images/person6.jpg'
import icon from '../home page images/icon coffee.png';


function AboutUs() {
  return (
    <div className='h-auto w-screen bg-gradient-to-b from-[#FFF3E6] to-[#FFCE92] py-10 relative'>

      
      <h1 className='text-[30px] bg-[#FFCE92] w-[300px] h-[50px] rounded-full flex items-center justify-center ml-28 mt-8'>
        About Us
      </h1>

    
      <p className='text-[20px] font-bold mt-4 ml-28'>
        Welcome to Cozy Bean Cafe, <br /> your home away from home since 
      </p>
      <p className='font-bold text-[40px] ml-48'>1999!</p>

      <p className='text-[15px] ml-28'>
        For over two decades, we've been serving handcrafted coffee, <br />
        freshly baked pastries, and heartwarming moments to our <br />
        beloved community. What started as a small neighborhood café <br />
        has grown into a cherished gathering spot for coffee lovers, <br />
        book readers, and friends looking for a cozy escape.
      </p>

      
      <img src={bgimg} alt="Cozy Bean Cafe" className='absolute right-10 top-24 w-[650px] h-auto -ml-32 -mt-16   '  />

     
      <div className='bg-[#744000] w-screen h-[300px] mt-4 flex items-center'>
        <div className='px-20'>
          <p className='text-[20px] text-white'>
            At Cozy Bean Cafe, we believe in more than just great coffee—we believe <br />
            in creating an experience. Our beans are carefully sourced from the finest <br />
            farms, roasted to perfection, and brewed with love. Whether you're here for <br />
            your morning espresso, an afternoon pick-me-up, or a quiet evening with a <br />
            book, we’re here to make every sip special.
          </p>
          <p className='font-bold text-white text-[22px] mt-8'>
            Join us and be part of our journey. Here's to good coffee, great conversations, and the warmest memories!
          </p>
        </div>
      </div>.
      
     <div className="flex justify-center space-x-4 md:justify-center">
        <img src={icon} alt="Icon" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
          <p className="text-black font-bold text-[30px] md:text-[40px]">Our Team</p>
     </div>
      
      
      <div className='relative flex items-center mt-6 ml-48 space-x-48'>
  <div className='text-center'>
    <img src={person6} alt='person6' className='w-[260px] h-[200px] rounded-md transition-transform duration-300 hover:scale-110 shadow-md' />
    <p className='mt-2 text-lg font-semibold'>W.D.D.Silva</p>
    <p className='mt-2 text-lg font-semibold'>(Manager)</p>
  </div>
  <div className='text-center'>
    <img src={person1} alt='person' className='w-[260px] h-[200px] rounded-md transition-transform duration-300 hover:scale-110 shadow-md' />
    <p className='mt-2 text-lg font-semibold'>N.S.R.Josap</p>
    <p className='mt-2 text-lg font-semibold'>(Assistant Manager)</p>
  </div>
  <div className='text-center'>
    <img src={person4} alt='person4' className='w-[260px] h-[200px] rounded-md transition-transform duration-300 hover:scale-110 shadow-md ' />
    <p className='mt-2 text-lg font-semibold'>P.M.R.Ruchi</p>
    <p className='mt-2 text-lg font-semibold'>(Hed Barista)</p>
  </div>
</div>
<div className='relative flex items-center mt-6 ml-48 space-x-48'>
<div className='text-center'>
<img src={person3} alt='person3' className='w-[260px] h-[200px] rounded-md transition-transform duration-300 hover:scale-110 shadow-md' />
    <p className='mt-2 text-lg font-semibold'>N.L.K.Neha</p>
    <p className='mt-2 text-lg font-semibold'>(Chief Chef)</p>
  </div>
  <div className='text-center'>
    <img src={person2} alt='person2' className='w-[260px] h-[200px] rounded-md transition-transform duration-300 hover:scale-110 shadow-md ' />
    <p className='mt-2 text-lg font-semibold'>M.L.P.Radeesh</p>
    <p className='mt-2 text-lg font-semibold'>(Junior Chef)</p>
  </div>
  <div className='text-center'>
    <img src={person5} alt='person5' className='w-[260px] h-[200px] rounded-md transition-transform duration-300 hover:scale-110 shadow-md ' />
    <p className='mt-2 text-lg font-semibold'>R.C.S.Kalum</p>
    <p className='mt-2 text-lg font-semibold'>(Marketing Specialist)</p>
  </div>
  
</div>


    </div>
  );
}

export default AboutUs;
