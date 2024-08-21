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