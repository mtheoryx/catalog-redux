import React from 'react';                   // eslint-disable-line no-unused-vars
import Catalog from './catalog/app-catalog'; // eslint-disable-line no-unused-vars
import Cart from './cart/app-cart';          // eslint-disable-line no-unused-vars
import Template from './app-template';
import CatalogDetail from './product/app-catalog-detail';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'; // eslint-disable-line no-unused-vars

export default() => {
    return(
        <Router history={ hashHistory }>
            <Route path="/" component={ Template }>
                <IndexRoute component={ Catalog } />
                <Route path="cart" component={ Cart } />
                <Route path="item/:item" component={ CatalogDetail } />
            </Route>
        </Router>
    )
}
