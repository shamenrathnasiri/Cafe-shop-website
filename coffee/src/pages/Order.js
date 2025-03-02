import React from 'react';
import Bgimage from '../order page images/coffee order bg.jpg';

function Order() {
  return (
    <div className='relative flex items-center justify-center w-full h-screen'>
      {/* Background Image */}
      <img
        src={Bgimage}
        alt='bgimage'
        className='absolute w-full h-full object-cover brightness-[40%]'
      />

      {/* Text Content */}
      <div className='relative max-w-3xl px-8 ml-auto -mt-48 text-left text-white'>
        <h1 className='text-5xl font-extrabold leading-tight shadow-md'>
          Cozy Bean Cafe - Your <br />
          Perfect Brew, Just a Click <br />
          Away!
        </h1>

        <p className='mt-4 text-lg leading-relaxed shadow-md'>
          Indulge in the rich aroma and flavors of handcrafted coffee with our seamless online
          ordering experience. Whether you’re craving a bold espresso, a creamy latte, or a 
          refreshing iced coffee, our beautifully designed order page makes it easy to customize
          and order your favorite brew in seconds.
        </p>

        <h2 className='mt-6 text-2xl font-semibold shadow-md'>Order In Here.</h2>
        <p className='text-sm shadow-md'>(You can order only one at a time ...)</p>
      </div>
    </div>
  );
}

export default Order;
