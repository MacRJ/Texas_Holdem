import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import Card from './Card';
import Player from './Player';

class GameTable extends Component {

render() {
var {cardDeck, numberOfPlayers, players} = this.props;

  var generateCardDeck = () => {
     return cardDeck.map((card, i) => {
      return <Card key={i} card={cardDeck[i]}/>
    })
  }
  var generatePlayers = () => {
    let playersVar = players[0];
    for(var i = 0; i = numberOfPlayers; i++) {
      return <Player key={i} playerName = {playersVar[i]} />
    }
  }
    return (
      <div className="grid">
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
  return {
    cardDeck : state.cards.results,
    players : state.players
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addPlayer: bindActionCreators(null, dispatch)
//   }
// }

export default connect(mapStateToProps, null)(GameTable);
