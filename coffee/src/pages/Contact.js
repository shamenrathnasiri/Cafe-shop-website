import React from 'react';
import bgimage from '../contact page images/contact bg.jpg';

function Contact() {
  return (
    <div className='relative w-full min-h-screen'>
      <img 
        src={bgimage} 
        alt='bgimage' 
        className='absolute top-0 left-0 object-cover w-full h-full brightness-75'
      />
      
      <div className='relative flex flex-col px-6 py-10 text-left md:px-16 md:py-32'>
        <h1 className='font-bold text-white text-3xl md:text-[55px] leading-tight'>
          Cozy Bean Cafe - Get in <br className='hidden md:block'/> Touch with Us!
        </h1>
        <p className='font-medium text-white text-base md:text-[18px] mt-2'>
          At Cozy Bean Cafe, we love connecting with our customers! Whether you <br className='hidden md:block'/>
          have a question, feedback, or just want to say hello, we’re here to help. Reach <br className='hidden md:block'/>
          out to us through our contact form, social media, or visit us at our cozy café.
        </p>
        
        <p className='font-bold text-lg md:text-[30px] text-center bg-[#FFD69D] w-full md:w-[600px] rounded-md shadow-md mt-4 py-2 px-4'>
          Tel : 027 569 89 ## / 021 819 63 ##
        </p>
        <p className='font-bold text-lg md:text-[30px] text-center bg-[#FFD69D] w-full md:w-[600px] rounded-md shadow-md mt-4 py-2 px-4'>
          email : cozybeancafe.pl@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
