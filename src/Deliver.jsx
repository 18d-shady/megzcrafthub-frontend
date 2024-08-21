import React from 'react';


function Deliver(){
  const imageUrl = require('./deliver.jpg');
  return(
    <div className=" h-screen flex flex-row w-full">
      <div className="basis-1/3 h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})`, }}>
        
      </div>

      <div className="basis-2/3 h-full bg-slate-100 flex justify-center font-serif">
        <div className="w-2/3 h-96 my-48">
          <div className="mx-auto rounded-full w-28 h-28 bg-purple-500 p-4 animate-bounce">
          <svg className="h-20 w-20 text-white text-center"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="1" y="3" width="15" height="13" />  
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />  
            <circle cx="5.5" cy="18.5" r="2.5" />  
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          </div>
          <h3 className="text-center text-3xl my-4 font-tropea"> Fast Delivery around Nigeria</h3>
          <p className="text-slate-800 text-center font-league">We make sure it gets to you within 48 hours..</p>
        </div>
      </div>
    </div>
  )
}
export default Deliver;