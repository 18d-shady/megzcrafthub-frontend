import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import Heading from './Heading';
import Foot from './Foot';
import ProductCard from './ProductCard';


function CollectionBox(){

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
  
  return(
    <div className="">
      <Heading />
        {Object.keys(giftbox).map(category => (
            <div key={category}>
                {category === collectionName ? (
                <h2 className=" text-xl font-serif mt-24 mb-5 mx-10">{category}</h2>
                ):(<div></div>)}
            </div>
        ))}

        {Object.keys(giftbox).map(category => (
            <div key={category} className="container mb-10 md:flex md:flex-row pe-5">
            {category === collectionName ? (
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
      <Foot />
    </div>
  )
}
export default CollectionBox;