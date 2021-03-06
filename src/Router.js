import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/** VIEWS */
import LogIn from './views/LogIn/LogIn';
import Index from './views/index/Index';
import India from './views/India/India'

class Router extends Component {

    render() {
        return(
            
            <BrowserRouter>
                {/** Configurar rutas */}
                <Switch>
                    <Route exact path="/" component= {Index} />
                    <Route exact path="/login" component= {LogIn} />
                    <Route exact path="/india" component= {India} />
                </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;