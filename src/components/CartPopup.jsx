import './CartPopup.css';

function CartPopup(props) {
  return (
    <div className="CartPopup">
      <p>Added to cart:</p>
      <br />
      <p>
        <b>{props.roll.type}</b>
      </p>
      <p>{props.roll.glazing}</p>
      <p>Pack of {props.roll.packSize}</p>
      <p>Price: {props.roll.price}</p>
    </div>
  );
}

export default CartPopup;
