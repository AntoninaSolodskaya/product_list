import React, { Component } from 'react';
import RegisterForm from '../form/RegisterForm';
import './RegisterModal.css';

class RegisterModal extends Component {
    render() {
        return (
            <div className='modal-wrap'>
                <div className='modal'>
                    <div className='block-btn'>
                        <button>X</button>
                    </div>
                    <h2>Register</h2>
                    <RegisterForm />
                </div>
            </div>
        );
    }
}
export default RegisterModal;
