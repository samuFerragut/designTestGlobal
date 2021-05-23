import React, { Component } from 'react';

/** IMAGES */
import logo from '../assets/images/Logo_orange.png';

/** CSS */
import '../assets/css/logIn.css';

class SecondaryHeader extends Component {

    render() {
        return (
            <navbar>
                <a href="/"><img src={logo} className="logo"></img></a>
                <nav className="menu-secondary">
                    <ul>
                        <li>
                            <a href="#">Regístrate</a>
                        </li>
                        <li>
                            <a href="#">Ayuda</a>
                        </li>
                    </ul>
                </nav>
            </navbar>
        );
    }
}
export default SecondaryHeader;