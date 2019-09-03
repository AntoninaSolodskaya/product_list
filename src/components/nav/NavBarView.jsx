import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBarView extends Component {
    render() {
        return (
            <div className='header'>
                <div className='logo-wrap'>
                    <Link to='/' className='logo'>
                        Logo
                    </Link>
                </div>
                <ul className='main-nav'>
                    <li>
                        <span className='nav-link'>User Email</span>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>
                            Logout
                        </Link>
                    </li>
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
                </ul>
            </div>
        );
    }
}

export default NavBarView;
