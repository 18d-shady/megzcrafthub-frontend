import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Shredded(){
  const [giftbox, setGiftbox] = useState([]);
  const title = "Shredded Papers";


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
    <div className="font-league m-5 md:mx-24">
        <p className="text-slate-700 inline-block text-xl">
        Also Shredded Paper available at cheap prices
        </p>
        {Object.keys(giftbox).map(category => (
          title.includes(category) ? (
            giftbox[category].length > 0 && (
              <Link to={`/gift-boxes/${giftbox[category][0].id}`} className="bg-purple-600 block md:float-right md:inline-block
                text-white text-center py-1 px-3">Order Now </Link>
            )
          ) : null
        ))}
    </div>
  )
}
export default Shredded;