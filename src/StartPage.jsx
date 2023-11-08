import { useState } from 'react'
import './App.css'
import Button from './Button'
import InputField from './InputField'

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
    <>
      <Button 
      onClick={updateState}
      buttonText= "Test"
      id="test"/>

      <InputField                  
        type='text' 
        id='testField' 
        placeholder='Test Input Field' 
        onInfoChange={handleChange} 
        />
    </>
  )
}

export default StartPage
