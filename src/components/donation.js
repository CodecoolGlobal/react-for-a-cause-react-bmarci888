import React from "react";
import { useState } from "react";
import './donation.css';

export default function Donation() {
    const [chooseCard, setChooseCard] = useState("isHidden");
    const [choosePaypal, setChoosePaypal] = useState("isHidden");
    const [valueCard, setValueCard] = useState(false);
    const [valuePaypal, setValuePaypal] = useState(false);
    const [hideMessage, setHideMessage] = useState("isHidden");
    const [cardHolderName, setCardHolderName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [expiration, setExpiration] = useState();
    const [securityCode, setSecurityCode] = useState();
    const [amount, setAmount] = useState();

    function handleCheckedCard() {
        setCardHolderName();
        setCardNumber();
        setExpiration();
        setSecurityCode();
        setAmount();
        setValueCard(true);
        setValuePaypal(false);
        setChooseCard("");
        setChoosePaypal("isHidden");
    }

    function handleCheckedPaypal() {
        setValuePaypal(true);
        setValueCard(false);
        setChoosePaypal("");
        setChooseCard("isHidden");
    }

    function handleClick() {
        setChooseCard("isHidden");
        setChoosePaypal("isHidden");
        setValueCard(false);
        setValuePaypal(false);
        setCardHolderName("");
        setCardNumber("");
        setSecurityCode("");
        setExpiration("");
        setAmount("");
        setHideMessage("");
        setTimeout(() => {
            setHideMessage("isHidden");
        }, 2000);
    }

    return (
        <div>
            <div className="supportText">
                <h1>Support Us!</h1>
                <p>The ongoing support of individuals, like you, makes it possible for the Green Belt Movement to continue its core work of engaging women in planting trees, protecting critical forests & watersheds, and empowering communities.
                    Your support helps to conserve soil and ensure food security, to sustain rural community’s livelihoods, and build resilience to climate change.
                    It also enables us to develop the tools to reach out and inspire people in Kenya, and around the world to take action in support of good governance, environmental sustainability, and the expansion of democratic space.
                    We hope you will invest in our work as we transform lives.</p>
            </div>
            <div className="donationOptions">
                <label>
                    <input type={"checkbox"} checked={valueCard} onChange={handleCheckedCard} />
                    Credit/Debit Card
                </label>
                <label>
                    <input type={"checkbox"} checked={valuePaypal} onChange={handleCheckedPaypal} />
                    PayPal
                </label>
            </div>
            <div className={chooseCard}>
                <div className={"cardDonation"}>
                    <h3>Credit Card Details</h3>
                    <label>Name: </label>
                    <input value={cardHolderName} />
                    <br />
                    <label>Card Number: </label>
                    <input value={cardNumber} />
                    <br />
                    <label>Card Expiration:</label>
                    <input className={"smallInputs"} type={"month"} value={expiration} />
                    <br />
                    <label>Security Code:</label>
                    <input className={"smallInputs"} value={securityCode} />
                    <br />
                    <label>Amount in USD:<br />
                        <input className={"smallInputs"} value={amount} />
                    </label>
                    <br />
                    <button onClick={handleClick}>Donate!</button>
                </div>
            </div>
            <div className={choosePaypal}>
                <div className={"paypalDonation"}>
                    <h3>PayPal</h3>
                    <button onClick={handleClick}>Donate!</button>
                </div>
            </div>
            <div className={hideMessage}>
                <h3>Thank You For Your Help!</h3>
            </div>
        </div>
    );
}
