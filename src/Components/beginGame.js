import React from 'react';
import { Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDecks = this.toggleDecks.bind(this);
    this.togglePlayers = this.togglePlayers.bind(this);

    this.state = {
      decksdropdown: false,
      playersDropdown : false
    };
  }

  toggleDecks() {
      this.setState({
        decksdropdown: !this.state.decksdropdown
      });
  }
  togglePlayers(){
    this.setState({
      playersDropdown: !this.state.playersDropdown
    })
  }

  render() {
    console.log('renderProps', this.props.beginGame)
    return (
      <div className="startGameMenu">
        <Card>
          <CardImg top width="10%" height="10%" src="backOfCard.jpg" alt="Card Image" />
          <CardBody>
            <CardTitle>Texas Holdem</CardTitle>
            <CardText>Start Game</CardText>
          <Dropdown isOpen={this.state.decksdropdown} toggle={this.toggleDecks}>
          <DropdownToggle caret>
            Number of decks
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem onClick={() => this.props.selectNumberOfDecks(1)}>1</DropdownItem  >
            <DropdownItem onClick={() => this.props.selectNumberOfDecks(2)}>2</DropdownItem>
            <DropdownItem onClick={() => this.props.selectNumberOfDecks(3)}>3</DropdownItem>
          </DropdownMenu>
          </Dropdown>
          <br/>
          <Dropdown isOpen={this.state.playersDropdown} toggle={this.togglePlayers}>
          <DropdownToggle caret>
            Number of Players
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem onClick={() => this.props.selectNumberOfPlayers(1)}>1</DropdownItem  >
            <DropdownItem onClick={() => this.props.selectNumberOfPlayers(2)}>2</DropdownItem>
            <DropdownItem onClick={() => this.props.selectNumberOfPlayers(3)}>3</DropdownItem>
          </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
      </div>
    );
  }
}
