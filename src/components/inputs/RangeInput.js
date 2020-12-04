import React from 'react'
import './RangeInput.scss'

function RangeInput({name, max, min, value, handleChange}){
    let nameToUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className="search-bar-group-item-range">
            <label className="search-bar-group-item-label" htmlFor="likes">{nameToUpper} <span>({value === -1 ? min : value})</span></label><br />
            <input type="range" id={name} name={name}
                value={value}
                min={min}
                max={max}
                onChange={handleChange} />
            <br />
            
        </div>
    )
}

export default RangeInput;