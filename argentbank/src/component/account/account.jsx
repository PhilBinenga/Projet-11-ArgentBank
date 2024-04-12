import React from "react";

const account = ({title, accountNumber, description, amount}) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-content-wrapper">{title} {accountNumber}</h3>
            <p className="account-amount">{amount}</p>
            <p className="acount-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transaction</button>
            </div>
        </section>
    )
}

export default account;