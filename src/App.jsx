import { useEffect, useState } from 'react'
import './App.css'
import StartPage from './StartPage';
import Header from './Header';
import MainGame from './MainGame';
import cardInfo from "./assets/cardInfo.json"

function App() {
  const [player1, setPlayer1] = useState('Jim');
  const [player2, setPlayer2] = useState('Sally');
  const [playerTurn, setPlayerTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [cards, setCards] = useState(cardInfo);
  const [gameState, setGameState] = useState('Start')

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
        gameState={gameState}
        />

      {
        gameState === 'Start' ?

        <StartPage 
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          player1={player1}
          player2={player2}
          /> 

          :

          <MainGame
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            player1= {player1} 
            player2={player2}
            player1Score= {player1Score} 
            player2Score={player2Score}
            setPlayer1Score= {setPlayer1Score} 
            setPlayer2Score={setPlayer2Score}
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            setChoiceOne={setChoiceOne}
            setChoiceTwo={setChoiceTwo}
            shuffledCards={cards}
            setCards={setCards}/>
      }
    </>
  )
}

export default App
