import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Product from "../components/Product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "../data/Products";

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="container py-4  bg-light">
        <h1 className="text-center mb-5">المتجر</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {products.map((product) => (
            <div key={product.id} className="col">
              <Product product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h4>اشترك في النشرة البريدية</h4>
          <p>سجّل الآن واحصل على خصم 10% على أول طلب!</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form dir="ltr">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="ادخل بريدك الإلكتروني"
                  />
                  <button className="btn btn-warning" type="submit">
                    اشترك
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
