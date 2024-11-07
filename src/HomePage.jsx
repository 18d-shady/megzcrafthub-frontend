import Landing from './Landing';
import Landing2 from './Landing2';
//import ProductCard from './ProductCard';
import Product from './Product';
import Deliver from './Deliver';
import Tutorial from './Tutorial';
import Shredded from './Shredded';
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
      
      <Shredded />
      <div id="about">
      <Foot />
      </div>
      {/*<CategoryList />*/}
      
    </div>
  );
}

export default HomePage;
