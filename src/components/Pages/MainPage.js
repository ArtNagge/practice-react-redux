import React, {Component} from 'react';
import {compose} from "../../services";
import withHOComponents from "../c-hoc";
import {connect} from "react-redux";
import {starShipsLoaded, addCart} from "../../actions";
import './pages.css';

class MainPage extends Component {

    componentDidMount() {
        const {starWarsShop, starShipsLoaded} = this.props;
        starWarsShop.getStarships().then(data => data.json()).then(json => starShipsLoaded(json.results));
    }

    render () {
        const {starShips, addCart} = this.props;
        return (
            <main>
                {
                    starShips.map((ship, idx) => {
                        return (
                            <div key={idx} className='ship'>
                                <span className='name'>Name: {ship.name}</span>
                                <span className='coast'>Cost: {ship.cost_in_credits}</span>
                                <button onClick={() => addCart(idx)}>Add to Cart</button>
                            </div>
                        )})
                }
            </main>
        );
    }
}

const mapStateToProps = ({starShips}) => {
    return {starShips};
};
export default compose(
    withHOComponents(),
    connect(mapStateToProps, {starShipsLoaded, addCart})
)(MainPage);