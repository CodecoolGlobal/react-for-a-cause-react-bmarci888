import React from 'react';
import { useState } from 'react';
import donatePicture1 from '../assets/donate-1.jpeg';
import donatePicture2 from '../assets/donate-2.jpg';
import donatePicture3 from '../assets/donate-3.jpeg';
import payPalImage from '../assets/PayPal.svg.png';
import cardImages from '../assets/cards.png';
import './donation.css';

export default function Donation() {
  const [isCard, setIsCard] = useState(true);
  const [isDonated, setIsDonated] = useState(false);

  function handleOptionClick() {
    isCard ? setIsCard(false) : setIsCard(true);
  }

  return (
    <div className="supportContainer">
      <div className="supportText">
        <h1 className="supportTitle">Support Us!</h1>
        <p className="supportText">
          The ongoing support of individuals, like you, makes it possible for
          the Green Belt Movement to continue its core work of engaging women in
          planting trees, protecting critical forests & watersheds, and
          empowering communities. Your support helps to conserve soil and ensure
          food security, to sustain rural community’s livelihoods, and build
          resilience to climate change. It also enables us to develop the tools
          to reach out and inspire people in Kenya, and around the world to take
          action in support of good governance, environmental sustainability,
          and the expansion of democratic space. We hope you will invest in our
          work as we transform lives.
        </p>
      </div>
      <div className="donationOptions">
        <label>
          <input
            type={'radio'}
            className={'radioButton'}
            name="paymentOption"
            checked={isCard}
            onChange={handleOptionClick}
          />
          Credit/Debit Card
        </label>
        <label>
          <input
            type={'radio'}
            className={'radioButton'}
            name="paymentOption"
            onChange={handleOptionClick}
          />
          PayPal
        </label>
      </div>
      {isDonated ? (
        <Message setIsDonated={setIsDonated} />
      ) : isCard ? (
        <DonationForm setIsDonated={setIsDonated} />
      ) : (
        <PayPalForm setIsDonated={setIsDonated} />
      )}
    </div>
  );
}

function DonationForm({ setIsDonated }) {
  return (
    <div className="donationContainer">
      <div className={'card'}>
        <h3>Credit Card Details</h3>
        <label>
          Name:
          <br /> <input className={'allInputs'} />
        </label>
        <br />
        <label>
          Card Number:
          <br /> <input className={'allInputs'} />
        </label>
        <br />
        <label>
          Card Expiration:
          <br /> <input className={'expInput allInputs'} type={'month'} />
        </label>
        <br />
        <label>
          Security Code:
          <br /> <input className={'smallInputs allInputs'} type="password" />
        </label>
        <br />
        <label>
          Amount in USD:
          <br /> <input className={'smallInputs allInputs'} />
        </label>
        <br />
        <img className="creditCards" alt="card images" src={cardImages} />
        <br />
        <button className="buttons" onClick={() => HandleClick(setIsDonated)}>
          Donate!
        </button>
      </div>
      <img alt="green belt movement" className="image" src={donatePicture1} />
    </div>
  );
}

function PayPalForm({ setIsDonated }) {
  return (
    <div className="donationContainer">
      <div className={'card'}>
        <img className="logo" src={payPalImage} alt="paypal logo" />
        <button className="buttons" onClick={() => HandleClick(setIsDonated)}>
          Donate!
        </button>
      </div>
      <img className="image" alt="green belt movement" src={donatePicture3} />
    </div>
  );
}

function Message({ setIsDonated }) {
  setTimeout(() => {
    setIsDonated(false);
  }, 5000);
  return (
    <div className="donationContainer">
      <div className="card">
        <h3>Thank You For Your Help!</h3>
      </div>
      <img className="image" alt="green belt movement" src={donatePicture2} />
    </div>
  );
}

function HandleClick(setIsDonated) {
  return setIsDonated(true);
}
