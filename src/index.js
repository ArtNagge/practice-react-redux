import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/App/App';
import {ShopProvider} from './components/c-context';
import {StarWarsShop} from './services';

const starWarsShop = new StarWarsShop();

class Shop extends Component {
    render() {
        return (
            <Provider store={store}>
                <ShopProvider value={starWarsShop}>
                    <Router>
                        <App />
                    </Router>
                </ShopProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<Shop />, document.getElementById('root'));

