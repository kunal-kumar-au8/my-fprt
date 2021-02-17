import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from './Rating';


const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded' style={{background:"#f6f6f6"}}>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </a>

            <Card.Body>
                <a  href={`/product/${product._id}`}>
                    <Card.Title as='div' >
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
            </Card.Body>
            <Card.Title as='div'>
                <Rating value={product.rating}/>
            </Card.Title>
            <Card.Title as='h3'>
                <strong>Price:</strong> ₹{product.price}
            </Card.Title>
        </Card>
    )
}

export default Product;
