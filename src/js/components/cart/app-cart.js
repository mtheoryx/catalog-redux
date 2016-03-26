import React from 'react';                      // eslint-disable-line no-unused-vars
import AppStore from '../../stores/app-store';
import AppCartItem from './app-cart-item';      // eslint-disable-line no-unused-vars
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

//State callback for HOC
const cartItems = () => {
    return { items: AppStore.getCart() }
};

const Cart = ( props ) => {
    var total = 0;
    var items = props.items.map((item, i) => {
        let subtotal = item.cost * item.qty;
        total += subtotal;
        return (
            <AppCartItem
                subtotal={subtotal}
                key={i}
                item={item}/>
        )
    });

    return (
        <div>
            <h1>Cart</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th> </th>
                    <th>Item</th>
                    <th>Qty</th>
                    <th> </th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="4" className="text-right">Total</td>
                    <td>${total}</td>
                </tr>
                </tfoot>
            </table>
        </div>
    );

};

export default StoreWatchMixin(Cart, cartItems);
