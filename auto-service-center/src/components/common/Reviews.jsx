const reviews = [
  {
    name: 'Michael R.',
    text: 'Amazing service and great pricing. Highly recommended.',
  },
  {
    name: 'Sarah T.',
    text: 'Quick tire change and very professional staff.',
  },
  {
    name: 'David K.',
    text: 'Best auto service experience I have had in years.',
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Customer Reviews</h2>
          <p className="text-muted">4.6 Rating From Happy Customers</p>
        </div>

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h5>{review.name}</h5>
                <p className="text-muted">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;