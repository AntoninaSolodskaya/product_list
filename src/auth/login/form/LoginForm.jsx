import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        console.log(this.state.email, this.state.password);
    };
    render() {
        return (
            <div className='wrap'>
                <form onSubmit={this.handleSubmit}>
                    <div className='container'>
                    <div className='section'>
                            <label>Name:</label>
                            <input
                                name='name'
                                type='text'
                                placeholder='Your Name'
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='section'>
                            <label>Email:</label>
                            <input
                                name='email'
                                type='email'
                                placeholder='Your Email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='section'>
                            <label>Password:</label>
                            <input
                                name='password'
                                type='password'
                                placeholder='Your Password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='wrap-btn'>
                            <button className='form-btn' type='submit'>
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default LoginForm;
