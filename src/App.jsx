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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [cards, setCards] = useState(cardInfo);

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
      <Header />
      <MainGame
      playerTurn={playerTurn}
      setPlayerTurn={setPlayerTurn}
      player1= {player1} 
      player2={player2}
      choiceOne={choiceOne}
      choiceTwo={choiceTwo}
      setChoiceOne={setChoiceOne}
      setChoiceTwo={setChoiceTwo}
      shuffledCards={cards}/>
      {/* <StartPage 
      setPlayer1={setPlayer1}
      setPlayer2={setPlayer2}
      player1={player1}
      player2={player2}
      /> */}
    </>
  )
}

export default App
