import React, { Component } from 'react';
import RegisterForm from '../form/RegisterForm';
import './RegisterModal.css';

class RegisterModal extends Component {
    closeModal = () => {
        this.props.history.goBack()
      };
    
    render() {
        return (
            <div className='modal-wrap'>
                <div className='modal'>
                    <div className='block-btn'>
                        <button onClick={this.closeModal}>X</button>
                    </div>
                    <h2>Register</h2>
                    <RegisterForm />
                </div>
            </div>
        );
    }
}
export default RegisterModal;
