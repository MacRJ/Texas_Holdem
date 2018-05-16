import React from 'react';
import { Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    console.log('superProps', props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    console.log('renderProps', this.props.beginGame)
    return (
      <div className="startGameMenu">
        <Card>
          <CardImg top width="110%" height="110%" src="backOfCard.jpg" alt="Card Image" />
          <CardBody>
            <CardTitle>Texas Holdem</CardTitle>
            <CardText>Start Game</CardText>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Number of decks
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem onClick={() => this.props.beginGame(1)}>1</DropdownItem  >
            <DropdownItem onClick={() => this.props.beginGame(2)}>2</DropdownItem>
            <DropdownItem onClick={() => this.props.beginGame(3)}>3</DropdownItem>
          </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
      </div>
    );
  }
}
