import React from 'react';
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

/** IMAGES */
import bg from '../assets/images/bg.jpg';
import logo from '../assets/images/Logos_Just-eat.png';

/** CSS */
import '../assets/css/header.css';

export default function Header() {

    const [anchorE1, setAnchorE1] = React.useState(null);

    const handleclick = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorE1(null);
    };

    return (
        <navbar>
            <img src={logo} className="logo"></img>
            <div className="hamburger">
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleclick}>
                    Menu
                </Button>
                <Menu 
                    id="simple-menu"
                    anchorE1={anchorE1}
                    keepMounted
                    open={Boolean(anchorE1)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Inicia Sesión</MenuItem>
                    <MenuItem onClick={handleClose}>Ayuda</MenuItem>
                    <MenuItem onClick={handleClose}>Selecciona tu país</MenuItem>
                </Menu>
            </div>
        </navbar>
    );
}

