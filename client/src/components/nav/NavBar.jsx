import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../auth/authActions';
import './NavBar.css';

const mapState = state => ({
    auth: state.auth
});

const actions = {
    logoutUser
};

class NavBar extends Component {
    handleSignOut = () => {
        this.props.logoutUser();
        localStorage.clear();
    };
    render() {
        const { auth } = this.props;
        const name = auth.currentUser;
        const authenticated = auth.authenticated;
        return (
            <div className='header'>
                <div className='logo-wrap'>
                    <Link to='/' className='logo'>
                        Logo
                    </Link>
                </div>
                <ul className='main-nav'>
                    {!authenticated ? (
                        <Fragment>
                            <li>
                                <Link to='/register' className='nav-link'>
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link to='/login' className='nav-link'>
                                    SignIn
                                </Link>
                            </li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <li>
                                <span className='nav-link'>{name}</span>
                            </li>
                            <li>
                                <Link
                                    to='/'
                                    onClick={this.handleSignOut}
                                    className='nav-link'
                                >
                                    Logout
                                </Link>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(mapState, actions)(NavBar);
