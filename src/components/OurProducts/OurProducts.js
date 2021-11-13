import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Product from '../Product/Product';

const OurProducts = ({ page }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://nameless-sea-82925.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (page === 'home')
                    setProducts(data.slice(0, 6));
                else
                    setProducts(data);
            })
    }, [page]);

    const history = useHistory();
    const handleBuyNow = (id) => {
        history.push(`/placeOrder/${id}`);
    }

    return (
        <div className='container mt-5'>
            <Row xm={1} md={2} lg={(page === 'home') ? 3 : 4} className="g-4">
                {
                    products.length > 0 ?
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleBuyNow={handleBuyNow}
                        ></Product>)
                        :
                        <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </div>
    );
};

export default OurProducts;