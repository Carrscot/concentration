import React from "react";

const InputField = (props) => {
    const {type, id, placeholder, value, onInfoChange} = props;
    return (
        <>
            <input 
            onChange={onInfoChange} 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            value={value}/>
        </>
    )
}

export default InputField