const starShipsLoaded = (newStarship) => {
    const newEl = newStarship.map((item, idx) => {return {id: idx, ...item}});
    return {
        type: 'STARSHIP_LOADED',
        payload: newEl
    }
};

const addCart = (idItem) => {
    return {
        type: 'STARSHIP_ADD_TO_CART',
        payload: idItem
    }
};

export {
    starShipsLoaded,
    addCart
};