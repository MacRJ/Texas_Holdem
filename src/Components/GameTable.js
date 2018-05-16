import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './Card';

const GameTable = () => {

let generateCardDeck = () => {
  return this.props.cards.map((card, i) => {
    return <Card key={i} />
  })
}
  return (
    {generateCardDeck}
  )
}


function mapStateToProps(state, props) {
  return {
    cards : state.cards;
  }
}

export default connect(mapStateToProps,null)(GameTable);
