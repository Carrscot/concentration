import { useState } from 'react'
import './App.css'
import Button from './Button'
import InputField from './InputField'
import PlayerCard from './PlayerCard';

function StartPage() {
  const [testState, setTestState] = useState('Test');
  let value;

  function updateState (e) {
    e.preventDefault()
    setTestState(value);
    console.log(testState);
  }

  function handleChange (e) {
    value = e.target.value;
    console.log(value);
  }
  return (
    <div className='startPage'>
    <div className='playerCards'>
        <PlayerCard player="P1"/>
        <PlayerCard player="P2"/>
    </div>
      <Button 
      onClick={updateState}
      buttonText= "Let's Play"
      buttonClass="start"
      id="start"/>
    </div>
  )
}

export default StartPage
