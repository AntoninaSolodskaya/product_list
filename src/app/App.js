import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../components/nav/NavBar';
import Main from '../pages/main/Main';
import RegisterModal from '../auth/register/modal/RegisterModal';
import LoginModal from '../auth/login/modal/LoginModal';

function App() {
    return (
        <div className='App'>
            <NavBar />

            <Switch>
                <Route exact path='/' render={props => <Main {...props} />} />
                <Route
                    exact
                    path='/register'
                    render={props => <RegisterModal {...props} />}
                />
                <Route
                    exact
                    path='/login'
                    render={props => <LoginModal {...props} />}
                />
            </Switch>
        </div>
    );
}

export default App;
