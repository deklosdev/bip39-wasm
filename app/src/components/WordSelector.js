import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./styles.css";


export const WordSelector = (props) => {

    
    const [selected, setSelected] = useState([]);
    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry" },
        { label: "Watermelon 🍉", value: "watermelon" },
        { label: "Pear 🍐", value: "pear", disabled: true },
        { label: "Apple 🍎", value: "apple" },
        { label: "Tangerine 🍊", value: "tangerine" },
        { label: "Pineapple 🍍", value: "pineapple" },
        { label: "Peach 🍑", value: "peach" }
    ];

    return (
        <div className="WordSelector">
            <h1>Select Fruits</h1>
            <pre>{JSON.stringify(selected)}</pre>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
                isCreatable={true}
            />
        </div>
    );
}
