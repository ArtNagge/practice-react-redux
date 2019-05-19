import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './header.css';

export default class Header extends Component {
    render () {
        return (
            <header>
                <nav>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/cart">Корзина</NavLink>
                </nav>
            </header>
        )
    }
}