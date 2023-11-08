import React from "react";

const Button = (props) => {
    const {onClick, buttonText, buttonClass, id} = props;
    return (
        <>
            <button 
            onClick={onClick} 
            className={buttonClass} 
            id={id}> 
            {buttonText} 
            </button>
        </>
    )
}

export default Button