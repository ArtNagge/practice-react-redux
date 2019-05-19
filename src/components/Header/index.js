import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './header.css';
import {connect} from "react-redux";

class Header extends Component {
    render () {
        const {countCart} = this.props;
        return (
            <header>
                <nav>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/cart">
                        Корзина
                        <span>
                            {countCart}
                        </span>
                    </NavLink>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = ({countCart}) => {
    return {countCart}
};
export default connect(mapStateToProps)(Header);