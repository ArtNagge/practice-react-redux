const initState = {
    starShips: [],
    cart: [],
    countCart: 0
};

const reducer = (state = initState, action) => {
    switch (action.type) {

        case "STARSHIP_LOADED":
            return Object.assign({}, state, {starShips: action.payload});

        case "STARSHIP_ADD_TO_CART":
            const itmId = action.payload;
            const starship = state.starShips.find((ship) => ship.id === itmId);
            const cartItemIdx = state.cart.findIndex(({id}) => id === itmId);
            const cartItem = state.cart[cartItemIdx];

            const newItem = updateCartItem(starship, cartItem);

            return Object.assign({}, state, {
                cart: updateCartItems(state.cart, newItem, cartItemIdx),
                countCart: state.countCart + 1
            });

        default:
            return state

    }
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx < 0) {
        return [
            ...cartItems,
            item
        ];
    }else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ];
    }
};
const updateCartItem = (ship, item = {}) => {

    const {
        name = ship.name,
        id = ship.id,
        count = 0,
        cost = 0
    } = item;

    return {
        name,
        id,
        count: count + 1,
        cost: parseInt(+cost + +ship.cost_in_credits / 1000)
    }

};

export default reducer;