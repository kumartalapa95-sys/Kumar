import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../../styles/Reviews.scss';

const reviews = [
  {
    name: 'Michael R.',
    text: 'Amazing service and great pricing. Highly recommended.',
    rating: 5,
    theme: 'blue'
  },
  {
    name: 'Sarah T.',
    text: 'Quick tire change and very professional staff.',
    rating: 4,
    theme: 'green'
  },
  {
    name: 'David K.',
    text: 'Best auto service experience I have had in years.',
    rating: 5,
    theme: 'orange'
  },
];

function Reviews() {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className="star-icon"
        color={index < rating ? "#ffc107" : "#e4e5e9"} 
        size={18}
      />
    ));
  };

  return (
    <section id="reviews" className="reviews-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Customer Reviews</h2>
          <p className="text-muted fs-5">
            <FaStar color="#ffc107" className="me-2 mb-1" />
            4.6 Rating From Happy Customers
          </p>
        </div>

        <Row className="g-4">
          {reviews.map((review, index) => (
            <Col xs={12} md={4} key={index}>
              <Card className={`review-card h-100 shadow-sm theme-${review.theme}`}>
                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className={`user-avatar me-3 bg-${review.theme}`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">{review.name}</h5>
                      <div className="stars d-flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <Card.Text className="text-secondary flex-grow-1 fst-italic">
                    "{review.text}"
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Reviews;