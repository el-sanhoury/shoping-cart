import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div>
      {/* مقدمة */}
      <section className="container py-5">
        <h2 className="text-center mb-4">اتصل بنا</h2>
        <p className="text-center">
          لو عندك أي استفسار أو محتاج مساعدة، إحنا هنا دايمًا علشانك. تقدر تتواصل معانا من خلال النموذج أو عبر بيانات الاتصال الموجودة.
        </p>
      </section>

      {/* بيانات التواصل */}
      <section className="container py-4">
        <div className="row text-center gap-3">
          <div className="col text-center p-5 mb-4 shadow">
            <i className="fas fa-phone fa-2x mb-2 text-primary"></i>
            <h5 className="mb-3">الهاتف</h5>
            <p>0123456789</p>
          </div>
          <div className="col text-center p-5 mb-4 shadow">
            <i className="fas fa-envelope fa-2x mb-2 text-primary"></i>
            <h5 className="mb-3">البريد الإلكتروني</h5>
            <p>support@novastore.com</p>
          </div>
          <div className="col text-center p-5 mb-4 shadow">
            <i className="fas fa-map-marker-alt fa-2x mb-2 text-primary"></i>
            <h5 className="mb-3">العنوان</h5>
            <p>  القاهرة، مصر</p>
          </div>
        </div>
      </section>

      {/* نموذج التواصل */}
      <section className="container py-5 bg-light">
        <h3 className="mb-4 text-center">راسلنا مباشرة</h3>
        <form className="w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">الاسم</label>
            <input type="text" className="form-control" id="name" placeholder="اكتب اسمك الكامل" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">رسالتك</label>
            <textarea className="form-control" id="message" rows="4" placeholder="اكتب رسالتك هنا..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">إرسال</button>
        </form>
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
                  <input type="email" className="form-control" placeholder="ادخل بريدك الإلكتروني" />
                  <button className="btn btn-warning" type="submit">اشترك</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
