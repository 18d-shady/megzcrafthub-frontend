import React from 'react';


function Deliver(){
  const imageUrl = require('./deliver.jpeg');
  const imageUrl2 = require('./landing.jpeg');
  return(
    <div className="bg-gray-50 md:my-10 px-2">
      
      <div className="md:h-96 md:flex md:flex-row w-full md:mb-20">
        <div className="md:basis-1/2 lg:basis-5/12 h-96 md:h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl2})`, }}>
          
        </div>

        <div className="md:basis-1/2 lg:basis-7/12 h-96 md:h-full flex justify-center items-center font-serif order-1">
          <div className="w-2/3">
            
            <h3 className="text-center text-3xl my-4 font-tropea">High End Quality</h3>
            <p className="text-slate-800 text-center font-league">
              Our Unique and Quality Designs give prove of our durable and lovable products.
              Get this unique designs and show your loved ones how much you love them.
            </p>
          </div>
        </div>
      </div>

      <div className="md:h-96 md:flex md:flex-row w-full md:mt-20">
        <div className="md:basis-1/2 lg:basis-7/12 h-96 md:h-full flex justify-center items-center font-serif">
          <div className="w-2/3">
            <div className="mx-auto rounded-full w-20 h-20 bg-purple-500 p-4 animate-bounce">
            <svg className="h-12 w-12 text-white text-center"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="1" y="3" width="15" height="13" />  
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />  
              <circle cx="5.5" cy="18.5" r="2.5" />  
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            </div>
            <h3 className="text-center text-3xl mb-4 font-tropea"> Fast Delivery around Nigeria</h3>
            <p className="text-slate-800 text-center font-league">We make sure it gets to you within 48 hours..</p>
          </div>
        </div>
        <div className="md:basis-1/2 lg:basis-5/12 h-96 md:h-full bg-cover bg-center bg-no-repeat md:order-1"
        style={{ backgroundImage: `url(${imageUrl})`, }}>
          
        </div>
      </div>
    </div>
  )
}
export default Deliver;