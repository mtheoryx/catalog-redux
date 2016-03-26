import React from 'react';
import AppActions from '../actions/app-actions';
import CartButton from './app-cart-button';

export default ( props ) => {
    return (
        <div className="col-xs-6 col-sm-4 col-md-3">
            <h4>{ props.item.title }</h4>
            <img src="http://placehold.it/100X100" width="100" alt="" className="img-responsive"/>
            <p>{ props.item.summary }</p>
            <p>${ props.item.cost } <span className="text-success">
                { props.item.qty && `(${props.item.qty}) in cart` }
            </span></p>
            <CartButton
                handler={
                    AppActions.addItem.bind(null, props.item)
                }
                txt="Add to Cart"
            />
        </div>
    );
};
