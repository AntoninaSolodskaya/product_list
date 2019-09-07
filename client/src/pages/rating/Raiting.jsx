import React, { Component } from 'react';
import './Raiting.css';

const Star = ({ selected = false, onClick = f => f }) => 
    <div
        className={selected ? 'star selected' : 'star'} 
        onClick={onClick}
    ></div>;


class Raiting extends Component {
    
    render() {
        const { totalStars, rating, setRating } = this.props;
        return (
            <div className='star-rating'>
                {[...Array(totalStars)].map((n, i) => (
                    <Star
                        key={i}
                        selected={i < rating}
                        onClick={() => setRating(i + 1)}
                    />
                ))}
            </div>
        );
    }
}
export default Raiting;
