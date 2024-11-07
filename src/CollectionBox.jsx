import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Heading from './Heading';
import Foot from './Foot';
import ProductCard from './ProductCard';


function CollectionBox(){
    const [categories, setCategories] = useState([]);
    const [giftbox, setGiftbox] = useState([]);
    const { collectionName } = useParams();

  useEffect(() => {
    axios.get('https://davisolehi.pythonanywhere.com/e/api/giftbox/?limit=5')
      .then(response => {
        setGiftbox(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://davisolehi.pythonanywhere.com/e/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return(
    <div className="">
      <Heading />
      <div className="flex flex-row justify-center p-1 lg:px-28 bg-white mb-10">
      <div className="hidden lg:block font-league text-slate-700 w-1/5 bg-white p-2 mt-24 shadow-2xl">
        <p className="px-4 mb-2">Categories</p>
        {categories.map(category => (
          <Link to={`/collections/${category.name}`} key={category.id}
            className="block px-4 py-2 text-sm text-gray-700"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="w-full lg:w-4/5">
        {Object.keys(giftbox).map((category) => (
            <div key={category}>
                {category === collectionName ? (
                <h2 className="text-xl font-serif mt-24 mb-5 md:mx-10 mx-5 text-center bg-purple-100 py-1">{category}</h2>
                ):(<div></div>)}
            </div>
        ))}

        <div className="mb-10 grid grid-rows-3 md:grid-rows-2 lg:grid-rows-2 gap-5 md:gap-8 
          grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 md:mx-10 mx-5">
          {Object.keys(giftbox).map(category => (
              category === collectionName ? (
              giftbox[category].map(gift => (
              <ProductCard
                  key={gift.id}
                  productId={gift.id}
                  productImage={`https://davisolehi.pythonanywhere.com${gift.image}`}
                  productName={gift.name}
                  price={gift.price}
              />
              ))) : null

          ))}
        </div>
      </div>
      </div>
      <Foot />
    </div>
  )
}
export default CollectionBox;