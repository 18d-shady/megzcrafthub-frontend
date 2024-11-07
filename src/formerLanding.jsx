import React, { useState, useEffect } from 'react';


function Landing(){
  //const imageUrl = require('./landing.jpg');
  //const imageUrl2 = require('./landing2.jpg');
  const [backgroundImage, setBackgroundImage] = useState(0);
  const images = [
    require('./landing.png'),
    require('./landing2.png'),
    require('./landing6.jpg'),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage((backgroundImage + 1) % 3);
    }, 4000); // every 3 seconds

    return () => clearInterval(intervalId);
  }, [backgroundImage]);

  return(
    <div className="md:h-96 w-full md:flex md:flex-row mb-7 md:mb-48 p-5">

      <div className={`h-64 md:h-96 mt-24 me-10 lg:me-10 w-full md:w-1/2 md:basis-1/2 relative animate
      bg-no-repeat bg-contain bg-center order-last md:mt-18 lg:my-28`}
      style={{ backgroundImage: `url(${images[backgroundImage]})`,}} >
      </div>

      <div className=" ms-5 md:ms-10 md:my-32 lg:ms-32 lg:my-40 w-full md:w-1/2 font-mono md:basis-1/2 
      text-left">
        <p className="text-slate-500 text-lg my-1 font-tropea
        transition duration-200 ease-in-out animate-slid">We specialize in making premium</p>
        <h3 className="text-slate-900 text-5xl font-bold font-league animate">Customized and Branded Gift Boxes</h3>
        <p className="text-slate-900 text-sm w-3/4 my-3 font-tropea animate-slid">
          Reasons why I love you card, Paper Bags, Shredded Papers
        </p>
        <a href="/" 
          className=" bg-purple-900 py-2 px-3 text-white text-xl block w-32 mt-6 text-center">
          Shop Now
        </a>
      </div>
    
    </div>
    
  )
}
export default Landing;

import React from 'react';

function Landing2(){
  const imageUrl = require('./underland2.jpg');
  return(
    <div className="w-full lg:h-96 bg-cover bg-purple-500 font-tropea"
     style={{ backgroundImage: `url(${imageUrl})`, }} >
     <div className="w-full h-full backdrop-blur-lg bg-white/30  p-5">
      <h1 className="text-center text-white md:text-purple-800 text-3xl mt-5 mb-10">Our Products</h1>

      <div className="inline-block mx-24 md:mx-8 lg:mx-16 xl:mx-24 ">
        <div className=" rounded-full w-32 h-32 md:w-20 md:h-20 xl:w-32 xl:h-32 bg-white p-8 md:p-2 xl:p-8 block mx-auto">
          <svg className="h-16 w-16 text-purple-800 text-center"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="20 12 20 22 4 22 4 12" />  <rect x="2" y="7" width="20" height="5" />  <line x1="12" y1="22" x2="12" y2="7" />  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        </div>
        <h3 className="text-center text-white text-2xl md:text-xl xl:text-2xl my-5">Customized Giftboxes</h3>
      </div>

      <div className="inline-block mx-24 md:mx-8 lg:mx-16 xl:mx-24">
        <div className=" rounded-full w-32 h-32  md:w-20 md:h-20 xl:w-32 xl:h-32 bg-white p-8 md:p-2 xl:p-8 block mx-auto">
          <svg className="h-16 w-166 text-purple-800 text-center"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />  <line x1="3" y1="6" x2="21" y2="6" />  <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <h3 className="text-center text-white text-2xl md:text-xl xl:text-2xl my-5">Durable Paper Bags</h3>
      </div>

      <div className="inline-block mx-24 md:mx-8 lg:mx-16 xl:mx-24">
        <div className=" rounded-full w-32 h-32 md:w-20 md:h-20 xl:w-32 xl:h-32 bg-white p-8 md:p-2 xl:p-8 block mx-auto">
          <svg className="h-16 w-16 text-purple-800 text-center"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />  <line x1="8" y1="2" x2="8" y2="18" />  <line x1="16" y1="6" x2="16" y2="22" />
          </svg>
        </div>
        <h3 className="text-center text-white text-2xl md:text-xl xl:text-2xl my-5">Lovely Gift Cards</h3>
      </div>

      
     </div>
    </div>
  )
}
export default Landing2;