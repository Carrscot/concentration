import { useState } from 'react'
import './App.css'
import Button from './Button'
import InputField from './InputField'
import PlayerCard from './PlayerCard';

function StartPage(props) {
    const {setPlayer1, setPlayer2, player1, player2} = props
    const [testState, setTestState] = useState('Test');
    let player1Name;
    let player2Name;

    function onStartClick (e) {
        if(player1 ==='' || player2==='') {
            console.log("please enter names for both palyers")
        }
        else {
            setPlayer1(player1Name);
            setPlayer2(player2Name);
            console.log("player names updated player1: ", player1, "player 2: ", player2)
        }
    }

    function handlePlayer1Change (e) {
        setPlayer1(e.target.value);
        player1Name = e.target.value;
        console.log("player1 change ", player1Name);
    }
    function handlePlayer2Change (e) {
        setPlayer2(e.target.value);
        player2Name = e.target.value;
        console.log("player2 change", player2Name);
    }
    return (
        <div className='startPage'>
        <div className='playerCards'>

            <PlayerCard 
            player="P1" 
            placeholder="palceholder1"
            onInfoChange={handlePlayer1Change}/>

            <PlayerCard 
            player="P2" 
            placeholder="palceholder2"
            onInfoChange={handlePlayer2Change}/>
        </div>
        <Button 
        onClick={onStartClick}
        buttonText= "Let's Play"
        buttonClass="start"
        id="start"/>
        <p>{player1}</p>
        <p>{player2}</p>
        </div>
    )
}

export default StartPage
