import React from 'react';
import {ShopConsumer} from "../c-context";

const withHOComponents = () => (Wrapped) => {
    return (props) => {
        return (
            <ShopConsumer>
                {
                    (starWarsShop) => {
                        return <Wrapped {...props} starWarsShop={starWarsShop} />
                    }
                }
            </ShopConsumer>
        );
    };
};

export default withHOComponents;