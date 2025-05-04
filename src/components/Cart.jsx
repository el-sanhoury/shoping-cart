import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="card p-4">
      <h2 className="mb-4">سلة التسوق</h2>
      {cartItems.length === 0 ? (
        <p className="text-muted">العربة فارغة</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4 text-end">
            <h3>الإجمالي: {total} ريال</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;