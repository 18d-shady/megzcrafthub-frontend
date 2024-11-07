import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Heading(){
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const imageUrl = require('./logo.png');
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    axios.get('https://davisolehi.pythonanywhere.com/e/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://davisolehi.pythonanywhere.com/e/api/view-cart/')
      .then(response => {
        setCartCount(response.data.length);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (searchValue) => {
    axios.post('https://davisolehi.pythonanywhere.com/e/api/giftbox/', {
      search_query: searchValue,
    })
    .then(response => {
      setSearchItems(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return(
    <div className="fixed top-0 w-full left-0 p-4 flex flex-row justify-between bg-white z-50">
      <div className="order-first">
        <div className="w-10 h-10 rounded-full bg-white inline-block mx-3 bg-contain align-middle"
          style={{ backgroundImage: `url(${imageUrl})`, }} >
        </div>
        <h3 className="font-tropea text-slate-500 text-xl hidden md:inline-block align-middle">
          Megzcrafthub
        </h3>
      </div>

      <ul className="hidden lg:flex justify-center lg:grow font-league text-lg text-slate-700">
        <li className="inline-block mx-3 align-middle"><Link to="/">Home</Link></li>
        <li className="inline-block mx-3 align-middle relative">
        <button
        onClick={() => setToggle(!toggle)} >
          Collections
          <svg className="-mr-1 h-5 w-5 inline-block"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
           <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points={!toggle ? '6 9 12 15 18 9' : '6 15 12 9 18 15'}/> 
          </svg>
      
        </button>
          <div 
            transition
            className={`${
	            !toggle ? "hidden" : "block"
	          } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in `}
          >
            <div className="py-1" >
                {categories.map(category => (
                  <Link to={`/collections/${category.name}`} key={category.id}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    {category.name}
                  </Link>
                ))}
            </div>
          </div>
        </li>
        <li className="inline-block mx-3 align-middle"><Link to="/orders">Orders</Link></li>
        <li className="inline-block mx-3 align-middle">Tutorials</li>
        <li className="inline-block mx-3 align-middle"><Link to="/#about">About</Link></li>
      </ul>

      <div className="order-last text-slate-700 h-full align-middle">
        <div className=" inline-block mx-3 align-middle">
          <svg className="h-5 w-5" 
            onClick={() => setToggleSearch(!toggleSearch)}  
            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          <div 
            transition
            className={`${
              !toggleSearch ? "hidden" : "block"
            } absolute right-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in `}
          >
            <div className="py-1" >
            <input
              className="px-1"
              type="text"
              placeholder="Search Products"
              onChange={(e) => handleSearch(e.target.value)}
            />
                {searchItems.map(searchItem => (
                  <Link to={`/gift-boxes/${searchItem.id}`} key={searchItem.id}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    {searchItem.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <Link to="/cart" className="inline-block mx-3">
        <div className="h-10 w-10">
          <svg className="h-5 w-5 inline-block align-middle"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
          <sup className="rounded-full bg-green-700 h-4 w-4 inline-block text-white text-center text-xs text-align-middle align-middle">{cartCount}</sup>
        </div>
        </Link>

        <button
          className="lg:hidden inline-block justify-center w-8 h-8 bg-white align-middle"
          onClick={handleToggle}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      
      {/*/sSmall screen*/}
      <div className={`lg:hidden transition duration-300 ease-in-out w-1/2 md:w-1/3
       fixed inset-y-0 top-16 right-0 bg-white border-l border-slate-100 shadow-2xl
        ${isOpen ? 'h-screen' : 'h-0 overflow-hidden'}`}>
        <ul className="mx-5 font-league text-xl text-slate-700">
          <li className="block mx-3 align-middle my-3"><Link to="/">Home</Link></li>
          <li className="block mx-3 align-middle relative w-full my-3">
          <button
          onClick={() => setToggle(!toggle)} >
            Collections
            <svg className="-mr-1 h-5 w-5 inline-block"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
              <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points={!toggle ? '6 9 12 15 18 9' : '6 15 12 9 18 15'}/> 
            </svg>
          </button>
            <div 
              transition
              className={`${
                !toggle ? "hidden" : "block"
              } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in `}
            >
              <div className="py-1" >
                  {categories.map(category => (
                    <Link to={`/collections/${category.name}`} key={category.id}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      {category.name}
                    </Link>
                  ))}
              </div>
            </div>
          </li>
          <li className="block mx-3 my-3 align-middle"><Link to="/orders">Orders</Link></li>
          <li className="block mx-3 my-3 align-middle">Tutorials</li>
          <li className="block mx-3 my-3 align-middle"><Link to="/#about">About</Link></li>
        </ul>
      </div>
      
    </div>
  )
}
export default Heading;

/*
<svg className="h-5 w-5 hidden md:inline-block mx-3 align-middle"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
</svg>

<svg className="-mr-1 h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
</svg>
*/