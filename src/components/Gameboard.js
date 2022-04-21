import React from 'react'
import Carddeck from './Carddeck.js';
import Flop from './Flop';
import Turn from './Turn';
import River from './River';

const Gameboard = () => {

  return (
    <span className='midtable'>
      <Carddeck />
      <Flop />
      <Turn />
      <River />
    </span>
  )
}

export default Gameboard    
