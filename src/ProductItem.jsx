import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Heading from './Heading';
import Foot from './Foot';


function ProductItem(){
    //const imageUrl = require('./shredded2.jpg');
    const [giftbox, setGiftbox] = useState([]);
    const { productId } = useParams();
    const [gift, setGift] = useState(null);

    useEffect(() => {
      axios.get('https://davisolehi.pythonanywhere.com/e/api/giftbox/product/')
        .then(response => {
          setGiftbox(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    useEffect(() => {
    if (giftbox.length > 0) {
      const matchedGiftBox = giftbox.find(giftBoxes => Number(giftBoxes.id) === Number(productId));
      if (matchedGiftBox) {
        setGift(matchedGiftBox);
      }
    }
  }, [giftbox, productId]);

  if (!gift) {
    //console.log(giftbox);
    return <div>Loading....</div>;
  }
  

  return(
    <div className=" xl:h-screen p-3">
    <Heading />
    <div className="md:flex md:flex-row h-full w-full my-20">
      <div className="w-full md:basis-1/2 md:w-1/2  h-96 md:h-auto xl:h-full bg-contain 
      bg-center lg:bg-right bg-no-repeat"
      style={{ backgroundImage: `url(https://davisolehi.pythonanywhere.com${gift.image})`, }}>
        
      </div>

      <div className="md:basis-1/2 h-full bg-white font-serif md:me-10 mb-40">
        <div className="w-full xl:w-2/3 h-96 mx-3 my-5 md:my-0 lg:my-12 md:ms-10">
          <h3 className="text-purple-700 font-serif text-4xl my-1">{gift.name}</h3>
          <p className="bg-slate-600 text-base text-white w-20 text-center font-serif">In Stock</p>
          <h3 className="text-3xl my-4 font-serif">N{gift.price}</h3>
          <p className="text-slate-600 font-league">{gift.description}bla bal bla bla
          bla bal bla bla bla bal bla bla bla bal bla bla
          bla bal bla bla bla bal bla bla
          bla bal bla bla bla bal bla bla bla bal bla bla
          bla bal bla bla bla bal bla bla bla bal bla bla
          bla bal bla bla bla bal bla bla
          bla bal bla bla bla bal bla bla</p>
          <p className="mt-3 font-league">Colors</p>
          <div>
            <div className="h-6 w-6 inline-block bg-white border border-black me-5"></div>
            <div className="h-6 w-6 inline-block bg-blue-800 border border-black me-5"></div>
            <div className="h-6 w-6 inline-block bg-green-800 border border-black me-5"></div>
            <div className="h-6 w-6 inline-block bg-red-800 border border-black me-5"></div>
            <div className="h-6 w-6 inline-block bg-yellow-800 border border-black me-5"></div>
            <div className="h-8 w-8 inline-block hover:bg-slate-200 hover:rounded-full  
            text-2xl text-slate-600 me-5 align-text-middle text-center hover:border border-slate-600">
            ...
            </div>
          </div>

          <p className="mt-3 font-league">Quantity</p>
          <div>
            <div className="h-6 w-6 inline-block bg-black text-white text-center me-3">+</div>
            <div className="h-6 w-6 inline-block bg-black text-white text-center me-3">1</div>
            <div className="h-6 w-6 inline-block bg-black text-white text-center me-3">-</div>
          </div>

          <button className="my-5 px-8 lg:px-10 py-2 rounded-sm text-purple-700 border border-purple-700">Add to Cart</button>
          <button className="my-5 mx-5 lg:mx-10 px-7 lg:px-10 py-2 rounded-sm bg-purple-700 text-white">Buy Now</button>

        </div>
      </div>
       
    </div>
    <Foot />
    </div>
  )
}
export default ProductItem;