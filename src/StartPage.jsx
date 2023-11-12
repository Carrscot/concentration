import { useState } from 'react'
import './App.css'
import Button from './Button'
import PlayerInputCard from './PlayerInputCard';
import player1Image from './assets/player1Image.png'
import player2Image from './assets/player2Image.png'

function StartPage(props) {
    const {
        setPlayer1, 
        setPlayer2, 
        player1, 
        player2,
        setGameState} = props;

    const [nameCheck, setNameCheck] = useState(true);

    function onStartClick () {
        if(player1 ==='' || player2==='') {
            alert("please enter names for both palyers");
            setNameCheck(false);
        }
        else {
            setNameCheck(true);
            setGameState("In Progress")
        }
    }

    function handlePlayer1Change (e) {
        setPlayer1(e.target.value);
    }
    function handlePlayer2Change (e) {
        setPlayer2(e.target.value);
    }
    return (
        <div className='startPage'>
            <h2>Are you ready to play?</h2>
            <div className='playerInputCards'>

                <PlayerInputCard
                    inputClass={nameCheck && player1 === '' ? '' : 'warning'}
                    src={player1Image}
                    id="player1" 
                    player="P1" 
                    placeholder="Enter Player 1 Name"
                    onInfoChange={handlePlayer1Change}/>

                <PlayerInputCard 
                    inputClass={nameCheck && player2 === '' ? '' : 'warning'}
                    src={player2Image}
                    id="player2" 
                    player="P2" 
                    placeholder="Enter Player 2 Name"
                    onInfoChange={handlePlayer2Change}/>
            </div>
            <Button 
                onClick={onStartClick}
                buttonText= "Let's Play"
                buttonClass="start"
                id="start"/>
        </div>
    )
}

export default StartPage
