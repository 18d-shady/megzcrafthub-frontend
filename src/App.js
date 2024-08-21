import HomePage from './HomePage';
import ProductItem from './ProductItem';
import CollectionBox from './CollectionBox';
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
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
