import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from "../Header";
import { MainPage, CartPage } from "../Pages";

class App extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/cart' component={CartPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;