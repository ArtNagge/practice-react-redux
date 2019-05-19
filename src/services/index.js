class StarWarsShop {
    _apiBase = 'https://swapi.co/api';

    async getStarships() {
        const result = await fetch(`${this._apiBase}/starships/`);
        if (!result.ok) {
            throw new Error('Error ' + result.status);
        }
        return result;
    };
}
const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrapped, f) => f(wrapped), comp
    );
};

export {StarWarsShop, compose}