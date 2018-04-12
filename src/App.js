import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCards} from './Actions/getDeck'
// import Begingame from './components/beginGame'

class App extends Component {

componentDidMount() {
  this.props.getCards()
}

  render() {

    return (
      <div className="App">
      Hello World!!
      </div>
    );
  }
}




function mapStateToProps(state, props) {
  console.log('state',state)
  console.log('props', props)
  return {
    deck: state.cardsObject,
    cards: state.cards

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCards: bindActionCreators(getCards, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
