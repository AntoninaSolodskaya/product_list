import React, { Component } from 'react';
import LoginForm from '../form/LoginForm';
import './LoginModal.css';

class LoginModal extends Component {
    closeModal = () => {
        this.props.history.goBack();
      };
    render() {
        return (
            <div className='modal-wrap'>
                <div className='modal'>
                    <div className='block-btn'>
                        <button  onClick={this.closeModal}>X</button>
                    </div>
                    <h2>Login</h2>
                    <LoginForm />
                </div>
            </div>
        );
    }
}
export default LoginModal;