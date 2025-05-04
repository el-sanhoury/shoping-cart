import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="container py-5 text-center">
        <div className="row align-items-center">
          <div className="col-md-6 mt-4 mt-md-0">
            <img src="/her.jpg" alt="Hero" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 text-md-start text-center">
            <h1 className="fw-bold mb-3">مرحبًا بك في نوفا ستور</h1>
            <p className="lead">
              أفضل مكان لشراء الإلكترونيات والمنتجات الأصلية بأسعار منافسة
            </p>
            <Link to="/shop" className="btn btn-primary mt-3">
              تسوق الآن
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-3 ">
        <div className="container py-5 text-center">
          <h2 className="mb-4">منتجات مميزة</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/phones/apple-iphone-15-pro-max-1.jpg`}
                  className="card-img-top"
                  alt="product"
                  style={{ height: "350px" }}
                />
                <div className="card-body">
                  <h6 className="card-title my-3">iPhone 15 Pro Max</h6>
                  <p className="card-text text-muted">1400 دولار</p>
                  <Link to="/shop" className="btn btn-sm btn-outline-primary">
                    تسوق الأن
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <img
                  src="/images/Laptop/MacBook Pro 14-inch.jpg"
                  className="card-img-top"
                  alt="product"
                  style={{ height: "350px" }}
                />
                <div className="card-body">
                  <h6 className="card-title my-3">MacBook Pro 14-inch</h6>
                  <p className="card-text text-muted">2000 دولار</p>
                  <Link to="/shop" className="btn btn-sm btn-outline-primary">
                    تسوق الأن
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <img
                  src="/images/headphones/Apple AirPods Pro.jpg"
                  className="card-img-top"
                  alt="product"
                  style={{ height: "350px" }}
                />
                <div className="card-body">
                  <h6 className="card-title my-3">Apple AirPods Pro 3</h6>
                  <p className="card-text text-muted">75 دولار</p>
                  <Link to="/shop" className="btn btn-sm btn-outline-primary">
                    تسوق الأن
                  </Link>
                </div>
              </div>
            </div>

            {/* كرر البلوك ده حسب عدد المنتجات المميزة */}
            {/* ... */}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="bg-warning text-dark text-center py-5">
        <div className="container">
          <h3>عرض خاص لفترة محدودة!</h3>
          <p>احصل على خصم 30% على جميع المنتجات عند الشراء بأكثر من 500 جنيه</p>
          <Link to="/shop" className="btn btn-dark mt-2">
            استفد الآن
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="container py-5">
        <h2 className="text-center mb-4">لماذا نوفا ستور؟</h2>
        <div className="row text-center g-4">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm rounded">🚚 توصيل سريع</div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm rounded">🔒 دفع آمن</div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm rounded">
              ✅ منتجات أصلية
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm rounded">
              📞 دعم فني متواصل
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default Home;
