import HomePage from './HomePage';
import ProductItem from './ProductItem';
import CollectionBox from './CollectionBox';
import Cart from './Cart';
import Payment from './Payment';
import Order from './Order';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gift-boxes/:productId" element={<ProductItem />} />
            <Route path="/collections/:collectionName" element={<CollectionBox />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Order />} />
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
