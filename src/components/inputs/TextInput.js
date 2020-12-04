import React from 'react'
import './TextInput.scss'

function TextInput({ name, value, handleChange, placeholder }) {
    let nameToUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className="search-bar-group-item-text">
            <label className="search-bar-group-item-label" htmlFor={name}>{nameToUpper}</label>
            <input type="text" placeholder={placeholder} id={name}
                value={value}
                onChange={handleChange} />
            <br />
        </div>
    )
}

export default TextInput;