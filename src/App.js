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
    }
  }


  render() {

    var beginGameFunction = (numberOfDecks) => {
      this.props.getCards(numberOfDecks)
      this.setState({
        beginGame: true
      })
    }


    let renderBeginGameChoice = () => {
      if(this.state.beginGame === false) {
        return <BeginGame beginGame= {beginGameFunction} />
      } else {
        <GameTable />
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
