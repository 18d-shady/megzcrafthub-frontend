import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Foot() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('https://davisolehi.pythonanywhere.com/e/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-slate-800 w-full text-white pb-5">
      <div className="block flex flex-row mx-3 lg:mx-auto border-b border-slate-400 md:justify-between
      pt-10 lg:w-2/3 justify-start">
        <div className="basis-2/3 md:basis-5/6 md:flex md:flex-row justify-between md:ms-6">
          <div className="order-first basis-1/3 mb-3">
            <h3 className="text-xl md:text-2xl font-tropea">Megscraftshub</h3>
            <p className="text-slate-500 font-league hidden md:flex md:mb-5 xl:mb-14">
              Your best hub for deals on all kinds of giftboxes, paper bags, shredded papers and cards.
              We also offer intuitive tutorials for on all our products.
              A chance for you to design exclusive designs like us.
            </p>
          </div>

          <div className="font-league basis-1/6  text-slate-400">
            <h3 className="text-xl text-white">Products</h3>
          
            {categories.slice(0, 4).map(category => ( 
              <Link to={`/collections/${category.name}`} key={category.id}
                className="block"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="font-league basis-2/6  mb-5 text-slate-400">
            <h3 className="text-xl mt-2 text-white">Services</h3>
            <p className="block">Tutorials</p>

            <h3 className="text-xl mt-2 text-white">Company</h3>
            <p className="block">Privacy Policy</p>
            <p className="block">Terms and Condtions</p>
          </div>
        </div>
        <div className="font-league basis:1/3 md:basis-1/6 mt-12 md:mt-1">
            <h3 className="Block">Contact Us:</h3>
            <a className=" inline-block mx-1" href="https://wa.me/c/2349099385597" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                stroke-width="2" 
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

            <a className=" inline-block mx-2" href="https://www.instagram.com/megz_crafthub?igsh=MXBhdGNnYndqaGpkag==" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>

            <a className=" inline-block mx-1" href="https://www.facebook.com/profile.php?id=100090492018672&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
            </a>

            <h3 className="block">Email: <br/><span className="text-slate-300 text-sm">megzcrafts47@gmail.com</span></h3>
            <h3 className="block">Phone Number: <br/><span className="text-slate-300 text-sm">+2349099385597</span></h3>
            <h3 className="block">Address: <br/>
              <span className="text-slate-300 text-sm">
                Brick's house,
                Independence layout, Enugu. 
              </span>
            </h3>
            
        </div>
      </div>

      <div className="block mt-5 text-xs text-center mx-3">
      <p>2024 Megzcrafthub. All rights reserved | Designed by Moonlight Tech, Blue Whale services</p>
      </div>
    </div>
  );
}
export default Foot;