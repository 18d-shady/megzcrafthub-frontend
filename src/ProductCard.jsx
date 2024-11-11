import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductCard({
    productId,
    productImage,
    productName,
    price,

}){
  //const imageUrl = require(`${productImage}`)
  //const [message, setMessage] = useState({});
  const addToCart = (event) => {
    event.preventDefault();
    axios.post('https://davisolehi.pythonanywhere.com/e/api/add-to-cart/', {
      product_id: Number(productId),
      product_name: productName,
      product_price: price,
    }, {
      withCredentials: true
    })
      .then(response => {
        alert(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return(
    <div className="grow shrink inline-block font-league shadow-lg group bg-white">
      <Link to={`/gift-boxes/${productId}`}>
        <div className="w-full h-48 md:h-52 lg:h-56 overflow-hidden relative">
          <div className="mx-auto bg-center w-full h-48 md:h-52 lg:h-56 duraton-500 cursor-pointer
          bg-cover bg-no-repeat hover:scale-125 transition-all "
            style={{ backgroundImage: `url(${productImage})`, }}
          >
          </div>
          <button className="" onClick={addToCart}>
            <svg className="text-white bg-purple-700 rounded-full h-8 w-8 p-1 absolute group-hover:block hidden
              bottom-3 right-3"  
              fill="none" viewBox="0 0 24 24" stroke="currentColor" 
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </button>
        </div>

        <h4 className="ms-2 mt-2 h-7 text-slate-700 text-sm text-overflow overflow-hidden">
            {productName}
        </h4>
        <p className=" ms-2 mb-3  text-purple-700">
            N{price}
        </p>
      </Link>
    </div>
  )
}
export default ProductCard;