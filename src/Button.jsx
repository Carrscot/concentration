import React from "react";

const Button = (props) => {
    const {onClick, buttonText, buttonClass, id} = props;
    return (
        <div>
            <button 
            onClick={onClick} 
            className={buttonClass} 
            id={id}> 
            {buttonText} 
            </button>
        </div>
    )
}

export default Button