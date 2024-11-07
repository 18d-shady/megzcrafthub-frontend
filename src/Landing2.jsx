import {React, useRef, useEffect} from 'react';
import useIsVisible from './useIsVisible';

function Landing2(){
  const imageUrl = require('./underland.jpeg');
  const imageUrl2 = require('./underland2.jpeg');
  const imageUrl3 = require('./underland3.jpeg');
  const imageUrl4 = require('./underland4.jpeg');
  const images = [
    { src: imageUrl, alt: 'Explore Giftboxes' },
    { src: imageUrl2, alt: 'Explore Paper Bags' },
    { src: imageUrl3, alt: 'Explore Cards' },
    { src: imageUrl4, alt: 'Explore Shredded Papers' },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const clone = slider.cloneNode(true);
    slider.parentNode.appendChild(clone);
    clone.setAttribute('aria-hidden', 'true');
  }, [sliderRef]);

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);
  return(
    <div className="px-10 lg:px-24 w-full text-base mt-16">
      <div className="w-full hidden md:grid md:grid-rows-2 lg:grid-rows-3 md:grid-cols-2 
        lg:grid-cols-4 md:gap-4 font-league">
        <div ref={ref1} className={`transition-opacity  lg:row-end-3 lg:row-span-2 
        ease-in duration-700 ${isVisible1 
        ? "opacity-100 w-full md:w-auto h-72 bg-cover bg-center font-tropea" 
        : "opacity-0"}`}
        style={{ backgroundImage: `url(${imageUrl})`, }} >
          <p className="m-5 font-bold bg-white text-black p-3">
            Explore Gift Boxes
          </p>
        
        </div>
        <div className="hidden lg:block lg:row-start-3 text-sm">
          <p>
          Explore unique giftbox designs ranging from lid boxes, flip boxes,
          magnetic flip boxes, magnetic flip boxes with handle, circle boxes,
          heart shape boxes, collapsible boxes, triangle shape boxes even to 
          money boxes. 
          </p>
        </div>
        <div className="hidden lg:block lg:row-start-1 text-sm ">
          <p>
          Explore different durable and customized paper bags designs,
          useful for packaging, gift wrapping, lunch bags, souvenirs and lots more.

          </p>
        </div>

        <div ref={ref2} className={`transition-opacity  lg:row-start-2 lg:row-span-2
        ease-in duration-700 ${isVisible2 
        ? "opacity-100 w-full md:w-auto h-72 bg-cover bg-center font-tropea" 
        : "opacity-0"}`}
        style={{ backgroundImage: `url(${imageUrl2})`, }} >
          <p className="m-5 font-bold bg-white text-black p-3">
            Explore Paper Bags
          </p>
        
        </div>
        
        <div ref={ref3} className={`transition-opacity lg:row-end-3 lg:row-span-2
        ease-in duration-700 ${isVisible3 
        ? "opacity-100 w-full md:w-auto h-72 bg-cover bg-center font-tropea " 
        : "opacity-0"}`}
        style={{ backgroundImage: `url(${imageUrl3})`, }} >
          <p className="m-5 font-bold bg-white text-black p-3">
            Explore Cards
          </p>
        </div>

        <div className="hidden lg:block lg:row-start-3 text-sm">
          <p>
          A lovely card for your lover, or for your friends on their weddings, graduations,
          or even on their birthdays. Explore beautiful cards with heartwarming messages for those
          whom you love
          </p>
        </div>
        <div className="hidden lg:block lg:row-start-1 text-sm ">
          <p>
            Shredded Papers available also. Additionally, we offer tutorials on creating
            exceptional designs, feel free to head to the tutorial section above.
          </p>
        </div>

        <div ref={ref4} className={`transition-opacity lg:row-start-2 lg:row-span-2
        ease-in duration-700 ${isVisible4 
        ? "opacity-100 w-full md:w-auto h-72 bg-cover bg-center font-tropea" 
        : "opacity-0"}`}
        style={{ backgroundImage: `url(${imageUrl4})`, }} >
          <p className="m-5 font-bold bg-white text-black p-3">
            Explore Shredded Paper
          </p>
        </div>
      </div>
      
      {/* for small screens*/}
      <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden mt-0">
        <ul ref={sliderRef} className="flex items-center justify-center animate-infinite-scroll">
          {images.map((image, index) => (
            <li key={index}>
              <div className="w-96 h-96 bg-cover bg-center font-tropea mx-4" 
                style={{ backgroundImage: `url(${image.src})`, }} >
                <p ref={ref5} className="m-5 font-bold bg-white text-black p-3">
                  {image.alt}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div key={isVisible5} className="hidden"></div>
      </div>
      
    </div>
  )
}
export default Landing2;
