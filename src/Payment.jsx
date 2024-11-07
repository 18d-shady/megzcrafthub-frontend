import React from 'react';
import Heading from './Heading';
import Foot from './Foot';
import { useLocation } from 'react-router-dom';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

function Payment(){

  const location = useLocation();
  const { data } = location.state;
  const imageUrl = require('./logo.png');
  const config = {
    public_key: 'FLWPUBK_TEST-35e76451181f92c04903cbafb0107a2f-X',
    tx_ref: Date.now(),
    amount: Number(data.amount),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: data.emaill,
       phone_number: data.phone_numberr,
      name: data.name,
    },
    customizations: {
      title: 'Order ID: ' + data.title,
      description: 'Payment for items in cart',
      logo: `url(${imageUrl})`,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="h-screen w-screen">
    <Heading />
    <div className="mx-auto w-full md:w-96 h-28 mt-32 mb-96 p-5 bg-gray-50 border border-gray-300">
     {/*<h1 className="text-center my-3">HI there!</h1>*/}
     

      <button className="px-2 py-1 bg-purple-700 text-white hover:bg-white hover:text-purple-700
      hover:border hover:border-purple-700 block mx-auto"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
               if (response.status === 'successful'){
                 const transactionId = response.data.id;
                 console.log(`Transaction ID: ${transactionId}`);
               }
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay with Flutterwave
      </button>
    </div>
    <Foot />
    </div>
  );
}
export default Payment;

/*
<p>{data.name}</p>
     <p>{data.emaill}</p>
     <p>{data.phone_numberr}</p>
     <p>{'Order ID: ' + data.title}</p>
     <p>{data.amount}</p>
*/