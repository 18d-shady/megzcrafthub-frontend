import React from 'react';


function Shredded(){
    const imageUrl = require('./shredded2.jpg');
  return(
    <div className=" h-screen flex flex-row w-full">
      <div className="basis-1/2 h-full bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})`, }}>
        
      </div>

      <div className="basis-1/2 h-full bg-white flex justify-center font-serif">
        <div className="w-2/3 h-96 my-20">
          <h3 className="text-purple-700 font-serif text-4xl">Exclusive Offer</h3>
          <p className="bg-slate-600 text-base text-white w-20 text-center font-serif">In Stock</p>
          <h3 className="text-3xl my-4 font-serif">N2500</h3>
          <p className="text-slate-800 font-league">
          Shredded Paper available in different colors and sizes and specifications.
          Get yours now.
          </p>
          <p className="mt-3 font-league">Colors</p>
          <div>
            <div className="h-6 w-6 inline-block bg-white border border-black me-5"></div>
            <div className="h-6 w-6 inline-block bg-blue-800 border border-black me-5"></div>
            <div className="h-6 w-6 inline-block bg-green-800 border border-black me-5"></div>
            <div className="h-6 w-6 inline-block bg-red-800 border border-black me-5"></div>
            <div className="h-6 w-6 inline-block bg-yellow-800 border border-black me-5"></div>
            <div className="h-8 w-8 inline-block hover:bg-slate-200 hover:rounded-full  
            text-2xl text-slate-600 me-5 align-text-middle text-center hover:border border-slate-600">
            ...
            </div>
          </div>

          <p className="mt-3 font-league">Quantity</p>
          <div>
            <div className="h-6 w-6 inline-block bg-black text-white text-center me-3">+</div>
            <div className="h-6 w-6 inline-block bg-black text-white text-center me-3">1</div>
            <div className="h-6 w-6 inline-block bg-black text-white text-center me-3">-</div>
          </div>

          <button className="my-5 px-5 py-1 rounded-sm text-purple-700 border border-purple-700">Add to Cart</button>
          <button className="my-5 mx-5 px-5 py-1 rounded-sm bg-purple-700 text-white">Buy Now</button>

        </div>
      </div>
    </div>
  )
}
export default Shredded;