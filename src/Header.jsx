import Button from "./Button"

const Header = () => {
    function exitGame () {
        console.log('hi :)')
    }

    return (
        <div className="header">
            <div></div>
            <h1>Concentration</h1>
            <div className="gameButtons">
                <Button
                    onClick={exitGame}
                    buttonText= "Exit Game"
                    buttonClass="exit"
                    id="exit" 
                /> 
        </div>
               
        </div>
    )
}

export default Header