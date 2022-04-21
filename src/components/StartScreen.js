import React from 'react';

const StartScreen = ({gameStage}) => {
    return (
        <span className='startscreen' >
            <button onClick={() => gameStage('deal')} style={{margin: 'auto', width: '50%', justifyContent: 'center'}}> 
                Start
            </button>
        </span>
        
    )
};


export default StartScreen;