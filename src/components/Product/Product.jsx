import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card p-3 mb-3">
      <div className="card-body text-center">
        <img
          src={`${import.meta.env.BASE_URL}${product.url}`}
          alt={product.url}
          className="img-fluid"
          style={{ height: "250px" }}
        />
        <h3 className="card-title mt-3">{product.name}</h3>
        <p className="card-text">
          <strong>المميزات:</strong> {product.features}
        </p>
        <p className="text-primary mt-2">السعر: {product.price} دولار</p>
        <button
          onClick={() => addToCart(product)}
          className="btn btn-primary mt-2"
        >
          أضف إلى العربة
        </button>
      </div>
    </div>
  );
}

export default Product;
