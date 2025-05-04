import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">السعر: {item.price} ريال</p>
        </div>
        <div className="d-flex align-items-center">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="btn btn-outline-secondary btn-sm"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="btn btn-outline-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="btn btn-danger btn-sm ms-3"
          >
            إزالة
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;