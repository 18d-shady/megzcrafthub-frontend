import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Heading from './Heading';
import Foot from './Foot';



function ProductItem(){
    //const imageUrl = require('./shredded2.jpg');
    const [giftbox, setGiftbox] = useState([]);
    const { productId } = useParams();
    const [gift, setGift] = useState(null);
    const [dImage, setDImage] = useState(null);
    const [dText, setDText] = useState('');
    const [productQuantity, setProductQuantity] = useState(1);

    //const [message, setMessage] = useState({});
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

  // Function to handle increment
  const handleIncrement = () => {
    setProductQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setProductQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setDImage(reader.result); // Set the Base64 string
        };
        reader.readAsDataURL(file); // Convert to Base64
    }
  };

  const addToCart = () => {
    axios.post('https://davisolehi.pythonanywhere.com/e/api/add-to-cart/', {
      product_id: Number(productId),
      product_name: gift.name,
      product_price: gift.price,
      product_quantity: productQuantity,
      description_text: dText,
      description_image: dImage
    })
      .then(response => {
        alert(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  return(
    <div className="">
    <Heading />
    <div className="md:flex md:flex-row w-full p-3 py-10 lg:p-10 mt-7">
      <div className="md:h-screen w-full md:basis-1/2 md:w-1/2">
      <div className="w-full h-96 md:h-4/5 bg-contain 
       bg-center md:bg-right-top bg-no-repeat bg-slate-50 md:bg-white"
      style={{ backgroundImage: `url(https://davisolehi.pythonanywhere.com${gift.image})`, }}>
        
      </div>
      </div>

      <div className="md:basis-1/2 bg-white font-league md:me-10 mb-10">
        <div className="w-full xl:w-2/3 mx-3 my-5 md:my-1 md:ms-10">
          <h3 className="text-slate-800 font-league text-3xl my-1">{gift.name}</h3>
          <p className="bg-slate-600 text-sm text-white w-20 py-1 text-center font-serif">In Stock</p>
          <h3 className="text-2xl my-4 font-league">N{gift.price}</h3>
          <p className="text-slate-600 font-league">{gift.description}</p>
          
          <textarea 
            className="block w-72 md:w-80 h-32 border-2 border-slate-300 p-2 font-league my-5 rounded-md"
            placeholder="Include a unique description of your choice (Optional)"
            value={dText} onChange={(event) => setDText(event.target.value)}>
          </textarea>
          <label className="block font-league text-sm">
            Add image file for description (Optional)
          </label>
          <input className="text-sm block" type="file" onChange={handleImageChange} 
              accept="image/*" required />
          <div className="md:inline-block md:me-12">
            <p className="mt-3 font-league">Quantity</p>
            <button className="h-6 w-6 inline-block bg-black text-white text-center me-3" onClick={handleIncrement}>+</button>
            <div className="h-6 w-6 inline-block bg-black text-white text-center me-3">{productQuantity}</div>
            <button className="h-6 w-6 inline-block bg-black text-white text-center me-3"onClick={handleDecrement}>-</button>
          </div>

          <button 
            className="my-5 px-8 lg:px-10 py-2 rounded-sm text-white bg-purple-700
            hover:text-purple-700 hover:border hover:border-purple-700 hover:bg-white rounded-md"
            onClick={addToCart}>
              Add to Cart
            </button>
          

        </div>
      </div>
       
    </div>
    <Foot />
    </div>
  )
}
export default ProductItem;