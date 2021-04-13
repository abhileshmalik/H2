import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../AuthenticationService';

class WelcomeComponent extends Component {

    render() {

        let user = AuthenticationService.getLoggedInUsername();

        return (
            <React.Fragment>
                <h2> Welcome </h2>
                <div className="container">
                    Welcome {user} to console. <br />
                    You can manage your Todos <Link style={linkStyle} to="/todos">here</Link>.
                </div>
            </React.Fragment>
        )
    }
}

const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
}

export default WelcomeComponent