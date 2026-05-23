import { FaTools, FaOilCan, FaCarSide, FaCogs } from 'react-icons/fa';

const services = [
  {
    icon: <FaCarSide />,
    title: 'Tire Installation',
    text: 'Professional tire mounting and balancing services.',
  },
  {
    icon: <FaOilCan />,
    title: 'Oil Change',
    text: 'Fast and reliable oil changes for all vehicles.',
  },
  {
    icon: <FaTools />,
    title: 'Brake Service',
    text: 'Brake inspection and replacement services.',
  },
  {
    icon: <FaCogs />,
    title: 'Wheel Alignment',
    text: 'Precision wheel alignment for better performance.',
  },
];

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            Reliable automotive services with professional care.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="service-card h-100 text-center p-4 bg-white shadow-sm rounded-4">
                <div className="service-icon mb-3">{service.icon}</div>

                <h4>{service.title}</h4>

                <p className="text-muted">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;