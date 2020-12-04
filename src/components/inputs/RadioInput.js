import React from 'react'
import './RadioInput.scss'

function RadioInput({ name, value, choices, handleChange }) {
    let inputs = choices.map((choice, id) => {
        let choiceToUpper = choice.charAt(0).toUpperCase() + choice.slice(1);
        let checked = (value === choice);
        return (
            <React.Fragment key={id}>
                <label htmlFor={choice} className="radio-container" >
                    <input type="radio" id={choice} name={name} value={choice} onChange={handleChange} checked={checked}/>
                    <span className={"checkmark " + choice}></span>
                    {choiceToUpper}
                </label><br />
            </React.Fragment>
        )
    })
    return (
        <div className="search-bar-group-item-radio">
            {inputs}
        </div>
    )
}

export default RadioInput;