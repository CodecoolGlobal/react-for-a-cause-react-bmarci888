import React from "react";
import "./contact.css";
import contactPicture2 from "../assets/contact_2.png";
import contactPicture1 from "../assets/contact_1.png";
import contactPicture3 from "../assets/contact_3.png";
import contactPicture4 from "../assets/contact_4.png";

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Subject: "",
      YourMessage: "",
      submitted: false,
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
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: event.target.value,
        Subject: this.state.Subject,
        YourMessage: this.state.YourMessage,
        submitted: false,
      });
    }

    if (event.target.id === "Subject") {
      this.setState({
        FirstName: this.state.FirstName,
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
      submitted: true,
    });
    console.log(
      `FirstName: ${this.state.FirstName} LastName: ${this.state.LastName} Email: ${this.state.Email} Subject: ${this.state.Subject} YourMessage: ${this.state.YourMessage}`
    );
  }

  render() {
    return  (
      <div>
        <div>
        {this.state.submitted ? (<p className="thankY"><strong>
        We appreciate you contacting us. One of our colleagues will get back in
        touch with you soon! Have a great day! 
        </strong>
      </p>
    ) : (
        <form onSubmit={this.handleSubmit}>
          <h1 className="contactHr"> Contact Us!</h1>
          <div className="contactContainer">
            <img alt="contact 1" className="cImage" src={contactPicture2} />

            <div className="cardSubmit">
              <label>
                First Name:<br />
                <input
                  className="allInp"
                  id="FirstName"
                  type="text"
                  value={this.state.FirstName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Last Name:<br />
                <input
                  className="allInp"
                  id="LastName"
                  type="text"
                  value={this.state.LastName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Email:<br />
                <input
                  className="allInp"
                  id="Email"
                  type="text"
                  value={this.state.Email}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Subject:<br />
                <input
                  className="allInp"
                  id="Subject"
                  type="text"
                  value={this.state.Subject}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Your Message:<br />
                <input
                  className="allInp"
                  id="YourMessage"
                  type="text"
                  value={this.state.YourMessage}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <input className="button" type="submit" value="Submit" />
            </div>
          </div>
        </form>
    )}
        
        </div>
        <div className="contactAdd">
          <div>
            <p>
              <strong>GREEN BELT MOVEMENT HEADQUARTERS - KENYA</strong>
            </p>
            <p>Adams Arcade, Kilimani Road off Elgeyo Marakwet Rd</p>
            <p>P.O BOX 67545-00200</p>
            <p>Nairobi, Kenya</p>
            <p>Phone: +254 (20) 3873057 / (20) 3860158 / (20) 3860157</p>
            <p>Phone: +254 (0) 721342696</p>
            <p>Email: gbm@greenbeltmovement.org</p>
          </div>
          <img alt="contact 2" className="cImage2" src={contactPicture1} />
        </div>
        <div className="contactAdd2">
          <div className="contactText">
            <p>
              <strong>COURIER ADDRESS (FOR DHL, FEDEX, UPS, ETC.):</strong>
            </p>
            <p>Kililmani Road, off Elgeyo Marakwet Road</p>
            <p>Adams Arcade</p>
            <p>Nairobi, Kenya</p>
          </div>
          <img alt="contact 3" className="cImage3" src={contactPicture3} />
        </div>
        <div className="contactAdd3">
          <div>
            <p>
              <strong>THE GREEN BELT MOVEMENT - US OFFICE</strong>
            </p>
            <p>Green Belt Movement International</p>
            <p>442 Lorimer St.</p>
            <p>Ste D PMB 5015</p>
            <p>Brooklyn, NY 11206</p>
            <p>Email: gbmius@greenbeltmovement.org</p>
          </div>
          <img alt="contact 4" className="cImage4" src={contactPicture4} />
        </div>
      </div>
    );
  }
}
