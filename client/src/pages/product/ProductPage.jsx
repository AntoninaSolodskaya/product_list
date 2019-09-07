import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductPage.css';
import CommentsPage from '../comments/CommentsPage';

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
    closePage = () => {
        this.props.history.goBack();
    };

    render() {
        const { product, comments } = this.props;
        console.log("comments", comments)
        return (
            <div className='wrapper'>
                <div className='container'>
                    <h1 className='title'>{product.title}</h1>
                    <div className='main-block'>
                        <div className='left-column'>
                            <div className='main-img-wrap'>
                                <img
                                    src={product.image}
                                    alt=''
                                    className='main-img'
                                ></img>
                            </div>
                            <p className='content'>{product.text}</p>
                        </div>
                        <div className='right-column'>
                            
                            <CommentsPage product={product} />
                        </div>
                    </div>
                </div>
                <div className='btn-wrap'>
                    <button className='main-btn' onClick={this.closePage}>
                        Go Back
                    </button>
                </div>
            </div>
        );
    }
}
export default connect(mapState)(ProductPage);
