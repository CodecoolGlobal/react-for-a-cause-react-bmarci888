import React, { useState } from 'react';
import './contact.css';
import contactPicture1 from '../assets/contact_1.png';
import contactPicture3 from '../assets/contact_3.png';
import contactPicture4 from '../assets/contact_4.png';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values) => {
    setSubmitted(true);
    console.log(values);
  };

  return (
    <div className="contactUsContainer">
      <div className="contactUsTitle">
        <h1> Contact Us!</h1>
        <hr className="contactHr" />
      </div>
      {submitted ? (
        <p className="thankY">
          <strong>
            We appreciate you contacting us. One of our colleagues will get back
            in touch with you soon! Have a great day!
          </strong>
        </p>
      ) : (
        <ContactForm handleSubmit={handleSubmit} />
      )}

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
        <img alt="contact 2" className="cImage" src={contactPicture1} />
      </div>
      <div className="contactAdd">
        <img alt="contact 3" className="cImage" src={contactPicture3} />
        <div className="contactText">
          <p>
            <strong>COURIER ADDRESS (FOR DHL, FEDEX, UPS, ETC.):</strong>
          </p>
          <p>Kililmani Road, off Elgeyo Marakwet Road</p>
          <p>Adams Arcade</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
      <div className="contactAdd">
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
        <img alt="contact 4" className="cImage" src={contactPicture4} />
      </div>
    </div>
  );
};

const ContactForm = ({ handleSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [yourMessage, setYourMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ firstName, lastName, email, subject, yourMessage });
  };

  return (
    <form className="cardSubmit" onSubmit={onSubmit}>
      <div>
        <label htmlFor="FirstName">First Name:</label>
        <input
          className="allInp"
          id="FirstName"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label htmlFor="LastName">Last Name:</label>
        <input
          className="allInp"
          id="LastName"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Email">Email:</label>
        <input
          className="allInp"
          id="Email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="Subject">Subject:</label>
        <input
          className="allInp"
          id="Subject"
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </div>
      <div className="messageContainer">
        <label htmlFor="YourMessage">Your Message:</label>
        <textarea
          className="allInp"
          id="YourMessage"
          type="text"
          value={yourMessage}
          onChange={(event) => setYourMessage(event.target.value)}
          rows="5"
        />
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export { ContactUs };
