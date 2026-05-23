function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Contact Us</h2>

            <p>
              123 Tire Street, Windsor, ON
            </p>

            <p>
              Phone: (905) 000-0000
            </p>

            <p>
              Mon - Sat: 8AM - 6PM
            </p>

            <a href="tel:+19050000000" className="btn btn-danger mt-3">
              Call Now
            </a>
          </div>

          <div className="col-lg-6">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;