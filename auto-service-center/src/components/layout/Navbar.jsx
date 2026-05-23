function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          Premium Tire & Auto Service
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                Reviews
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li className="nav-item mt-3 mt-lg-0">
              <a href="tel:+19050000000" className="btn btn-danger px-4">
                Call Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;