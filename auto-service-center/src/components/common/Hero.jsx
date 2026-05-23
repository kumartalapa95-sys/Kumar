function Hero() {
  return (
    <section className="hero-section d-flex align-items-center text-white">
      <div className="container text-center">
        <h1 className="display-3 fw-bold mb-4">
          Premium Tire & Auto Services
        </h1>

        <p className="lead mb-4">
          Trusted Tire Installation, Repairs & Auto Services in Windsor.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+19050000000" className="btn btn-danger btn-lg px-4">
            Call Now
          </a>

          <a href="#contact" className="btn btn-outline-light btn-lg px-4">
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;