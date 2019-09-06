import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductPage.css';

const mapState = (state, ownProps) => {
    const productId = ownProps.match.params.id;
    let product = {};

    if (productId && state.products.length > 0) {
        product = state.products.filter(
            product => product._id === productId
        )[0];
    }

    return {
        product
    };
};

class ProductPage extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className='wrapper'>
                <div className='container'>
                    <h1 className='title'>{product.title}</h1>
                    <div className='main-block'>
                        <div className='left-column'>
                            <div className="section">
                                <div className='image-wrap'>
                                    <img
                                        src={product.image}
                                        alt=''
                                        className='main-img'
                                    ></img>
                                </div>
                                <p className='content'>{product.text}</p>
                            </div>

                            <div className='btn-wrap'>
                                <button className='left-column-btn'>Go Back</button>
                            </div>
                        </div>
                        <div className='right-column'></div>
                    </div>
                </div>
                {/* <div className='btn-wrap'>
                    <button className=''>Go Back</button>
                </div> */}
            </div>
        );
    }
}
export default connect(mapState)(ProductPage);
