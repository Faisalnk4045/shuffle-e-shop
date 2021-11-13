import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `https://nameless-sea-82925.herokuapp.com/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div>
            <div className='container my-5 pb-5'>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Reviews;