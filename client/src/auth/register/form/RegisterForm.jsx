import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../CustomInput';
import { connect } from 'react-redux';
import { registerUser } from '../../authActions';
import './RegisterForm.css';

const mapState = state => ({
    auth: state.auth
});

const actions = {
    registerUser
};

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 3) {
        errors.name = 'Name should be at least 3 characters long';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Password should be at least 6 characters long';
    }
    return errors;
};

class RegisterForm extends Component {
    render() {
        const {
            registerUser,
            pristine,
            handleSubmit,
            submitting,
            auth
        } = this.props;

        const isErr = auth.isErr;
        return (
            <div className='wrap'>
                <form onSubmit={handleSubmit(registerUser)}>
                    <div className='container'>
                        <div className='section'>
                            <Field
                                name='name'
                                label='Your name'
                                type='text'
                                className='form-control'
                                component={CustomInput}
                            />

                            <Field
                                name='password'
                                label='Your password'
                                group
                                type='password'
                                className='form-control'
                                component={CustomInput}
                            />

                            {isErr && (
                                <span className="badge">
                                    It's password or name already exists
                                </span>
                            )}
                        </div>

                        <div className='wrap-btn'>
                            <button
                                className='form-btn'
                                type='submit'
                                disabled={pristine || submitting}
                            >
                                Sign Up
                            </button>
                            <p className="redirect">
                                Have an account?
                                <Link to='/login' className='context'>Log in</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    mapState,
    actions
)(reduxForm({ form: 'register', validate })(RegisterForm));
