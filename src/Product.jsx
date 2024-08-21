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
    <div className=" mt-12 w-full border-b pb-12 pe-8 border-gray-300">
        {Object.keys(giftbox).map(category => (
          <div key={category}>
            {title.includes(category) ? (
            <div className="">
            <h2 className=" text-2xl mb-3 font-serif ms-7 md:ms-14 inline-block">{title}</h2>
            <Link to={`/collections/${category}`} 
             className="text-purple-700 border-purple-700 border text-base font-serif 
              float-right me-7 inline-block rounded-lg px-2 py-1">
                Show All 
            </Link>
            </div>
            ):(<div></div>)}
          </div>
        ))}
        
        <div>
          <div className="block mx-auto">
            {Object.keys(giftbox).map(category => (
              <div key={category} className="md:flex md:flex-row">
              {title.includes(category) ? (
                giftbox[category].map(gift => (
                <ProductCard
                    key={gift.id}
                    productId={gift.id}
                    productImage={`https://davisolehi.pythonanywhere.com${gift.image}`}
                    productName={gift.name}
                    price={gift.price}
                />
              ))) : (<span className="hidden"></span>)}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Product;