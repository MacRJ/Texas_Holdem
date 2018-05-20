import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCards} from './Actions/getDeck';
import BeginGame from './Components/beginGame';
import GameTable from './Components/GameTable';


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    beginGame: false,
    numberOfPlayers : null
    }
  }


  render() {

    var beginGameFunction = (numberOfDecks) => {
      console.log('begingame ', numberOfDecks)
      this.props.getCards(numberOfDecks)
    }
    var selectNumberOfPlayers = (numberOfPlayers) => {
      console.log('numberOfPlayers ', numberOfPlayers)
      this.setState({
        numberOfPlayers: numberOfPlayers,
        beginGame : true
      });
    }


    var renderBeginGameChoice = () => {
      if(this.state.beginGame === false) {
        return <BeginGame
          beginGame= {beginGameFunction}
          selectNumberOfPlayers = {selectNumberOfPlayers}
          />
      } else {
        return <GameTable numberOfPlayers = {this.state.numberOfPlayers}/>
      }
    }

    return (
      <div className="grid background">
        {renderBeginGameChoice()}
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
