import React, { Component } from "react";
import Modal from "react-modal";
import { Input } from "semantic-ui-react";
import * as firebase from "firebase";

var app = firebase.initializeApp({
  apiKey: "AIzaSyDg0ZjuvjlJK8X4Mr7BR6JxzJIg4RNYqEc",
  authDomain: "smartshare-db7de.firebaseapp.com",
  databaseURL: "https://smartshare-db7de.firebaseio.com",
  projectId: "smartshare-db7de",
  storageBucket: "smartshare-db7de.appspot.com",
  messagingSenderId: "521172786419"
});

var db = firebase.database();

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

const bookButton = <button className="ui button">Book</button>;

class CarListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      booked: false,
      startDay: "",
      startTime: "",
      endDay: "",
      endTime: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.startDayChange = this.startDayChange.bind(this);
    this.endDayChange = this.endDayChange.bind(this);
  }

  componentDidMount() {
    db.ref("/mattyuen")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
      });
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
    this.setState({
      booked: false,
      startDay: "",
      startTime: "",
      endDay: "",
      endTime: ""
    });
  }

  startDayChange(e) {
    this.setState({ startDay: e.target.value });
  }

  endDayChange(e) {
    this.setState({ endDay: e.target.value });
  }

  render() {
    return (
      <div className="ui cards">
        <div className="card" style={grey}>
          <div className="content">
            {/* <img className="right floated mini ui image" src={logo} /> */}
            <div className="header">
              {this.props.make} {this.props.model}
            </div>
            <div className="meta">{this.props.year}</div>
            <div className="description">
              {this.state.booked ? "You booked this car from " : null}
              {this.state.booked ? this.state.startDay : null}
              {this.state.booked ? " to " : null}
              {this.state.booked ? this.state.endDay : null}
              {this.state.booked ? <br /> : null}
              {this.state.booked
                ? "Text 'UNLOCK' to 1-226-286-4315 to unlock the car during this time"
                : null}
              {this.state.booked ? <br /> : null}
              <span onClick={this.openModal}>
                {!this.state.booked ? bookButton : null}
              </span>
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
              <Input
                onChange={this.startDayChange}
                placeholder="dd/mm/yyyy"
                value={this.startDay}
              />
              <Input placeholder="hh:mm" />
              <br />
              <label style={endTimeStyle}>End Time</label>
              <Input onChange={this.endDayChange} placeholder="dd/mm/yyyy" />
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
