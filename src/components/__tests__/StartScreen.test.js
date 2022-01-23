/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import StartScreen from '../StartScreen';

describe('StartScreen', () => {
    it('should render', () => {
        const view = render(<StartScreen />)
        const result = view.getByText('Test');
        expect(result).toBeTruthy()
    });
    
    it('should render number of players question', () => {
        
    });

    it('should render start game button', () => {

    });
});