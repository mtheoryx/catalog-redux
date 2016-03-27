import React from 'react'; // eslint-disable-line no-unused-vars
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router'; // eslint-disable-line no-unused-vars

const CartSummary = ( props ) => {
    return (
        <div style={{ paddingTop: 15 }}>
            <Link to="/cart" className="btn btn-success">
                { `Cart Items: ${props.qty} / $${props.total}` }
            </Link>
        </div>
    )
};

export default StoreWatchMixin(CartSummary, AppStore.getCartTotals);
