import React, { Component } from 'react';
import { connect } from 'react-redux';
import Raiting from '../rating/Raiting';
import './CommentsPage.css';

const mapState = state => ({
    auth: state.auth
});

class CommentsPage extends Component {
    state = {
        comments: [],
        text: '',
        rating: 0,
        totalStars: 5
    };

    handleTextChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleAddItem = event => {
        event.preventDefault();
        let date = new Date();
        let newData = date.toLocaleString();

        let newComment = {
            id: Date.now(),
            text: this.state.text,
            time: newData,
            _id: this.props.product._id,
            name: this.props.auth.currentUser
        };
        console.log(newComment);
        this.setState(prevState => ({
            comments: prevState.comments.concat(newComment),
            text: ''
        }));
    };

    setRating = rating => {
        this.setState({ rating });
    };

    render() {
        const { rating, totalStars } = this.state;
        return (
            <div>
                <Raiting rating={rating} totalStars={totalStars} setRating={this.setRating} />
                <form onSubmit={this.onSubmit} className="comment-form">
                    <textarea
                        placeholder='Enter Your Review'
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        className='form-control'
                        name='message'
                    ></textarea>
                    <button
                        className='comment-btn'
                        onClick={this.handleAddItem}
                    >
                        Submit review
                    </button>
                </form>
                <div className='comment-title'>
                    <h3>Reviews</h3>
                    <span className='badge'>{this.state.comments.length}</span>
                </div>

                {this.state.comments.map((comment, index) => (
                    <div className='comment-container'>
                        <div className='comment-span'>
                            <span className='comment-name'>{comment.name}</span>
                            <span>{comment.time}</span>
                        </div>
                        <div className='comment-text'>
                            <p>rating: {rating}</p>
                            <p>{comment.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default connect(mapState)(CommentsPage);
