// import Cart from "../components/Cart";
import Cart from "../components/Cart";

function CartPage() {
  return (
    <>
    <div className="container py-4 min-vh-100 bg-light">
      <h1 className="text-center mb-5">عربة التسوق</h1>
      <Cart />
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
              <input type="email" className="form-control" placeholder="ادخل بريدك الإلكتروني" />
              <button className="btn btn-warning" type="submit">اشترك</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}

export default CartPage;