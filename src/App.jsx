import { useEffect, useState } from 'react'
import './App.css'
import StartPage from './StartPage';
import Header from './Header';
import MainGame from './MainGame';
import cardInfo from "./assets/cardInfo.json"

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [playerTurn, setPlayerTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [cards, setCards] = useState(cardInfo);
  const [gameState, setGameState] = useState('End');
  const [winner, setWinner] = useState(player1);

  const shuffle = (array) => {
      const shuffledCards = [...array];
      for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
        setCards(shuffledCards);
        console.log("shuflled");

  };
    useEffect(() => {
      shuffle(cardInfo);
  }, []);


  return (
    <>
      <Header 
        setPlayerTurn={setPlayerTurn}
        setPlayer1= {setPlayer1} 
        setPlayer2={setPlayer2}
        setPlayer1Score= {setPlayer1Score} 
        setPlayer2Score={setPlayer2Score}
        setChoiceOne={setChoiceOne}
        setChoiceTwo={setChoiceTwo}
        shuffle={shuffle}
        setGameState={setGameState}
        gameState={gameState}
        />

      {
        gameState === 'Start' ?

        <StartPage 
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setGameState={setGameState}
          player1={player1}
          player2={player2}
          /> 

          :

          <MainGame
            setPlayerTurn={setPlayerTurn}
            setPlayer1={setPlayer1}
            setPlayer2={setPlayer2}
            setChoiceOne={setChoiceOne}
            setChoiceTwo={setChoiceTwo}
            setPlayer1Score= {setPlayer1Score} 
            setPlayer2Score={setPlayer2Score}
            shuffle={shuffle}
            setCards={setCards}
            setGameState={setGameState}
            setWinner={setWinner}
            playerTurn={playerTurn}            
            player1= {player1} 
            player2={player2}
            player1Score= {player1Score} 
            player2Score={player2Score}            
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}              
            shuffledCards={cards}        
            gameState={gameState}
            winner={winner}/>
      }
    </>
  )
}

export default App
