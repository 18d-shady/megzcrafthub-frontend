import ProductCard from './ProductCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Product({title}) {
  const [giftbox, setGiftbox] = useState([]);


  useEffect(() => {
    axios.get('https://davisolehi.pythonanywhere.com/e/api/giftbox/?limit=5')
      .then(response => {
        setGiftbox(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="py-10 w-full border-b px-6 md:px-8 lg:px-24 border-gray-300">
        {Object.keys(giftbox).map(category => (
          <div key={category}>
            {title.includes(category) ? (
            <div className="">
            <h2 className=" text-2xl mb-7 font-serif inline-block">{title}</h2>
            <Link to={`/collections/${category}`} 
             className="text-purple-700 border-purple-700 border text-base font-serif 
              float-right inline-block px-2 py-1">
                Show All 
            </Link>
            </div>
            ):(<div></div>)}
          </div>
        ))}
        
        
        <div className="block mx-auto">
          <div className="grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-5 md:gap-8 
              grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {Object.keys(giftbox).map(category => (
              title.includes(category) ? (
                giftbox[category].slice(0, 5).map(gift => ( // Use slice to get the first 5 items
                  <ProductCard
                    key={gift.id}
                    productId={gift.id}
                    productImage={`https://davisolehi.pythonanywhere.com${gift.image}`}
                    productName={gift.name}
                    price={gift.price}
                  />
                ))
              ) : null
            ))}
          </div>
        </div>
    </div>
  );
}

export default Product;