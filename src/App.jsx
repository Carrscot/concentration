import { useState } from 'react'
import './App.css'
import StartPage from './StartPage';
import Header from './Header';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('')

  return (
    <>
      <Header />
      <StartPage 
      setPlayer1={setPlayer1}
      setPlayer2={setPlayer2}
      player1={player1}
      player2={player2}
      />
    </>
  )
}

export default App
