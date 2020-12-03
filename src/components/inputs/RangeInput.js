import React from 'react'

function RangeInput({name, max, min, value, handleChange}){
    let nameToUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div>
            {min}
            <input type="range" id={name} name={name}
                value={value}
                min={min}
                max={max}
                onChange={handleChange} />
            {max}
            <br />
            <label htmlFor="likes">{nameToUpper} range {value === -1 ? min : value}</label><br />
        </div>
    )
}

export default RangeInput;