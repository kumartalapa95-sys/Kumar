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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11805.603110903692!2d-83.0468766!3d42.29131305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d962781220b%3A0xcb9c486f09ff10c8!2sFreshCo%20Huron%20Church%20%26%20Tecumseh!5e0!3m2!1sen!2sca!4v1779651507012!5m2!1sen!2sca"
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