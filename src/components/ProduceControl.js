import React from "react";
import ProduceList from "./ProduceList";
import Produce from "./Produce";

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleMonth: props
    };
    // this.handleClick = this.handleClick.bind(this); //new code here
  }

  handleClick = () => {
    this.setState(prevState => ({
      visibleMonth: !prevState.visibleMonth
    }));
  }

  // handleClick().then(response => {
  //   this.setState({
  //       month: response.month
  //       selection: response.selection
  //     });
  //   });

  render(){
    let currentlyVisibleMonth = null;
    // let buttonText = null; // new code
    if (this.state.visibleMonth) {
      currentlyVisibleMonth = <ProduceList />;
      // buttonText = "Add Ticket"; // new code
    } else {
      currentlyVisibleMonth = <ProduceList />
    }
    return (
      <React.Fragment>
         {currentlyVisibleMonth}
        {/* {this.state.visibleMonth[0]} */}
        {/* <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}


export default ProduceControl;