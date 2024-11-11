import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from './Heading';

function Order() {

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    axios.get('https://davisolehi.pythonanywhere.com/e/api/final-order', {
      withCredentials: true,
    })
      .then(response => {
        setOrderItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" bg-slate-50">
      <Heading />
      <div className="m-2 md:mx-20 lg:mx-40 mt-20 md:mt-20 font-league">
        <h2 className="text-2xl text-center pt-3">Completed Orders</h2>
        <p className="text-center">You have {Object.keys(orderItems).length} completed order(s)</p>
        <ul>
          {Object.keys(orderItems).map(order => (
            <div className="p-2 border border-gray-200 my-5 bg-white md:px-5">
                <h3>{order}</h3>
                {Object.keys(orderItems).length > 0 && (
                    <p>Total Price: N{orderItems[order][0].order.total_price}</p>
                )}

                {orderItems[order].map((item) => (
                  <li key={item.id} className="shadow-md my-3 p-2 align-middle flex flex-row justify-between text-sm md:text-base">
                    <div className="bg-center w-10 h-10 bg-cover align-middle me-4"
                    style={{ backgroundImage: `url(https://davisolehi.pythonanywhere.com${item.gift_box.image})`, }}>
                    </div>
                    <p className="align-middle">{item.gift_box.name}   x{item.quantity}</p>
                    <p className="align-middle">N{item.price * item.quantity}</p>
        
                
                  </li>
                ))}
            </div>
          ))}
        
        </ul>

        </div>
    </div>
  );
}

export default Order;

