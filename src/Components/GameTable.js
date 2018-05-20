import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './Card';
import Player from './Player';

class GameTable extends Component {

render() {

  var generateCardDeck = () => {
    console.log('generateCardDeck', this.props)
     return this.props.cardDeck.map((card, i) => {
      return <Card key={i} card={this.props.cardDeck[i]}/>
    })
  }
  var generatePlayers = () => {
    return this.props.numberOfPlayers.map((player, i) => {
      return <Player key={i} />
    })
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
    cardDeck : state.cards.results
  }
}

export default connect(mapStateToProps,null)(GameTable);
