import Inventory, { glazingPrice, packPrice } from './Inventory.jsx';
import './Product.css';
import { useEffect, useState } from 'react';

function Product(props) {
  const [price, setPrice] = useState(parseFloat(Inventory[props.id].price));
  const [glazing, setGlazing] = useState('Keep Original');
  const [packSize, setPackSize] = useState(1);

  useEffect(() => {
    let newPrice = (parseFloat(Inventory[props.id].price) + glazingPrice[glazing]) * packPrice[packSize];
    setPrice(newPrice.toFixed(2));
  }, [glazing, packSize]);

  return (
    <div className="product">
      <img src={process.env.PUBLIC_URL + Inventory[props.id].url} alt={Inventory[props.id].name} width="260px" />
      <h2 className="product-name">{Inventory[props.id].name}</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td className="cell-left">
                <label form={Inventory[props.id].name}>Glazing:</label>
              </td>
              <td className="cell-right">
                <select
                  name={Inventory[props.id].name}
                  id={Inventory[props.id].name}
                  value={glazing}
                  className="glaze-menu"
                  onChange={(e) => setGlazing(e.target.value)}>
                  <option value="Keep Original">Keep Original</option>
                  <option value="Sugar Milk">Sugar Milk</option>
                  <option value="Vanilla Milk">Vanilla Milk</option>
                  <option value="Double chocolate">Double chocolate</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <p>Pack size:</p>
              </td>
              <td className="cell-right">
                <input
                  type="radio"
                  id={`${props.id}-1`}
                  name={`${props.id}`}
                  value="1"
                  onClick={() => setPackSize(1)}
                  defaultChecked
                />
                <label htmlFor={`${props.id}-1`} className="size-menu">
                  1
                </label>
                <input
                  type="radio"
                  id={`${props.id}-3`}
                  name={`${props.id}`}
                  value="3"
                  onClick={() => setPackSize(3)}
                />
                <label htmlFor={`${props.id}-3`} className="size-menu">
                  3
                </label>
                <input
                  type="radio"
                  id={`${props.id}-6`}
                  name={`${props.id}`}
                  value="6"
                  onClick={() => setPackSize(6)}
                />
                <label htmlFor={`${props.id}-6`} className="size-menu">
                  6
                </label>
                <input
                  type="radio"
                  id={`${props.id}-12`}
                  name={`${props.id}`}
                  value="12"
                  onClick={() => setPackSize(12)}
                />
                <label htmlFor={`${props.id}-12`} className="size-menu size-menu-12">
                  12
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="price">$ {price}</h2>
              </td>
              <td className="cell-right">
                <input type="button" className="add-to-cart" value="Add to Cart" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Product;
