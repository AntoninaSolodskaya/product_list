import React, { Component } from 'react';
import { connect } from 'react-redux';
import Raiting from '../rating/Raiting';
import './CommentsPage.css';
import { createComment, loadAllComments } from './commentsAction';

const mapState = state => ({
    auth: state.auth,
    comments: state.comments
});

const actions = {
    createComment,
    loadAllComments
};

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
            text: this.state.text,
            time: newData,
            productId: this.props.product._id,
            name: this.props.auth.currentUser,
            rating: this.state.rating
        };
       
        this.setState(prevState => ({
            comments: prevState.comments.concat(newComment),
            text: ''
        }));
        this.props.createComment(newComment);
    };

    setRating = rating => {
        this.setState({ rating });
    };

    componentDidMount() {
        this.props.loadAllComments();
    }

    render() {
        const { rating, totalStars } = this.state;
        const { comments, product, auth } = this.props;
        const authenticated = auth.authenticated;
        return (
            <div>
                <Raiting
                    rating={rating}
                    totalStars={totalStars}
                    setRating={this.setRating}
                />
                <form onSubmit={this.onSubmit} className='comment-form'>
                    <textarea
                        placeholder='Enter Your Review'
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        className='form-control'
                        name='message'
                    ></textarea>
                    {authenticated ? (
                        <button
                            className='comment-btn'
                            onClick={this.handleAddItem}
                        >
                            Submit review
                        </button>
                    ) : (
                        <span className='badge'>
                            You must login to write reviews
                        </span>
                    )}
                </form>
                <div className='comment-title'>
                    <h3>Reviews</h3>
                </div>

                {comments &&
                    comments
                        .filter(com => com.productId === product._id)
                        .map((comment, index) => (
                            <div className='comment-container' key={index}>
                                <div className='comment-span'>
                                    <span className='comment-name'>
                                        {comment.name}
                                    </span>
                                    <span>{comment.time}</span>
                                </div>
                                <div className='comment-text'>
                                    <p>rating: {comment.rating}</p>
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        ))}
            </div>
        );
    }
}
export default connect(
    mapState,
    actions
)(CommentsPage);
