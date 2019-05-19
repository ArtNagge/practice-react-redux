import React from 'react';
import {compose} from "../../services";
import withHOComponents from "../c-hoc";
import {connect} from "react-redux";

const CartPage = ({cart}) => {
    return (
        <main>
            {
                cart.map((item, idx) => {
                    return (
                        <div key={idx} className='cart-item'>
                            <span className='names'>Name: {item.name}</span>
                            <span className='coasts'>Count: {item.count}</span>
                            <span className='coasts'>Cost: {item.cost}</span>
                        </div>
                    )})
            }
        </main>
    );
};

const mapStateToProps = ({cart}) => {
    return {cart};
};
export default compose(
    withHOComponents(),
    connect(mapStateToProps)
)(CartPage);