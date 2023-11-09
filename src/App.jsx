import { useState } from 'react'
import './App.css'
import StartPage from './StartPage';
import Header from './Header';
import MainGame from './MainGame';

function App() {
  const [player1, setPlayer1] = useState('Jim');
  const [player2, setPlayer2] = useState('Sally')

  return (
    <>
      <Header />
      <MainGame
      player1= {player1} 
      player2={player2}/>
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
