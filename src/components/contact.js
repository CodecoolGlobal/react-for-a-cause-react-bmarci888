import React from "react";

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Subject: "",
      YourMessage: "",
      submitted : false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "FirstName") {
      this.setState({
        FirstName: event.target.value,
        LastName: this.state.LastName,
        Email: this.state.Email,
        Subject: this.state.Subject,
        YourMessage: this.state.YourMessage,
        submitted: false,
      });
    }

    if (event.target.id === "LastName") {
      this.setState({
        FirstName: this.state.FirstName,
        LastName: event.target.value,
        Email: this.state.Email,
        Subject: this.state.Subject,
        YourMessage: this.state.YourMessage,
        submitted: false,
      });
    }

    if (event.target.id === "Email") {
      this.setState({
        FirstName:this.state.FirstName,
        LastName: this.state.LastName,
        Email: event.target.value,
        Subject: this.state.Subject,
        YourMessage: this.state.YourMessage,
        submitted: false,
      });
    }

    if (event.target.id === "Subject") {
      this.setState({
        FirstName:this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
        Subject: event.target.value,
        YourMessage: this.state.YourMessage,
        submitted: false,
      });
    }

    if (event.target.id === "YourMessage") {
      this.setState({
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
        Subject: this.state.Subject,
        YourMessage: event.target.value,
        submitted: false,
      });
    }
  
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Subject: this.state.Subject,
      YourMessage: event.target.value,
      submitted: true
    });
    console.log(
      `FirstName: ${this.state.FirstName} LastName: ${this.state.LastName} Email: ${this.state.Email} Subject: ${this.state.Subject} YourMessage: ${this.state.YourMessage}`
    );
  }

  render() {
    return this.state.submitted ? (<label>We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
        Have a great day!</label>): 
    (
      <form onSubmit={this.handleSubmit}>
        <label>Contact Us!</label>
        <br />
        <label>
          First Name:
          <input
            id="FirstName"
            type="text"
            value={this.state.FirstName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            id="LastName"
            type="text"
            value={this.state.LastName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            id="Email"
            type="text"
            value={this.state.Email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            id="Subject"
            type="text"
            value={this.state.Subject}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Your Message:
          <input
            id="YourMessage"
            type="text"
            value={this.state.YourMessage}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
