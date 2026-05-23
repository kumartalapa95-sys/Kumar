function WhyChooseUs() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4">Why Choose Us?</h2>

            <ul className="list-unstyled why-list">
              <li>✔ Trusted Local Tire & Auto Experts</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ Fast Same-Day Service</li>
              <li>✔ Experienced Technicians</li>
              <li>✔ Customer Satisfaction Focused</li>
            </ul>
          </div>

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
              alt="Auto Service"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;