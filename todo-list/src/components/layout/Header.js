import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../AuthenticationService';
import { withRouter } from 'react-router';

function Header() {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    let user = AuthenticationService.getLoggedInUsername();


    return (
        
        // <header>
        //     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        //         <div> <a href="https://www.google.co.in/" className="navbar-brand"> MyWebsite </a></div>
        //             <ul className="navbar-nav">
        //                 {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/abhi">Home</Link></li>}
        //                 {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
        //                 <li><Link className="nav-link" to="/about"> About</Link></li>
        //             </ul>
        //             <ul className="navbar-nav navbar-collapse justify-content-end">
        //               {!isUserLoggedIn && <li><Link className="nav-link" to="/login"> Login </Link></li> }
        //               {isUserLoggedIn && <li><Link className="nav-link" to="/doLogout" onClick={AuthenticationService.logout} > Logout </Link></li> }
        //             </ul>

        //     </nav>
        // </header>
        
        <header style={headerStyle}>  
            <h1>My TodoList</h1>

            {isUserLoggedIn && <Link style={linkStyle} to={`/welcome/${user}`}> Home | </Link>}
            {isUserLoggedIn && <Link style={linkStyle}to="/todos"> Todos | </Link>} 
            <Link style={linkStyle} to="/about"> About | </Link>
            {!isUserLoggedIn && <Link style={linkStyle} to="/login"> Login </Link> }
            {isUserLoggedIn && <Link style={linkStyle} to="/doLogout" onClick={AuthenticationService.logout} > Logout </Link> }
        
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}


export default withRouter(Header);