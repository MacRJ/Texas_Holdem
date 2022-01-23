import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it.only('should rener start of game', () => {
        const view = render(<App />)
        const result = view.getByText('Test');
        expect(result).toBeTruthy()
    });
})