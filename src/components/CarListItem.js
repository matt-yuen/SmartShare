import React, { Component } from "react";
import Modal from "react-modal";
import { Input } from "semantic-ui-react";

Modal.setAppElement(document.getElementById("root"));

const logo = require("../images/logo.png");

const grey = {
  backgroundColor: "#EFEEEE"
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const startTimeStyle = {
  paddingRight: "10px"
};

const endTimeStyle = {
  paddingRight: "16px"
};

const wrapTime = {
  paddingTop: "10px",
  paddingBottom: "10px"
};

const cancelButton = <button className="ui button">Cancel</button>;

class CarListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      booked: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onSubmit(e) {
    e.preventDefault();
    this.closeModal();
    this.setState({ booked: true });
  }

  handleCancel() {
    this.setState({ booked: false });
  }

  render() {
    return (
      <div className="ui cards">
        <div className="card" style={grey}>
          <div className="content">
            <img className="right floated mini ui image" src={logo} />
            <div className="header">{this.props.model}</div>
            <div className="meta">
              {this.props.make}, {this.props.year}
            </div>
            <div className="description">
              <button className="ui button" onClick={this.openModal}>
                Book
              </button>
              <span onClick={this.handleCancel}>
                {this.state.booked ? cancelButton : null}
              </span>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Book Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Booking {this.props.make} {this.props.model}, {this.props.year}
          </h2>
          <div>
            Please indicate the time period that you would like to book the car
          </div>
          <form onSubmit={this.onSubmit}>
            <div style={wrapTime}>
              <label style={startTimeStyle}>Start Time</label>
              <Input placeholder="dd/mm/yyyy" />
              <Input placeholder="hh:mm" />
              <br />
              <label style={endTimeStyle}>End Time</label>
              <Input placeholder="dd/mm/yyyy" />
              <Input placeholder="hh:mm" />
              <br />
            </div>
            <button className="ui button">Book</button>
            <button className="ui button" onClick={this.closeModal}>
              Close
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default CarListItem;
