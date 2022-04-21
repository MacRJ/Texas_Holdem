/* eslint-disable testing-library/prefer-screen-queries */
// import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import StartScreen from '../StartScreen';

describe('StartScreen', () => {
    it('should render', () => {
        const {getByTestId} = render(<StartScreen />)
        expect(getByTestId('start-screen')).toBeInTheDocument()
    });
    
    // it('should render number of players question', () => {
    //     const view = render(<StartScreen />)
    //     const result = view.queryAllByTestId('numberOfPlayers');
    //     expect(result).toBeInTheDocument()
    // });

    // it('should render start game button', () => {
    //     const view = render(<StartScreen />)
    //     const result = view.queryAllByTestId('startGameButton');
    //     expect(result).toBeInTheDocument()
    // });
});