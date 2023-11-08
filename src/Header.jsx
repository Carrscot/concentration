import Button from "./Button"

const Header = () => {
    function exitGame () {
        console.log('hi :)')
    }

    return (
        <div className="header">
        <h1>Concentration</h1>
        <Button
            onClick={exitGame}
            buttonText= "Exit Game"
            buttonClass="exit"
            id="exit" 
        />        
        </div>
    )
}

export default Header