import React from 'react'; // eslint-disable-line no-unused-vars

export default (props) => {
    return (
        <button 
            className="btn btn-default btn-sm"
            onClick={ props.handler }
        >
            { props.txt }
        </button>
    );
};
