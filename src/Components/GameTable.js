import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './Card';
import Player from './Player';

class GameTable extends Component {

render() {

  var generateCardDeck = () => {
     return this.props.cardDeck.map((card, i) => {
      return <Card key={i} card={this.props.cardDeck[i]}/>
    })
  }
  var generatePlayers = () => {
    let players = this.props.players;
    console.log("testing Props", this.props.numberOfPlayers)

  }
    return (
      <div>
        <div className="cardDeck">
          {generateCardDeck()}
        </div>
        <div>
          {generatePlayers()}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  console.log('GameTable State', state)
  console.log('GameTable props', props)
  return {
    cardDeck : state.cards.results,
    players : state.players
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPlayer: bindActionCreators(null, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameTable);
