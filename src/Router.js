import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/** VIEWS */
import LogIn from './views/LogIn/LogIn';
import Index from './views/index/Index';

class Router extends Component {

    render() {
        return(
            
            <BrowserRouter>
                {/** Configurar rutas */}
                <Switch>
                    <Route exact path="/" component= {Index} />
                    <Route path="/login" component= {LogIn} />
                </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;