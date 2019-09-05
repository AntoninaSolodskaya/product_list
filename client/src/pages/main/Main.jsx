import React, { Component } from 'react';
import axios from 'axios';
import Product from '../product/Product';
import './Main.css';

class Main extends Component {
    state = {
        products: [
            {
                Id: '1',
                Title: 'Some Title',
                Image:
                    'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?cs=srgb&dl=colorful-colourful-forest-33109.jpg&fm=jpg',
                Text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            },
            {
                Id: '2',
                Title: 'Second Product',
                Image:
                    'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                Text:
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
            }
        ],
        isLoading: true
    };

    // loadProducts = () => {
    //     axios
    //         .get('http://smktesting.herokuapp.com/products/')
    //         .then(response =>
    //             response.data.results.map(product => console.log(product))
    //         )
    //         .then(products => {
    //             this.setState({
    //                 products,
    //                 isLoading: false
    //             });
    //         })

    //         .catch(error => this.setState({ error, isLoading: false }));
    // };

    // componentDidMount() {
    //     this.loadProducts();
    // }

    render() {
        const { products } = this.state;
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

export default Main;
