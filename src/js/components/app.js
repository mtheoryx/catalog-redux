import React from 'react';
import AppActions from '../actions/app-actions'

export default class App extends React.Component {
  render(){
    return(
      <div>
        <h1
        onClick={AppActions.addItem.bind(null, 'this is the item')}
        >Hello!</h1>
        <p>How are you?</p>
      </div>
    )
  }
}
