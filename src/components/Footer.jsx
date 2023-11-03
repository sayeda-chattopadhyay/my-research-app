import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

      <Link
        to={"/"}
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        Logo
      </Link>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link to={"/"} className="nav-link px-2 text-body-secondary">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="nav-link px-2 text-body-secondary">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/research"} className="nav-link px-2 text-body-secondary">
            Research
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/publications"}
            className="nav-link px-2 text-body-secondary"
          >
            Publications
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/news"} className="nav-link px-2 text-body-secondary">
            News and Updtes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
