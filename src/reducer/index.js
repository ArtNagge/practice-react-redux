const initState = {
    starShips: [],
    cart: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "STARSHIP_LOADED":
            return Object.assign({}, state, {starShips: action.payload});
        default:
            return state
    }
};

export default reducer;