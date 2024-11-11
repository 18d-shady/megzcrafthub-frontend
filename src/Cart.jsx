import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from './Heading';
import { Link, useNavigate } from 'react-router-dom';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

function Cart() {

  const [cartItems, setCartItems] = useState([]);
  const [checkInfo, setCheckInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [shouldRunEffect, setShouldRunEffect] = useState(true);
  const [shouldRunEffect2, setShouldRunEffect2] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  //const [updatedItem, setUpdatedItem] = useState({});

  useEffect(() => {
    if (shouldRunEffect) {
      axios.get('https://davisolehi.pythonanywhere.com/e/api/view-cart/', {
        withCredentials: true,
      })
        .then(response => {
          setCartItems(response.data);
        })
        .catch(error => {
          console.error(error);
      });
      setShouldRunEffect(false);
    }
  }, [shouldRunEffect]);

  useEffect(() => {
    if (shouldRunEffect2) {
      axios.get('https://davisolehi.pythonanywhere.com/e/api/order/', {
        withCredentials: true,
      })
        .then(response => {
          if (response.data.message === "You have no billing record, please input below...") {
            setErrorMessage("You have no billing record, please input below...");
          } else {
            setCheckInfo(response.data);
          }
        })
        .catch(error => {
          console.error(error);
      });
      setShouldRunEffect2(false);
    }
  }, [shouldRunEffect2]);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    //setUpdatedItem({ id: itemId, quantity: newQuantity });
    //axios.patch(`/api/cart-items/${itemId}/`, updatedItem)
    axios.post('https://davisolehi.pythonanywhere.com/e/api/view-cart/', {
      order_id: itemId,
      cart_action: newQuantity,
    }, {
      withCredentials: true
    })
    .then(response => {
      console.log(response.data);
      setShouldRunEffect(true);
    })
    .catch(error => {
      console.error(error);
    });
  };

  const handlePickupChange = (event) => {
      setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();

  const handleRedirect = async () => {
    //const data = "proceed"; // Replace with your actual data
    // Redirecting to another page after successful data submission
    navigate('/'); 
    axios.post('https://davisolehi.pythonanywhere.com/e/api/complete-checkout/', {
      actionn: "proceed",
      selected: selectedOption,
      }, {
        withCredentials: true
      })
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      address: address,
    };
    axios.post('https://davisolehi.pythonanywhere.com/e/api/order/', formData,
    {
      withCredentials: true
    })
      .then(response => {
        console.log(response.data);
        setShouldRunEffect2(true);
      })
      .catch(error => {
        console.error(error);
      });
  };


  let name, phone_numberr, emaill, amount, title;
  if (checkInfo && checkInfo.first_name && checkInfo.last_name){
    name = checkInfo.first_name+' '+checkInfo.last_name;
    phone_numberr = checkInfo.phone_number;
    emaill = checkInfo.email;
  }
  if (cartItems.length > 0 && cartItems[0].order.total_price){
    amount = cartItems[0].order.total_price;
    title =  cartItems[0].order.id;
  }

  const data = { name, phone_numberr, emaill, amount, title};

  const publicKey = process.env.REACT_APP_FLW_PUBLIC_KEY;
  const imageUrl = require('./logo.png');
  const config = {
    public_key: 'FLWPUBK_TEST-30228099b37bd8b47815f5b429834a06-X',
    tx_ref: Date.now(),
    amount: Number(amount) + (0.015 * Number(amount)),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: emaill,
       phone_number: phone_numberr,
      name: name,
    },
    customizations: {
      title: 'Order ID: ' + title,
      description: 'Payment for items in cart',
      logo: `url(${imageUrl})`,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <Heading />
      <div className="p-2 md:p-5 m-2 md:m-5 mt-20 md:mt-20 font-league border border-gray-200">
        <h2 className="text-2xl">Cart Items</h2>
        <p>You have {cartItems.length} items in your cart</p>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="shadow-md my-3 p-2 align-middle flex flex-row justify-between">
              <div className="h-18 w-16 bg-center md:w-10 md:h-10 bg-cover align-middle me-4"
              style={{ backgroundImage: `url(https://davisolehi.pythonanywhere.com${item.gift_box.image})`, }}>
              </div>
              <div className="align-middle md:flex justify-between w-2/3">
                <p className="w-full md:w-80 align-middle">{item.gift_box.name}   x{item.quantity}</p>
                <p className="w-20 align-middle">N{item.price * item.quantity}</p>
                <input
                  className=" w-12 text-center align-middle border border-gray-900 "
                  type="number"
                  placeholder={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                />
              </div>
              <button onClick={() => handleUpdateQuantity(item.id, 'delete')}
              className="px-3 py-1 text-white bg-red-700 hover:bg-white align-middle
              hover:text-red-700 hover:border hover:border-red-700">
                <svg class="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                  <path stroke="none" d="M0 0h24v24H0z"/>  
                  <line x1="4" y1="7" x2="20" y2="7" />  
                  <line x1="10" y1="11" x2="10" y2="17" />  
                  <line x1="14" y1="11" x2="14" y2="17" />  
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <h3 className="text-2xl">Billing Information</h3>
          {checkInfo ? (
            <div className="mx-1 text-gray-800">
              <p>{checkInfo.first_name} {checkInfo.last_name}</p>
              <p>{checkInfo.email}</p>
              <p>{checkInfo.phone_number}</p>
              <p>{checkInfo.address}</p>
            </div>
          ) : (
            <div>
              <p>{errorMessage}</p>
              <form onSubmit={handleSubmit}>
                <label className="block text-sm">First Name:</label>
                <input className="block border border-gray-500"
                type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                <br />
                <label className="block text-sm">Last Name:</label>
                <input className="block border border-gray-500"
                type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                <br />
                <label className="block text-sm">Email:</label>
                <input className="block border border-gray-500"
                type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <br />
                <label className="block text-sm">Phone Number:</label>
                <input className="block border border-gray-500"
                type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                <br />
                <label className="block text-sm">Address:</label>
                <textarea className="block border border-gray-500"
                value={address} onChange={(event) => setAddress(event.target.value)} />
                <br />
                <button className="bg-green-700 px-3 py-1 text-white"type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>

        <div className="my-5 text-xl">
          {cartItems.length > 0 && (
            <h3>Total Price: N{cartItems[0].order.total_price}</h3>
          )}
        </div>

        <h4>Choose pickup method: </h4>
        <label className="block">
            <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handlePickupChange}
            />
            Delivery
        </label>
        <label className="block">
            <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handlePickupChange}
            />
            Pick up items 
            <span className="text-xs block ms-2">
              At our local store at Brick's house,
              Independence layout, Enugu. For directions and assistance, call:
              09099385597 or 07066196396
            </span>
        </label>


        <Link to="/payment" state={{ data }} className="hidden bg-green-700 px-12 py-3 text-white my-5 "> Check Out </Link>
        
      {checkInfo ? (
        <button
        className="bg-green-700 px-12 py-3 text-white my-5 "
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
               if (response.status === 'successful'){
                 const transactionId = response.transaction_id;
                 console.log(`Transaction ID: ${transactionId}`);
                 handleRedirect();
               }
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
        >Checkout</button>
      ) : (
        null
      )}

      </div>
    </div>
  );
}

export default Cart;

