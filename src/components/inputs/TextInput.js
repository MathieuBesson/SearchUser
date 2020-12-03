import React from 'react'

function TextInput({ name, value, handleChange, placeholder }) {
    let nameToUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div>
            <label htmlFor={name}>{nameToUpper}</label>
            <input type="text" placeholder={placeholder} id={name}
                value={value}
                onChange={handleChange} />
            <br />
        </div>
    )
}

export default TextInput;