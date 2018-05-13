import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCards} from './Actions/getDeck';
import BeginGame from './Components/beginGame';


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    beginGame: false,
    }
  }


componentDidMount() {
  this.props.getCards()
}

  render() {

    var beginGameFunction = () => {
      console.log("beginGameFunction Heard")
      this.setState({
        beginGame: true
      })
    }


    let renderBeginGameChoice = () => {
      console.log('thecurrent state ', this.state)
      if(this.state.beginGame === false) {
        return <BeginGame  beginGame= {beginGameFunction} />
      }
    }

    return (
      <div className="background">
      <div className="grid">
        {renderBeginGameChoice()}
        </div>
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
