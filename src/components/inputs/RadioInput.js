import React from 'react'

function RadioInput({ name, value, choices, handleChange }) {
    let inputs = choices.map((choice, id) => {
        let choiceToUpper = choice.charAt(0).toUpperCase() + choice.slice(1);
        // let checked = (value === "all") ? true : false;
        return (
            <React.Fragment key={id}>
                <label htmlFor={choice}>
                    <input type="radio" id={choice} name={name} value={choice}  onChange={handleChange} />
                    {choiceToUpper}
                </label><br />
            </React.Fragment>
        )
    })
    return (
        <div>
            {inputs}
        </div>
    )
}

export default RadioInput;