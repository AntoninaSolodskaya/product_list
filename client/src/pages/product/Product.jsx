import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className='product-section'>
                <div className='image-wrap'>
                    <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt=''></img>
                    </Link>
                </div>
                <p className='title'>
                    <Link to={`/product/${product._id}`} className="title-link">{product.title}</Link>
                </p>
            </div>
        );
    }
}
export default Product;
