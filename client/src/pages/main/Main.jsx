import React, { Component } from 'react';
import { connect } from 'react-redux';
import setAuthToken from '../../utils/setAuthToken';
import Product from '../product/Product';
import { loadProducts } from '../product/productActions';
import './Main.css';

const mapState = state => ({
    products: state.products,
    loading: state.async.loading
});

const actions = {
    loadProducts
};

class Main extends Component {
    componentDidMount() {
        const token = localStorage.getItem('token');
        setAuthToken(token);
        console.log('token', token);
        this.props.loadProducts();
    }

    render() {
        const { products } = this.props;
        console.log(products);
        return (
            <div className='main-wrap'>
                <h1 className='main-title'>Catalog of Products:</h1>
                <div className='main-block'>
                    {products &&
                        products.map((product, i) => (
                            <Product product={product} key={i} />
                        ))}
                </div>
               
            </div>
        );
    }
}

export default connect(
    mapState,
    actions
)(Main);
