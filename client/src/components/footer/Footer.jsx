import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2">
              Kotisivu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" href="#" className="nav-link px-2">
              Asunnot
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2">
              Hotellit
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2">
              Mökkit
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2">
              Huvilat
            </Link>
          </li>
        </ul>
        <p className="text-center company-name text-muted">&copy; 2024 Helppomatka</p>
      </footer>
    </div>
  );
};

export default Footer;
