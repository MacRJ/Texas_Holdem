import React, {useState, useEffect} from 'react'
import StartScreen from './components/StartScreen';
import Gameboard from './components/Gameboard'

const App = () => {
  const [stage, setstage] = useState('start');

  const gameStage = stage => {
    setstage(stage)
  }

  useEffect(() => {
    if(stage === 'deal') {
      
    }
  }, [stage])

  return (
    <div className='container'>
      {
        stage === 'start' && <StartScreen gameStage={gameStage}/> 
      }
      {
        stage !== 'start' && <Gameboard />
      }
    </div>
  )
}

export default App;
