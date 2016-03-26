import React from 'react';
import Catalog from './catalog/app-catalog'; // eslint-disable-line no-unused-vars
import Cart from './cart/app-cart';          // eslint-disable-line no-unused-vars

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <Catalog />
                <Cart />
            </div>
        )
    }
}
