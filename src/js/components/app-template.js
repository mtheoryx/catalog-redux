import React from 'react';                  // eslint-disable-line no-unused-vars
import Header from './header/app-header';   // eslint-disable-line no-unused-vars

export default ( props ) => {
    return (
        <div className="container">
            <Header></Header>
            { props.children }
        </div>
    );
};
