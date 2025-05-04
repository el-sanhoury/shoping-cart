import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  // إغلاق القائمة المنسدلة عند الضغط على أي لينك
  function closeNavbar() {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  }

  return (
    <header className="sticky-top" dir="ltr">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          {/* الشعار */}
          <Link className="navbar-brand" to="/">
            نوفا ستور
          </Link>

          {/* زر الهامبرغر */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* الروابط */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shop"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  المتجر
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  عن المتجر
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  اتصل بنا
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  العربة ({cartItems.length})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
