import Product from './Product.jsx';
import './Gallery.css';

function Gallery() {
  return (
    <div className="Gallery">
      <Product id="original" />
      <Product id="apple" />
      <Product id="raisin" />
      <Product id="walnut" />
      <Product id="double_chocolate" />
      <Product id="strawberry" />
    </div>
  );
}

export default Gallery;
