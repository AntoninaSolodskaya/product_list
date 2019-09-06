import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../authActions';
import CustomInput from '../../CustomInput';
import './LoginForm.css';

const mapState = state => ({
    auth: state.auth
});

const actions = {
    login
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

class LoginForm extends Component {
    render() {
        const { login, pristine, handleSubmit, submitting, auth } = this.props;
        const isErr = auth.isErr;
        return (
            <div className='wrap'>
                <form onSubmit={handleSubmit(login)}>
                    <div className='container'>
                        <div className='section'>
                            <Field
                                name='name'
                                label='Your Name'
                                type='text'
                                component={CustomInput}
                                className='form-control'
                            />

                            <Field
                                name='password'
                                label='Your password'
                                type='password'
                                component={CustomInput}
                                className='form-control'
                            />
                            {isErr && <span>Wrong password or email</span>}
                        </div>

                        <div className='wrap-btn'>
                            <button
                                className='form-btn'
                                type='submit'
                                disabled={pristine || submitting}
                            >
                                Sign In
                            </button>
                            <p className="redirect">
                                Have not account?
                                <Link to='/register' className='context'>Sign Up</Link>
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
)(reduxForm({ form: 'login', validate })(LoginForm));
