import React from 'react';                          // eslint-disable-line no-unused-vars
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';   // eslint-disable-line no-unused-vars
import { Link } from 'react-router';

export default ( props ) => {
    let itemStyle = {
        borderBottom: '1px solid #ccc',
        paddingBottom: '15'
    };

    return (
        <div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
            <h4>{ props.item.title }</h4>
            <img src="http://placehold.it/100X100" width="100" alt="" className="img-responsive"/>
            <p>{ props.item.summary }</p>
            <p>${ props.item.cost }
                <span className="text-success">
                    { props.item.qty && `(${props.item.qty}) in cart` }
                </span>
            </p>
            <div className="btn-group">
                <Link to={ `/item/${props.item.id}` } className="btn btn-default btn-sm">Learn More</Link>

                <CartButton
                    handler={
                        AppActions.addItem.bind(null, props.item)
                    }
                    txt="Add to Cart"
                />
            </div>
        </div>
    );
};
