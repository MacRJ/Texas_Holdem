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
    return (
      <div className="startGame">
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
            <DropdownItem header>1</DropdownItem>
            <DropdownItem disabled>2</DropdownItem>
            <DropdownItem>3</DropdownItem>
          </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
      </div>
    );
  }
}
