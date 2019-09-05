import React, { Component } from 'react';

class ProductPage extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className='wrapper'>
                <div className='container'>
                    <h1 className='title'>{product.Title}</h1>
                    <div className="main-block">
                        <div className='left-column'>
                        <div className='image-wrap'>
                            <img src={product.Image} alt=''></img>
                        </div>
                    </div>
                    <div className='right-column'>
                        <p className='content'>{product.Text}</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default ProductPage;
