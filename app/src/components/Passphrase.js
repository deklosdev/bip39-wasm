import React, { useState } from "react";
import { RadioButton } from "./RadioButton";

export const Passphrase = (props) => {
    const [passphrase, setPassphrase] = useState('');

    const radioChangeHandler = (e) => {
        setPassphrase(e.target.value);
    };

    return (
        <div className="Passphrase">
          <h1>React Component (Radio Button) Example</h1>
          <div className="radio-btn-container" style={{ display: "flex" }}>
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={paymentMethod === "12Word"}
              label="12Word"
              value="12Word"
            />
    
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={paymentMethod === "24Word"}
              label="24Word"
              value="24Word"
            />
          </div>
          {paymentMethod === "QuickPay" && (
            <input
              style={{ marginTop: "10px" }}
              type="text"
              placeholder="Enter transaction id"
            />
          )}
          <h2 style={{ marginTop: "25px" }}>
            The selected radio button value is = {paymentMethod}
          </h2>
        </div>
      );
};