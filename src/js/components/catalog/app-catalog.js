import React from 'react';                          // eslint-disable-line no-unused-vars
import AppStore from '../../stores/app-store';
import CatalogItem from './app-catalog-item';       // eslint-disable-line no-unused-vars
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

//State callback for HOC
function getCatalog() {
    return { items: AppStore.getCatalog() };
}
const Catalog = ( props ) => {
    let items = props.items.map(item => {
        return <CatalogItem key={ item.id } item={ item }/>
    });

    return (
        <div className="row">
            { items }
        </div>
    );

};

export default StoreWatchMixin(Catalog, getCatalog);
