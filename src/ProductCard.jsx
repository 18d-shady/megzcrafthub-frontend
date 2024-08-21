import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({
    productId,
    productImage,
    productName,
    price,

}){
  //const imageUrl = require(`${productImage}`)
  return(
    <div className="w-36 md:w-auto h-64 md:72 lg:h-84 ms-8 md:ms-5 lg:ms-8 mb-7 
    md:basis-1/3 lg:basis-1/5 xl:basis-1/5 grow shrink inline-block font-serif">
      <Link to={`/gift-boxes/${productId}`}>
        <div className="mx-auto bg-gray-100 bg-center w-36 md:w-full h-56 md:h-60 lg:h-64 
        bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${productImage})`, }}
        >
        </div>
        <h4 className="mt-3 ms-3 h-8 text-slate-700 text-sm text-overflow overflow-hidden">
            {productName}
        </h4>
        <p className="text-purple-700 ms-3">
            N{price}
        </p>
      </Link>
    </div>
  )
}
export default ProductCard;