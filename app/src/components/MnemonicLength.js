import React, { useState } from "react";
import { RadioButton } from "./RadioButton";
import { loadedWasm } from "../App";

export const MnemonicLength = (props) => {
    const [mnemonicLength, setMnemonicLength] = useState('12Word');

    const radioChangeHandler = (e) => {
        setMnemonicLength(e.target.value);
    };

    return (
    
        <div className="MnemonicType">
          <h2>Mnemonic message from loaded WASM: {loadedWasm.greet('Austin')}</h2>

          <p1>Build mnemonics using 12 or 24 words:</p1>
          <div className="radio-btn-container" style={{ display: "flex" }}>
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={mnemonicLength === "12Word"}
              label="12 words"
              value="12Word"
            />
    
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={mnemonicLength === "24Word"}
              label="24 words"
              value="24Word"
            />
          </div>
          <h2 style={{ marginTop: "25px" }}>
            MnemonicLength = {mnemonicLength}
          </h2>
        </div>
      );
};