import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../components/nav/NavBar';
import Main from '../pages/main/Main';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Main />
            <Switch>
                <Route
                    exact
                    path='/'
                    render={props => <Main {...props} />}
                />
            </Switch>
        </div>
    );
}

export default App;
