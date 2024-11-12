import React from 'react';
import { Link } from 'react-router-dom';


function Landing(){
  const imageUrl = require('./landing.jpeg');
  
  return(
    <div className="lg:min-h-screen w-full mb-7 lg:mb-8 mt-24 p-6 md:p-10 lg:ps-0">

      <div className=" text-white bg-purple-600 lg:mt-28 lg:mb-20 w-full lg:w-1/2 font-mono lg:relative
      text-center lg:text-left p-5 md:p-10 lg:p-16 lg:pe-20 xl:pe-32 z-10">
        <p className=" text-lg my-1 font-tropea
        transition duration-200 ease-in-out animate-slid">We specialize in making premium</p>
        <h3 className="text-5xl md:text-6xl font-bold font-league animate">Customized and Branded Gift Boxes</h3>
        <p className=" text-sm w-3/4 block mx-auto lg:mx-0 my-3 font-tropea animate-slid">
          Reasons why I love you card, Paper Bags, Shredded Papers
        </p>
        <Link to="/collections/Hot Sales"
          className=" bg-white text-black py-2 px-3 text-lg block mx-auto lg:mx-0 w-40
          font-bold mt-6 text-center">
          SHOP NOW
        </Link>
      </div>

      <div className={`h-96 lg:h-full w-full me-10 mb-5 lg:absolute lg:top-32 lg:right-10 
      bg-no-repeat bg-cover bg-center lg:w-1/2`}
      style={{ backgroundImage: `url(${imageUrl})`,}} >
      </div>
    
    </div>
    
  )
}
export default Landing;