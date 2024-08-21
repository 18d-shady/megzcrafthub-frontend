import Landing from './Landing';
import Landing2 from './Landing2';
//import ProductCard from './ProductCard';
import Product from './Product';
import Deliver from './Deliver';
import Tutorial from './Tutorial';
//import Shredded from './Shredded';
import Foot from './Foot';
import Heading from './Heading';
//import CategoryList from './CategoryList';

function HomePage() {
  return (
    <div>
       <Heading class="sticky" />
      <Landing />
      <Landing2 />
      <Product title="Hot Sales" />

      <Product  title="Gift Boxes"/>
      <Deliver />

      <Product title="Paper Bags" />

      <Tutorial />
      <Product  title="Lovely Cards" />

      <div className="font-league m-5">
          <p className="text-slate-700 inline-block text-xl">
          Also Shredded Paper available at cheap prices
          </p>
          <button className="text-purple-600 md:mx-7 md:float-right md:inline-block
          border border-purple-600 py-1 px-3">Order Now </button>
      </div>
      
      <Foot />
      {/*<CategoryList />*/}
      
    </div>
  );
}

export default HomePage;
