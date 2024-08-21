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