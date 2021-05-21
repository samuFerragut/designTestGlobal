import React, { Component } from 'react';

/** IMAGES */
import bg from '../assets/images/bg.jpg';
import logo from '../assets/images/Logos_Just-eat.png';

/** CSS */
import '../assets/css/header.css';

class Header extends Component {

    render() {
        return (
            <navbar>
                <a href="/"><img src={logo} className="logo"></img></a>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="/login">Inicia sesión</a>
                        </li>
                        <li>
                            <a href="#">Ayuda</a>
                        </li>
                    </ul>
                </nav>
                {/** CLEAR FLOATS */}
                <div className="clearfix"></div>
                <div className="search">
                    <br></br>
                    <h1>Pide lo que te pida el cuerpo</h1>
                    <p>Comida a domicilio online cerca de ti</p>
                    <form>
                        <input type="text"></input>
                        <button type="submit">Buscar restaurantes</button>
                    </form>
                    <br></br>
                </div>
            </navbar>
        );
    }
}
export default Header;