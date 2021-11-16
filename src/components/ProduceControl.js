import React from "react";
import ProduceList from "./ProduceList";
import Produce from "./Produce";

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      availableProduce[0];
    };
    this.handleClick = this.handleClick.bind(this); //new code here
  }

  handleClick() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <ProduceList />;
      buttonText = "Add Ticket"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default ProduceControl;