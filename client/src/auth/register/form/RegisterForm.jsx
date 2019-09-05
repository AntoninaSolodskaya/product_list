import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import instance from '../../../utils/api';
import './RegisterForm.css';

class RegisterForm extends Component {
    state = {
        username: '',
        password: '',
        userError: '',
        passwordError: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = e => {
        const { username, password } = this.state;
        e.preventDefault();

        const registerdata = {
            username,
            password
        };

        localStorage.setItem('username', username);
        this.props.closeModal();
    };

    validateName = () => {
        const { username } = this.state;
        this.setState({
            userError:
                username.length > 3
                    ? null
                    : 'Email must be longer than 3 characters'
        });
    };
    validatePassword = () => {
        const { password } = this.state;
        this.setState({
            passwordError:
                password.length > 3
                    ? null
                    : 'Password must be longer than 3 characters'
        });
    };

    render() {
        const { username, password, userError, passwordError } = this.state;
        return (
            <div className='wrap'>
                <form
                    onSubmit={this.handleSubmit}
        
                >
                    <div className='container'>
                        <div className='section'>
                            <label>Name:</label>
                            <input
                                name='username'
                                type='text'
                                placeholder='Your Name'
                                value={username}
                                onChange={this.handleChange}
                                className={`form-control ${
                                    userError ? 'is-invalid' : ''
                                }`}
                                onBlur={this.validateName}
                            />
                            <div
                                className='invalid-feedback'
                                style={{ color: '#FF0000' }}
                            >
                                {userError}
                            </div>
                        </div>
                        <div className='section'>
                            <label>Password:</label>
                            <input
                                name='password'
                                type='password'
                                placeholder='Your Password'
                                value={password}
                                onChange={this.handleChange}
                                className={`form-control ${
                                    passwordError ? 'is-invalid' : ''
                                }`}
                                onBlur={this.validatePassword}
                            />
                            <div
                                className='invalid-feedback'
                                style={{ color: '#FF0000' }}
                            >
                                {passwordError}
                            </div>
                        </div>
                        <div className='wrap-btn'>
                            <button className='form-btn' type='submit'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default withRouter(RegisterForm);
