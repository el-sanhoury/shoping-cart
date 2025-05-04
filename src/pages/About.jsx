import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <section className="container">
        <div className="row align-items-center">
          {/* مقدمة */}
          <div className="col-md-6 text-md-start text-center p-5">
            <h2 className="text-center mb-4">عن نوفا ستور</h2>
            <p className="lead text-center">
              نوفا ستور هو متجر إلكتروني يهدف إلى تقديم منتجات عالية الجودة
              وبأسعار تنافسية. نحن هنا لنوفر لك أفضل التجارب الشرائية عبر
              الإنترنت مع مجموعة متنوعة من المنتجات التي تلبي جميع احتياجاتك.
            </p>
          </div>

          {/* الرؤية والرسالة */}
          <div className="bg-light p-5 col-md-6 text-md-start text-center">
              <h3 className="text-center mb-3">رؤيتنا ورسالتنا</h3>
              <p className="text-center">
                هدفنا هو أن نكون الخيار الأول للمتسوقين على الإنترنت، عبر توفير
                تجربة مريحة وآمنة مع ضمان أفضل جودة. نحرص على توفير منتجات
                متنوعة تلبي احتياجات كل عميل، مع اهتمام خاص بالجودة والخدمة.
              </p>
          </div>
        </div>
      </section>

      {/* ما يميزنا */}
      <section className="container py-5 ">
        <h3 className="text-center mb-4">ما يميز نوفا ستور؟</h3>
        <div className="row gap-3">
          <div className="col text-center p-5 mb-4 shadow">
            <i className="fas fa-truck fa-3x mb-3"></i>
            <h4>توصيل سريع</h4>
            <p>نحن نحرص على ضمان وصول منتجاتك في أسرع وقت ممكن، أينما كنت.</p>
          </div>
          <div className="col text-center p-5 mb-4 shadow">
            <i className="fas fa-headset fa-3x mb-3"></i>
            <h4>دعم فني 24/7</h4>
            <p>
              فريقنا جاهز دائمًا للمساعدة والإجابة على استفساراتك في أي وقت.
            </p>
          </div>
          <div className="col-md-4 text-center p-5 mb-4 shadow">
            <i className="fas fa-percent fa-3x mb-3"></i>
            <h4>عروض وتخفيضات حصرية</h4>
            <p>استمتع بأفضل العروض والتخفيضات التي نقدمها بشكل دوري.</p>
          </div>
        </div>
      </section>

      {/* آراء العملاء */}
      <section className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-4">آراء عملائنا</h3>
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p className="mb-4">
                  منتجات رائعة، وتجربة شراء مميزة. سأعود للتسوق هنا مرة أخرى!
                </p>
                <footer className="blockquote-footer">أحمد حسين</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p className="mb-4">
                  الخدمة سريعة جدًا. أعجبتني جودة المنتجات. شكرًا نوفا ستور!
                </p>
                <footer className="blockquote-footer">فاطمة مصطفى</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للعمل */}
      <section className="bg-dark text-white py-5 text-center">
        <h3>اكتشف الآن كل ما تحتاجه في نوفا ستور</h3>
        <p>ابدأ تسوقك اليوم واستمتع بتجربة فريدة!</p>
        <Link to="/shop" className="btn btn-light">
          تسوق الآن
        </Link>
      </section>
    </div>
  );
}

export default About;
